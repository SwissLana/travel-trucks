import styles from './Checkbox.module.css';

function Checkbox({
  name,
  value,
  checked,
  onChange,
  children,
  disabled = false,
}) {
  return (
    <label className={styles.checkbox}>
      <input
        className={styles.input}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />

      <span className={styles.control} aria-hidden="true" />

      <span className={styles.label}>{children}</span>
    </label>
  );
}

export default Checkbox;
