import { useEffect } from 'react';

const restingPose = { x: 0, y: 0, rotation: 0, tiltX: 0, tiltY: 0, lift: 0, scale: 1 };
const clamp = (value, limit) => Math.max(-limit, Math.min(limit, value));

export default function useIdCardMotion(figureRef, buttonRef, poseRef) {
  useEffect(() => {
    const figure = figureRef.current;
    const button = buttonRef.current;
    const pose = poseRef.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const values = { ...restingPose };
    const target = { ...restingPose };
    const velocity = Object.fromEntries(Object.keys(restingPose).map((key) => [key, 0]));
    let frame;
    let previousTime;
    let drag;
    let inView = true;

    const paint = () => {
      pose.style.transform = `perspective(900px) translate3d(${values.x}px, ${values.y - values.lift}px, 0) rotateX(${values.tiltX}deg) rotateY(${values.tiltY}deg) rotate(${values.rotation}deg) scale(${values.scale})`;
    };
    const tick = (time) => {
      if (preference.matches || document.hidden || !inView) {
        reset(true);
        return;
      }
      const dt = Math.min((time - (previousTime ?? time - 16)) / 1000, 1 / 30);
      previousTime = time;
      let moving = false;
      Object.keys(values).forEach((key) => {
        const acceleration = (target[key] - values[key]) * 210 - velocity[key] * 22;
        velocity[key] += acceleration * dt;
        values[key] += velocity[key] * dt;
        const tolerance = key === 'scale' ? 0.0002 : 0.025;
        if (Math.abs(target[key] - values[key]) > tolerance || Math.abs(velocity[key]) > tolerance * 8) moving = true;
        else {
          values[key] = target[key];
          velocity[key] = 0;
        }
      });
      paint();
      if (moving) frame = requestAnimationFrame(tick);
      else {
        frame = undefined;
        previousTime = undefined;
        if (!drag && button.dataset.state === 'settling') button.dataset.state = 'idle';
      }
    };
    const start = () => {
      if (!frame && !preference.matches && inView && !document.hidden) frame = requestAnimationFrame(tick);
    };
    const releaseCapture = (pointerId) => {
      if (button.hasPointerCapture(pointerId)) button.releasePointerCapture(pointerId);
    };
    const reset = (immediate = false) => {
      const pointerId = drag?.id;
      drag = undefined;
      if (pointerId !== undefined) releaseCapture(pointerId);
      Object.assign(target, restingPose);
      button.dataset.state = immediate ? 'idle' : 'settling';
      if (immediate) {
        cancelAnimationFrame(frame);
        frame = undefined;
        previousTime = undefined;
        Object.assign(values, restingPose);
        Object.keys(velocity).forEach((key) => { velocity[key] = 0; });
        paint();
      } else start();
    };
    const enabled = () => !preference.matches && inView && !document.hidden;
    const pointerDown = (event) => {
      if (!enabled() || !event.isPrimary || event.button !== 0 || drag) return;
      const bounds = figure.getBoundingClientRect();
      const edgeSpace = Math.max(0, Math.min(bounds.left, document.documentElement.clientWidth - bounds.right) - 2);
      drag = {
        id: event.pointerId, type: event.pointerType, startX: event.clientX, startY: event.clientY,
        bounds, moved: false,
        reach: Math.min(38, bounds.width * 0.12, edgeSpace * 0.45),
        maxRotation: Math.min(7, edgeSpace / 6),
      };
      button.setPointerCapture(event.pointerId);
      button.dataset.state = 'pressed';
      Object.assign(target, { lift: 5, scale: 1.018 });
      start();
    };
    const pointerMove = (event) => {
      if (!enabled()) return;
      if (drag) {
        if (event.pointerId !== drag.id) return;
        const dx = event.clientX - drag.startX;
        const dy = event.clientY - drag.startY;
        // Let a vertical touch gesture scroll the page; horizontal gestures pull the card.
        if (!drag.moved && drag.type === 'touch' && Math.abs(dy) > 8 && Math.abs(dy) > Math.abs(dx)) {
          reset();
          return;
        }
        if (Math.hypot(dx, dy) < 5 && !drag.moved) return;
        drag.moved = true;
        button.dataset.state = 'dragging';
        const reach = drag.reach;
        const x = Math.tanh(dx / 110) * reach;
        const y = Math.tanh(dy / 100) * Math.min(24, drag.bounds.height * 0.1);
        Object.assign(target, { x, y, rotation: reach ? x / reach * drag.maxRotation : 0, tiltX: -y * 0.12, tiltY: x * 0.12, lift: 5, scale: 1.018 });
        start();
      } else if (event.pointerType === 'mouse') {
        const bounds = figure.getBoundingClientRect();
        const x = clamp((event.clientX - bounds.left) / bounds.width - 0.5, 0.5);
        const y = clamp((event.clientY - bounds.top) / bounds.height - 0.5, 0.5);
        Object.assign(target, { tiltX: -y * 9, tiltY: x * 11, lift: 4, scale: 1.012 });
        button.dataset.state = 'hover';
        start();
      }
    };
    const pointerUp = (event) => {
      if (event.pointerId !== drag?.id) return;
      const tapped = !drag.moved;
      reset();
      if (tapped) {
        values.rotation = -3;
        velocity.rotation = 16;
        start();
      }
    };
    const cancelPointer = (event) => {
      if (event.pointerId === drag?.id) reset();
    };
    const pointerLeave = () => {
      if (!drag) reset();
    };
    const click = (event) => {
      if (event.detail !== 0 || !enabled() || drag) return;
      reset();
      values.y = -4;
      values.rotation = -4;
      velocity.rotation = 24;
      start();
    };
    const keyDown = (event) => {
      if (event.key === 'Escape') reset();
    };
    const blur = () => reset();
    const updateMotion = () => {
      const running = enabled();
      figure.dataset.motion = running ? 'running' : 'paused';
      if (!running) reset(true);
    };
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updateMotion();
    }) : null;
    observer?.observe(figure);
    updateMotion();
    const listeners = {
      pointerdown: pointerDown, pointermove: pointerMove, pointerup: pointerUp,
      pointercancel: cancelPointer, lostpointercapture: cancelPointer,
      pointerleave: pointerLeave, click, keydown: keyDown, blur,
    };
    Object.entries(listeners).forEach(([name, handler]) => button.addEventListener(name, handler));
    window.addEventListener('blur', blur);
    document.addEventListener('visibilitychange', updateMotion);
    preference.addEventListener('change', updateMotion);
    return () => {
      Object.entries(listeners).forEach(([name, handler]) => button.removeEventListener(name, handler));
      window.removeEventListener('blur', blur);
      document.removeEventListener('visibilitychange', updateMotion);
      preference.removeEventListener('change', updateMotion);
      observer?.disconnect();
      reset(true);
    };
  }, [figureRef, buttonRef, poseRef]);
}
