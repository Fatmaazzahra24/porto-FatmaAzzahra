export default function DocumentButton({ href, download, children, icon: Icon, leadingIcon: LeadingIcon, ariaLabel, primary = false }) {
  const className = `document-button${primary ? ' document-button--primary' : ''}`;
  const contents = (
    <>
      {LeadingIcon && <LeadingIcon size={19} strokeWidth={1.6} aria-hidden="true" />}
      {children}
      <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
    </>
  );

  if (!href) {
    return (
      <button className={className} type="button" disabled aria-describedby="document-status">
        {contents}
      </button>
    );
  }

  return (
    <a
      className={className}
      href={href}
      aria-label={ariaLabel}
      download={download || undefined}
      target={download ? undefined : '_blank'}
      rel={download ? undefined : 'noopener noreferrer'}
    >
      {contents}
    </a>
  );
}
