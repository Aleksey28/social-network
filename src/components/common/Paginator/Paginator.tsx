import classes from './Paginator.module.css';
import React, { useState } from 'react';

interface Props {
  totalPagesCount: number;
  currentPage: number;
  onClick: (i: number) => void;
  pagesPortionSize?: number;
}

const Paginator: React.FC<Props> = ({ totalPagesCount, currentPage, onClick, pagesPortionSize = 10 }) => {
  const [currentPortion, setCurrentPortion] = useState(Math.floor(currentPage / pagesPortionSize));
  const pagesBar                            = [];
  const totalPortionsCount                  = Math.ceil(totalPagesCount / pagesPortionSize);
  const leftNumberItemOfPortion             = pagesPortionSize * currentPortion;
  const rightNumberItemOfPortion            = Math.min(pagesPortionSize * (currentPortion + 1), totalPagesCount);

  const handleClickPrev = () => {
    setCurrentPortion((prevState => prevState - 1));
  };

  const handleClickNext = () => {
    setCurrentPortion((prevState => prevState + 1));
  };

  for (let i = leftNumberItemOfPortion; i < rightNumberItemOfPortion; i++) {
    pagesBar.push(
      <li
        key={i}
        className={`${classes.pages__item} ${currentPage === i
                                             ? classes.pages__item_selected
                                             : undefined}`}
        onClick={() => onClick(i)}>
        {i + 1}
      </li>,
    );
  }

  return (
    <div className={classes.pages}>
      {currentPortion > 0 && <button onClick={handleClickPrev}>Prev</button>}
      <nav>
        <ul className={classes.pages__items}>
          {pagesBar}
        </ul>
      </nav>
      {(currentPortion < (totalPortionsCount - 1)) && <button onClick={handleClickNext}>Next</button>}
    </div>
  );
};

export default Paginator;
