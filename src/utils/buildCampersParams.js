export function buildCampersParams({ page, limit, filters }) {
  const params = {
    page,
    limit,
  };

  if (filters.location) {
    params.location = filters.location;
  }

  if (filters.form) {
    params.form = filters.form;
  }

  if (filters.engine) {
    params.engine = filters.engine;
  }

  if (filters.transmission) {
    params.transmission = filters.transmission;
  }

  filters.equipment?.forEach(key => {
    params[key] = true;
  });

  return params;
}
