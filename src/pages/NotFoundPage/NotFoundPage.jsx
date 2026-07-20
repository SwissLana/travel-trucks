import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';

import emptyCampersImage from '../../assets/images/empty-campers.svg';

import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <img
          className={styles.image}
          src={emptyCampersImage}
          alt=""
          aria-hidden="true"
        />

        <p className={styles.code}>Oops!</p>

        <h1 className={styles.title}>Page not found</h1>

        <p className={styles.text}>
          Sorry, the page you are looking for doesn’t exist or may have been
          moved.
        </p>

        <Button as={Link} to="/" className={styles.homeButton}>
          Back to Home
        </Button>
      </section>
    </main>
  );
}

export default NotFoundPage;
