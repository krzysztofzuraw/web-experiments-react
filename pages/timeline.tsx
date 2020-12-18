import React from 'react';

import styles from '../styles/timeline.module.css';

const items = ['one', 'two', 'three', 'four'];

export default function Timeline() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sections}>
        <section>
          <svg
            viewBox={`0 0 50 ${items.length * 30}`}
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            stroke="currentColor"
            fill="white"
            aria-labelledby="timeline"
            role="presentation"
          >
            <title id="timeline">timeline element</title>
            <line x1="10" x2="10" y1="150" y2="0" />
            {items.map((item, idx) => (
              <circle
                key={`${item}-${idx}`}
                cx="10"
                cy={`${10 + 25 * idx}`}
                r="5"
                style={{ fill: 'white', stroke: 'black' }}
              />
            ))}
          </svg>
        </section>
        <section>
          <ol className={styles.list}>
            {items.map((item, idx) => (
              <li key={`${idx}`}>{item}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
