const FORM_LABELS = {
  alcove: 'Alcove',
  panelTruck: 'Panel van',
  fullyIntegrated: 'Fully integrated',
};

const EQUIPMENT_FEATURES = [
  { key: 'AC', label: 'AC' },
  { key: 'kitchen', label: 'Kitchen' },
  { key: 'TV', label: 'TV' },
  { key: 'bathroom', label: 'Bathroom' },
  { key: 'radio', label: 'Radio' },
  { key: 'refrigerator', label: 'Refrigerator' },
  { key: 'microwave', label: 'Microwave' },
  { key: 'gas', label: 'Gas' },
  { key: 'water', label: 'Water' },
];

function capitalize(value) {
  if (typeof value !== 'string' || value.length === 0) {
    return '';
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getCamperFeatures(camper, { includeEquipment = false } = {}) {
  const features = [
    camper.transmission && {
      key: 'transmission',
      icon: 'transmission',
      label: capitalize(camper.transmission),
    },

    camper.engine && {
      key: 'engine',
      icon: 'fuel',
      label: capitalize(camper.engine),
    },
  ].filter(Boolean);

  if (includeEquipment) {
    features.push(
      ...EQUIPMENT_FEATURES.filter((feature) => camper[feature.key]),
    );
  }

  if (camper.form) {
    features.push({
      key: 'form',
      icon: 'camper',
      label: FORM_LABELS[camper.form] ?? capitalize(camper.form),
    });
  }

  return features;
}
