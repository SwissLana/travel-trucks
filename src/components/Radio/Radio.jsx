import styles from './Radio.module.css';

function Radio({ name, value, checked, onChange, children, disabled = false }) {
  return (
    <label className={styles.radio}>
      <input
        className={styles.input}
        type="radio"
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

export default Radio;
