import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, id, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          removeContact={() => removeContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
