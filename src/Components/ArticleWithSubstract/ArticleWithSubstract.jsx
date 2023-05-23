import React from 'react';
import {
  GreenBtn,
  DescriptionHeadline,
  DescriptionSubtitle,
} from '../index.js';

import './_ArticleWithSubstract.scss';

export const ArticleWithSubstract = ({
  abstract,
  title,
  subtitle,
  firstParagraph,
  secondParagraph,
}) => {
  return (
    <div className='info-box '>
      <div className='heading-block'>
        <DescriptionSubtitle text={subtitle} />
        <DescriptionHeadline text={title} />
        <p className='abstract'>{abstract}</p>
      </div>
      <div className='text-block'>
        <p className='text'>{firstParagraph}</p>
        <p className='text'>{secondParagraph}</p>
        <GreenBtn text='read more' />
      </div>
    </div>
  );
};
