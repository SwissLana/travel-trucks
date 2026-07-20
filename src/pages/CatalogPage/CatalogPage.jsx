import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button/Button';
import CamperCard from '../../components/CamperCard/CamperCard';
import Container from '../../components/Container/Container';
import EmptyState from '../../components/EmptyState/EmptyState';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import Loader from '../../components/Loader/Loader';

import { fetchCampers } from '../../redux/campers/campersOperations';
import {
  selectCampers,
  selectCampersError,
  selectCampersLoading,
  selectCampersPage,
  selectHasMoreCampers,
} from '../../redux/campers/campersSelectors';
import { selectFilters } from '../../redux/filters/filtersSelectors';
import { resetFilters } from '../../redux/filters/filtersSlice';

import { buildCampersParams } from '../../utils/buildCampersParams';

import styles from './CatalogPage.module.css';

const CAMPERS_PER_PAGE = 4;

function CatalogPage() {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);
  const campers = useSelector(selectCampers);
  const currentPage = useSelector(selectCampersPage);
  const hasMoreCampers = useSelector(selectHasMoreCampers);
  const isLoading = useSelector(selectCampersLoading);
  const error = useSelector(selectCampersError);

  const [filtersResetKey, setFiltersResetKey] = useState(0);

  useEffect(() => {
    const params = buildCampersParams({
      page: 1,
      limit: CAMPERS_PER_PAGE,
      filters,
    });

    dispatch(fetchCampers(params));
  }, [dispatch, filters]);

  const handleClearFilters = () => {
    dispatch(resetFilters());

    setFiltersResetKey((current) => current + 1);
  };

  const handleLoadMore = () => {
    const params = buildCampersParams({
      page: currentPage + 1,
      limit: CAMPERS_PER_PAGE,
      filters,
    });

    dispatch(fetchCampers(params));
  };

  const isInitialLoading = isLoading && campers.length === 0;

  const isLoadingMore = isLoading && campers.length > 0;

  return (
    <main className={styles.page}>
      <Container>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <FiltersPanel key={filtersResetKey} />
          </aside>

          <section className={styles.results} aria-label="Available campers">
            {error && <p role="alert">Something went wrong: {error}</p>}

            {!error && !isLoading && campers.length === 0 && (
              <EmptyState onClearFilters={handleClearFilters} />
            )}

            {!error && campers.length > 0 && (
              <>
                <ul className={styles.list}>
                  {campers.map((camper) => (
                    <li key={camper.id}>
                      <CamperCard camper={camper} />
                    </li>
                  ))}
                </ul>

                {hasMoreCampers && (
                  <Button
                    variant="outline"
                    type="button"
                    className={styles.loadMoreButton}
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                  >
                    {isLoadingMore ? 'Loading...' : 'Load more'}
                  </Button>
                )}
              </>
            )}
          </section>
        </div>
      </Container>

      {isInitialLoading && <Loader />}
    </main>
  );
}

export default CatalogPage;
