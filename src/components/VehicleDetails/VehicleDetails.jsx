import styles from './VehicleDetails.module.css';

const VEHICLE_DETAILS = [
  {
    key: 'form',
    label: 'Form',
    format: (value) => formatCamperForm(value),
  },
  {
    key: 'length',
    label: 'Length',
  },
  {
    key: 'width',
    label: 'Width',
  },
  {
    key: 'height',
    label: 'Height',
  },
  {
    key: 'tank',
    label: 'Tank',
  },
  {
    key: 'consumption',
    label: 'Consumption',
  },
];

function VehicleDetails({ camper }) {
  return (
    <dl className={styles.details}>
      {VEHICLE_DETAILS.map(({ key, label, format }) => {
        const value = camper[key];

        if (value == null || value === '') {
          return null;
        }

        return (
          <div key={key} className={styles.row}>
            <dt>{label}</dt>
            <dd>{format ? format(value) : value}</dd>
          </div>
        );
      })}
    </dl>
  );
}

function formatCamperForm(form) {
  const formLabels = {
    alcove: 'Alcove',
    panelTruck: 'Panel truck',
    fullyIntegrated: 'Fully integrated',
  };

  return formLabels[form] ?? form;
}

export default VehicleDetails;
