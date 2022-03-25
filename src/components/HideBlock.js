import React, { useEffect, useState } from 'react';

const HideBlock = ({ children }) => {
  const [rows, setRows] = useState([]);

  const splitWords = (string) => {
    const sentenceArray = string.split(' ');
    const newSentenceArray = [];
    let charCounter = 0;

    sentenceArray.forEach(word => {
      charCounter += word.length;

      if (charCounter > 20) {
        newSentenceArray.push(`${word}%br%`);
        charCounter = 0;
      } else {
        newSentenceArray.push(word);
      }
    });

    return newSentenceArray.join(' ').split('%br%').filter(el => el !== '');
  }

  useEffect(() => {
    setRows(splitWords(children));
  }, [children]);

  return (
    <div className="c-hide-block" data-scroll data-scroll-offset="0, -1000%">
      <p className="c-hide-block__paragraph">
        {rows.map((row, i) => 
          <span key={i} className="c-hide-block__hide-wrapper">
            <span className={`c-hide-block__hide-wrapper__inside -delay-${i}`}>{row}</span>
          </span>
        )}
      </p>
    </div>
  )
}

export default HideBlock;
