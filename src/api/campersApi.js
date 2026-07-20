import { api } from './api';

export async function getCampers(params = {}) {
  try {
    const { data } = await api.get('/campers', { params });

    return data;
  } catch (error) {
    if (error.response?.status === 404) {
      return {
        items: [],
        total: 0,
      };
    }

    throw error;
  }
}

export async function getCamperById(camperId) {
  const { data } = await api.get(`/campers/${camperId}`);

  return data;
}
