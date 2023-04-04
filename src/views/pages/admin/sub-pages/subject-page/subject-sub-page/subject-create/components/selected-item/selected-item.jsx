import React from 'react';

import styles from './selected-item.module.scss';

export const SelectedItem = ({ _id, firstName, lastName, resetHandler }) => {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className={styles.selected_item}>{`${firstName} ${lastName}`}</div>
      <button
        type='button'
        className={styles.selected_item_btn}
        onClick={() => resetHandler(_id)}
      >
        -
      </button>
    </li>
  );
};
