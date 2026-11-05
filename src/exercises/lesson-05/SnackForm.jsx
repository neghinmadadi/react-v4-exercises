import styles from './SnackForm.module.css';
import { useEffect, useState } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  // track which fields has user interacted with
  const [touched, setTouched] = useState({ name: false, rating: false });

  const isEditing = Boolean(editingSnack);

  useEffect(() => {
    if (editingSnack) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      setName('');
      setRating('');
    }
    setTouched({ name: false, rating: false });
  }, [editingSnack]);

  function validateName() {
    return name.trim().length > 0;
  }

  function validateRating() {
    return Number(rating) > 0 && Number(rating) < 6;
  }

  function getNameError() {
    if (!validateName() && touched.name) {
      return 'Snack name is required';
    }
  }

  function getRatingError() {
    if (!validateRating() && touched.rating) {
      return 'Please select a rating between 1 to 5';
    }
  }

  const nameErrorMessage = getNameError();
  const ratingErrorMessage = getRatingError();

  function handleSubmit(e) {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // const name = formData.get('name');
    // const rating = formData.get('rating');

    // if (isEditing) {
    //   updateSnack(editingSnack.id, name, rating);
    // } else {
    //   addSnack(name, rating);
    //   e.target.reset();
    // }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onFocus={() =>
              setTouched((previous) => ({ ...previous, name: true }))
            }
            className={styles['field-input']}
            placeholder="Enter snack name"
          />
        </label>
        {nameErrorMessage && (
          <div className={styles.error}>{nameErrorMessage}</div>
        )}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>
          Rating:
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            onFocus={() =>
              setTouched((previous) => ({ ...previous, rating: true }))
            }
            min="1"
            max="5"
            className={styles['field-input']}
            placeholder="Rate 1-5"
          />
        </label>
        {ratingErrorMessage && (
          <div className={styles.error}>{ratingErrorMessage}</div>
        )}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
