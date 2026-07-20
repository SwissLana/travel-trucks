import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BookingForm from '../../components/BookingForm/BookingForm';
import CamperGallery from '../../components/CamperGallery/CamperGallery';
import CamperFeatures from '../../components/CamperFeatures/CamperFeatures';
import Container from '../../components/Container/Container';
import EmptyState from '../../components/EmptyState/EmptyState';
import Icon from '../../components/Icon/Icon';
import Loader from '../../components/Loader/Loader';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import VehicleDetails from '../../components/VehicleDetails/VehicleDetails';

import { fetchCamperById } from '../../redux/campers/campersOperations';
import {
  selectCamperDetailsError,
  selectCamperDetailsLoading,
  selectSelectedCamper,
} from '../../redux/campers/campersSelectors';

import { formatLocation } from '../../utils/formatLocation';
import { formatPrice } from '../../utils/formatPrice';

import styles from './CamperDetailsPage.module.css';

function CamperDetailsPage() {
  const { camperId } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector(selectSelectedCamper);
  const isLoading = useSelector(selectCamperDetailsLoading);
  const error = useSelector(selectCamperDetailsError);

  useEffect(() => {
    if (camperId) {
      dispatch(fetchCamperById(camperId));
    }
  }, [dispatch, camperId]);

  if (isLoading || (!camper && !error)) {
    return (
      <main className={styles.page}>
        <Container>
          <Loader />
        </Container>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.page}>
        <Container>
          <EmptyState
            title="Camper not found"
            actionLabel="Back to catalog"
            actionTo="/catalog"
            showClearButton={false}
          >
            We couldn’t find the camper you’re looking for.
            <br />
            It may no longer be available.
          </EmptyState>
        </Container>
      </main>
    );
  }

  const reviews = camper.reviews ?? [];

  return (
    <main className={styles.page}>
      <Container>
        <div className={styles.topSection}>
          <CamperGallery
            gallery={camper.gallery ?? []}
            camperName={camper.name}
          />

          <div className={styles.infoColumn}>
            <section className={styles.summary}>
              <h1 className={styles.title}>{camper.name}</h1>

              <div className={styles.meta}>
                <div className={styles.ratingMeta}>
                  <Icon
                    name="star"
                    size={16}
                    className={styles.ratingIcon}
                    aria-hidden="true"
                  />

                  <span>
                    {camper.rating} ({reviews.length} Reviews)
                  </span>
                </div>

                <span className={styles.location}>
                  <Icon name="location" size={20} />
                  {formatLocation(camper.location)}
                </span>
              </div>

              <p className={styles.price}>{formatPrice(camper.price)}</p>

              <p className={styles.description}>{camper.description}</p>
            </section>

            <section className={styles.detailsCard}>
              <h2 className={styles.sectionTitle}>Vehicle details</h2>

              <CamperFeatures
                camper={camper}
                includeEquipment
                showIcons={false}
              />
              <VehicleDetails camper={camper} />
            </section>
          </div>
        </div>

        <section className={styles.bottomSection}>
          <div className={styles.reviewsColumn}>
            <h2 className={styles.sectionTitle}>Reviews</h2>

            {reviews.length > 0 ? (
              <div className={styles.reviews}>
                {reviews.map((review, index) => (
                  <ReviewCard
                    key={`${review.reviewer_name}-${index}`}
                    review={review}
                  />
                ))}
              </div>
            ) : (
              <p>This camper has no reviews yet.</p>
            )}
          </div>

          <div className={styles.bookingColumn}>
            <BookingForm />
          </div>
        </section>
      </Container>
    </main>
  );
}

export default CamperDetailsPage;
