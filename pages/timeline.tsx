import React, { useState } from 'react';

import styles from '../styles/timeline.module.css';

const items = [
  { text: 'one', clicked: false },
  { text: 'two', clicked: false },
  { text: 'three', clicked: false },
  { text: 'four', clicked: false },
];
const margin = 33;
const spacing = 15;

export default function Timeline() {
  const [timelineItems, setTimeLineItems] = useState(items);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sections}>
        <section>
          <svg
            viewBox={`0 0 30 ${timelineItems.length * 30}`}
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="white"
            aria-labelledby="timeline"
            role="presentation"
          >
            <title id="timeline">timeline element</title>
            <line x1="10" x2="10" y1={spacing} y2={timelineItems.length * margin - spacing} />
            {timelineItems.map((item, idx) => (
              <circle
                key={`${item.text}-${idx}`}
                cx="10"
                cy={`${idx * margin + spacing}`}
                r="5"
                style={{ fill: item.clicked ? 'black' : 'white', stroke: 'black' }}
              />
            ))}
          </svg>
        </section>
        <section>
          <ol className={styles.list}>
            {timelineItems.map((item, idx) => (
              <li
                key={`${idx}`}
                onClick={() => {
                  const updatedItems = timelineItems.map((el) =>
                    el.text === item.text ? { text: item.text, clicked: true } : el
                  );
                  setTimeLineItems(updatedItems);
                }}
              >
                {item.text}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
