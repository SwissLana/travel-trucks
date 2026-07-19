import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';

import styles from './HomePage.module.css';

function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Campers of your dreams</h1>

        <p className={styles.description}>
          You can find everything you want in our catalog
        </p>

        <Button as={Link} to="/catalog" className={styles.cta}>
          View Now
        </Button>
      </div>
    </section>
  );
}

export default HomePage;
