'use client'
import React, { useState, useEffect } from 'react';

const Sidebar = ({ content }) => {
  const [h2Tags, setH2Tags] = useState([]);

  useEffect(() => {
    if (content) {
      const regex = /<h2.*?id="(.*?)".*?>(.*?)<\/h2>/gi;
      const h2Array = [...content.matchAll(regex)];
      const extractedH2Tags = h2Array.map(match => ({
        id: match[1],
        text: decodeHTMLEntities(match[2])
      }));
      setH2Tags(extractedH2Tags);
    }
  }, [content]);

  // Function to decode HTML entities
  const decodeHTMLEntities = (text) => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  };

  return (
    <div className="sidebar w-full lg:w-[60%] flex flex-col gap-6 relative lg:sticky top-6 max-h-[400px]">
      <h4 className='text-[--primary-color] text-sm font-medium'>Article Navigation:</h4>
      {h2Tags.length > 0 ? (
        <ul className='flex flex-col gap-6'>
          {h2Tags.map(h2 => (
            <li key={h2.id}>
              <a href={`#${h2.id}`} className='side-menu-links text-[--text-on-dark] font-medium text-base py-4'>{h2.text}</a>
            </li>
          ))}
        </ul>
      ) : (
        <span className='text-sm italic text-[--text-on-dark]'>There are no scroll points detected on the page.</span>
      )}
    </div>
  );
};

export default Sidebar;