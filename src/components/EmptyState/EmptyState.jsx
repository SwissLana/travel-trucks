import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import emptyCampersImage from '../../assets/images/empty-campers.svg';

import styles from './EmptyState.module.css';

function EmptyState({
  title = 'No campers found',
  children,
  onClearFilters,
  actionLabel = 'View all campers',
  actionTo,
  showClearButton = true,
}) {
  return (
    <div className={styles.empty}>
      <img
        className={styles.image}
        src={emptyCampersImage}
        alt=""
        aria-hidden="true"
      />

      <h2 className={styles.title}>{title}</h2>

      <p className={styles.text}>
        {children ?? (
          <>
            We couldn’t find any campers that match your filters.
            <br />
            Try adjusting your search or clearing some filters.
          </>
        )}
      </p>

      <div className={styles.actions}>
        {showClearButton && onClearFilters && (
          <Button
            type="button"
            variant="outline"
            className={styles.clearButton}
            onClick={onClearFilters}
          >
            <Icon name="close" size={24} aria-hidden="true" />
            <span>Clear filters</span>
          </Button>
        )}

        {actionTo ? (
          <Button as={Link} to={actionTo} className={styles.viewAllButton}>
            {actionLabel}
          </Button>
        ) : (
          <Button
            type="button"
            className={styles.viewAllButton}
            onClick={onClearFilters}
          >
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
}

export default EmptyState;
