import styles from './Loader.module.css';

function Loader() {
  return (
    <div
      className={styles.overlay}
      role="status"
      aria-live="polite"
      aria-label="Loading campers"
    >
      <div className={styles.modal}>
        <span className={styles.spinner} aria-hidden="true" />

        <h2 className={styles.title}>Loading trucks...</h2>

        <p className={styles.text}>
          Please wait while we fetch the best
          <br />
          travel trucks for you
        </p>
      </div>
    </div>
  );
}

export default Loader;
