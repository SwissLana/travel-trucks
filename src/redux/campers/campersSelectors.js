export const selectCampers = (state) => state.campers.items;

export const selectCampersTotal = (state) => state.campers.total;

export const selectCampersPage = (state) => state.campers.page;

export const selectHasMoreCampers = (state) =>
  state.campers.items.length < state.campers.total;

export const selectSelectedCamper = (state) => state.campers.selectedCamper;

export const selectCampersLoading = (state) => state.campers.isLoading;

export const selectCampersError = (state) => state.campers.error;

export const selectCamperDetailsLoading = (state) =>
  state.campers.isDetailsLoading;

export const selectCamperDetailsError = (state) => state.campers.detailsError;
