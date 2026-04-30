import type { ContactItem } from '../../data/contact';
import './ContactCard.css';

interface ContactCardProps {
  item: ContactItem;
}

export default function ContactCard({ item }: ContactCardProps) {
  const Icon = item.icon;
  const isExternalLink = !item.href.startsWith('mailto:');

  return (
    <a
      className="contact-card"
      href={item.href}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noreferrer' : undefined}
      aria-label={item.ariaLabel}
    >
      <span className="contact-card__icon" aria-hidden="true">
        <Icon />
      </span>

      <span className="contact-card__content">
        <strong className="contact-card__title">{item.title}</strong>
        <span className="contact-card__desc">{item.description}</span>
      </span>
    </a>
  );
}