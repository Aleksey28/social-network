import classes from './Paginator.module.css';
import React from 'react';

const Paginator = ( { currentPage, countPages, onClick } ) => {
  const pagesBar = [];

  for ( let i = 0; i < countPages; i++ ) {
    pagesBar.push(
      <li
        key={ i }
        className={ `${ classes.pages__item } ${ currentPage === i
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
