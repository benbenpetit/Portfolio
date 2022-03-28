import clsx from 'clsx';
import React from 'react';

const RevealLetters = ({ text }) => {
  return (
    <>
      {text.split('').map((character, i) => 
        <span key={i} className={clsx(`c-reveal-letters__letter -delay-${i}`)}>{character === ' ' ? '\u00A0' : character}</span>
      )}
    </>
  )
}

export default RevealLetters;