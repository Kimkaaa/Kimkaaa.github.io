import ContactCard from '../common/ContactCard';
import SectionTitle from '../common/SectionTitle';
import { contacts } from '../../data/contact';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <SectionTitle>Contact</SectionTitle>

      <div className="contact__list">
        {contacts.map((item) => (
          <ContactCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}