import classes from './Paginator.module.css';
import React, { useState } from 'react';

interface Paginator {
  totalItemsCount: number;
  currentItem: number;
  onClick: (i: number) => void;
  itemsPortionSize?: number;
}

const Paginator: React.FC<Paginator> = ({ totalItemsCount, currentItem, onClick, itemsPortionSize = 10 }) => {
  const [currentPortion, setCurrentPortion] = useState(Math.ceil((currentItem + 1) / itemsPortionSize));
  const pagesBar                            = [];
  const totalCountPortion                   = Math.ceil(totalItemsCount / itemsPortionSize);
  const leftNumberItemOfPortion             = itemsPortionSize * (currentPortion - 1);
  const rightNumberItemOfPortion            = Math.min(itemsPortionSize * currentPortion, totalItemsCount) - 1;

  const handleClickPrev = () => {
    setCurrentPortion((prevState => prevState - 1));
  };

  const handleClickNext = () => {
    setCurrentPortion((prevState => prevState + 1));
  };

  for (let i = leftNumberItemOfPortion; i <= rightNumberItemOfPortion; i++) {
    pagesBar.push(
      <li
        key={i}
        className={`${classes.pages__item} ${currentItem === i
                                             ? classes.pages__item_selected
                                             : undefined}`}
        onClick={() => onClick(i)}>
        {i + 1}
      </li>,
    );
  }

  return (
    <div className={classes.pages}>
      {currentPortion > 1 && <button onClick={handleClickPrev}>Prev</button>}
      <nav>
        <ul className={classes.pages__items}>
          {pagesBar}
        </ul>
      </nav>
      {currentPortion < totalCountPortion && <button onClick={handleClickNext}>Next</button>}
    </div>
  );
};

export default Paginator;
