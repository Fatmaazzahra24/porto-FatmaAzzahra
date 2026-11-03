import { Mail } from 'lucide-react';

function ContactIcon({ social }) {
  return social.id === 'email'
    ? <Mail size={17} strokeWidth={1.5} aria-hidden="true" />
    : <img src={social.icon} alt="" width="16" height="16" loading="lazy" />;
}

export default function ContactLinks({ socials }) {
  return (
    <ul className="contact-links" aria-label="Contact and social profiles">
      {socials.map((social) => (
        <li key={social.id}>
          {social.href ? (
            <a href={social.href} target={social.id === 'email' ? undefined : '_blank'} rel={social.id === 'email' ? undefined : 'noopener noreferrer'}>
              <ContactIcon social={social} />
              <span>{social.label}</span>
              {social.id !== 'email' && <span className="sr-only"> (opens in a new tab)</span>}
            </a>
          ) : (
            <span className="contact-links__pending" aria-disabled="true" title="Profile coming soon">
              <ContactIcon social={social} />
              <span>{social.label}</span>
              <span className="sr-only"> — profile coming soon</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
