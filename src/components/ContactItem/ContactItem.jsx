import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, removeContact }) => {
  return (
    <li className={css.item} key={id}>
      {name + ': ' + number}
      <button
        className={css.button}
        type="button"
        onClick={() => removeContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
