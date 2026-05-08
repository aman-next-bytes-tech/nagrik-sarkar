import React, { useState } from 'react';

const FilterOption = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <ul className='flex flex-wrap  text-slate-600 gap-4 mb-8'>
      {items.map((item, index) => (
        <li key={index}>
          <a
            className={`pb-1 hover:text-violet-600 ${activeIndex === index ? 'text-violet-600 border-b-2 border-violet-600' : ''}`}
            href="#"
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterOption;
