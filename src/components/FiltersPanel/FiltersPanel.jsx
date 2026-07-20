import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Icon from '../Icon/Icon';
import Radio from '../Radio/Radio';

import {
  CAMPER_FORM_OPTIONS,
  ENGINE_OPTIONS,
  EQUIPMENT_OPTIONS,
  TRANSMISSION_OPTIONS,
} from '../../constants/filterOptions';
import { selectFilters } from '../../redux/filters/filtersSelectors';
import { applyFilters, resetFilters } from '../../redux/filters/filtersSlice';

import styles from './FiltersPanel.module.css';

const EMPTY_FILTERS = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
  equipment: [],
};

function FiltersPanel() {
  const dispatch = useDispatch();
  const appliedFilters = useSelector(selectFilters);

  const [draftFilters, setDraftFilters] = useState(() => ({
    ...EMPTY_FILTERS,
    ...appliedFilters,
    equipment: appliedFilters.equipment ?? [],
  }));

  const handleSingleValueChange = (event) => {
    const { name, value } = event.target;

    setDraftFilters((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleEquipmentChange = (event) => {
    const { value, checked } = event.target;

    setDraftFilters((current) => ({
      ...current,
      equipment: checked
        ? [...current.equipment, value]
        : current.equipment.filter((equipment) => equipment !== value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      applyFilters({
        ...draftFilters,
        location: draftFilters.location.trim(),
      }),
    );
  };

  const handleReset = () => {
    setDraftFilters({
      ...EMPTY_FILTERS,
      equipment: [],
    });

    dispatch(resetFilters());
  };

  return (
    <form className={styles.panel} onSubmit={handleSubmit}>
      <label className={styles.locationField}>
        <span className={styles.label}>Location</span>

        <span className={styles.inputWrapper}>
          <Icon name="location" size={20} />

          <input
            className={styles.input}
            type="text"
            name="location"
            value={draftFilters.location}
            onChange={handleSingleValueChange}
            placeholder="City"
          />
        </span>
      </label>

      <h2 className={styles.title}>Filters</h2>

      <RadioGroup
        legend="Camper form"
        name="form"
        options={CAMPER_FORM_OPTIONS}
        selectedValue={draftFilters.form}
        onChange={handleSingleValueChange}
      />

      <RadioGroup
        legend="Engine"
        name="engine"
        options={ENGINE_OPTIONS}
        selectedValue={draftFilters.engine}
        onChange={handleSingleValueChange}
      />

      <RadioGroup
        legend="Transmission"
        name="transmission"
        options={TRANSMISSION_OPTIONS}
        selectedValue={draftFilters.transmission}
        onChange={handleSingleValueChange}
      />

      <CheckboxGroup
        legend="Equipment"
        name="equipment"
        options={EQUIPMENT_OPTIONS}
        selectedValues={draftFilters.equipment}
        onChange={handleEquipmentChange}
      />

      <div className={styles.actions}>
        <Button type="submit" className={styles.searchButton}>
          Search
        </Button>

        <button
          type="button"
          className={styles.clearButton}
          onClick={handleReset}
        >
          <Icon name="close" size={24} />
          <span>Clear filters</span>
        </button>
      </div>
    </form>
  );
}

function RadioGroup({ legend, name, options, selectedValue, onChange }) {
  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>{legend}</legend>

      <div className={styles.options}>
        {options.map((option) => (
          <Radio
            key={option.value}
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
          >
            {option.label}
          </Radio>
        ))}
      </div>
    </fieldset>
  );
}

function CheckboxGroup({ legend, name, options, selectedValues, onChange }) {
  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>{legend}</legend>

      <div className={styles.options}>
        {options.map((option) => (
          <Checkbox
            key={option.value}
            name={name}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={onChange}
          >
            {option.label}
          </Checkbox>
        ))}
      </div>
    </fieldset>
  );
}

export default FiltersPanel;
