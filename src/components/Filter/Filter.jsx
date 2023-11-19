import css from './Filter.module.css';

const Filter = ({ value, onFilterContacts }) => {
  return (
    <label className={css.label}>
      Find in Contacts
      <input
        className={css.input}
        type="text"
        onChange={onFilterContacts}
        value={value}
      />
    </label>
  );
};

export default Filter;
