import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import { formatLocation } from '../../utils/formatLocation';
import { formatPrice } from '../../utils/formatPrice';
import CamperFeatures from '../CamperFeatures/CamperFeatures';

import styles from './CamperCard.module.css';

function CamperCard({ camper }) {
  const imageUrl = camper.gallery[0].thumb;

  return (
    <article className={styles.card}>
      <img className={styles.image} src={imageUrl} alt={camper.name} />

      <div className={styles.content}>
        <header className={styles.header}>
          <h2 className={styles.title}>{camper.name}</h2>

          <div className={styles.priceWrapper}>
            <p className={styles.price}>{formatPrice(camper.price)}</p>
          </div>
        </header>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <Icon name="star" size={16} className={styles.ratingIcon} />

            <span className={styles.ratingText}>
              {camper.rating} ({camper.reviews.length} reviews)
            </span>
          </span>

          <span className={styles.metaItem}>
            <Icon name="location" size={16} />

            <span>{formatLocation(camper.location)}</span>
          </span>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <CamperFeatures camper={camper} />

        <Button
          as={Link}
          to={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Show more
        </Button>
      </div>
    </article>
  );
}

export default CamperCard;
