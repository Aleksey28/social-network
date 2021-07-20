import classes from './Paginator.module.css';
import React from 'react';

const Paginator = ( { totalItemsCount, currentItem, onClick } ) => {
  const pagesBar = [];

  for ( let i = 0; i < totalItemsCount; i++ ) {
    pagesBar.push(
      <li
        key={ i }
        className={ `${ classes.pages__item } ${ currentItem === i
                                                 ? classes.pages__item_selected
                                                 : undefined }` }
        onClick={ () => onClick( i ) }>
        { i + 1 }
      </li>,
    );
  }

  return (
    <nav>
      <ul className={ classes.pages }>
        { pagesBar }
      </ul>
    </nav>
  );
};

export default Paginator;
