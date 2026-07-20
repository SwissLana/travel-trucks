import { useState } from 'react';

import styles from './CamperGallery.module.css';

function CamperGallery({ gallery = [], camperName = 'Camper' }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (gallery.length === 0) {
    return (
      <div className={styles.placeholder}>No camper images available.</div>
    );
  }

  const selectedImage = gallery[selectedIndex];
  const selectedSource = selectedImage?.original ?? selectedImage?.thumb;

  return (
    <div className={styles.gallery}>
      <img
        className={styles.mainImage}
        src={selectedSource}
        alt={`${camperName}, image ${selectedIndex + 1}`}
      />

      {gallery.length > 1 && (
        <ul
          className={styles.thumbnails}
          aria-label={`${camperName} image gallery`}
        >
          {gallery.map((image, index) => {
            const source = image.thumb ?? image.original;
            const isSelected = index === selectedIndex;

            return (
              <li key={`${source}-${index}`}>
                <button
                  className={`${styles.thumbnailButton} ${
                    isSelected ? styles.selected : ''
                  }`}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={isSelected}
                >
                  <img className={styles.thumbnail} src={source} alt="" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CamperGallery;
