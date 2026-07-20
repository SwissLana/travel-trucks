import Icon from '../Icon/Icon';

import { getCamperFeatures } from '../../utils/getCamperFeatures';

import styles from './CamperFeatures.module.css';

function CamperFeatures({
  camper,
  includeEquipment = false,
  showIcons = true,
}) {
  const features = getCamperFeatures(camper, {
    includeEquipment,
  });

  return (
    <ul className={styles.features} aria-label="Camper features">
      {features.map((feature) => (
        <li key={feature.key} className={styles.feature}>
          {showIcons && feature.icon && <Icon name={feature.icon} size={20} />}

          <span>{feature.label}</span>
        </li>
      ))}
    </ul>
  );
}

export default CamperFeatures;
