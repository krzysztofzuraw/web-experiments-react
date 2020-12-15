import React from 'react';
import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/timeline">Timeline</Link>
        </li>
      </ul>
    </div>
  );
}
