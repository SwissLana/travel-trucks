import Icon from '../Icon/Icon';

import styles from './Rating.module.css';

function RatingStars({ rating }) {
  const normalizedRating = Math.min(
    5,
    Math.max(0, Math.round(Number(rating) || 0)),
  );

  return (
    <div
      className={styles.ratingStars}
      role="img"
      aria-label={`${normalizedRating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const isActive = index < normalizedRating;

        return (
          <Icon
            key={index}
            name="star"
            size={16}
            className={isActive ? styles.starActive : styles.starInactive}
          />
        );
      })}
    </div>
  );
}

export default RatingStars;
