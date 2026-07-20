import Rating from '../Rating/Rating';

import styles from './ReviewCard.module.css';

function ReviewCard({ review }) {
  const reviewerName = review.reviewer_name ?? 'Anonymous';

  const initial = reviewerName.trim().charAt(0).toUpperCase() || '?';

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar} aria-hidden="true">
          {initial}
        </div>

        <div>
          <h3 className={styles.name}>{reviewerName}</h3>

          <Rating rating={review.reviewer_rating} />
        </div>
      </div>

      <p className={styles.comment}>{review.comment}</p>
    </article>
  );
}

export default ReviewCard;
