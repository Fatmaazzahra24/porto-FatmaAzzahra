export default function Container({ children, className = '' }) {
  return <div className={['container', className].filter(Boolean).join(' ')}>{children}</div>;
}
