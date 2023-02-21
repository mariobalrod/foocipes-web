import { useMemo } from 'react';

import { LogicProps } from './types';

export const useLogic = ({ rating, ratingMax }: LogicProps) => {
  const base = useMemo(
    () => (rating <= ratingMax ? Math.floor(rating) : ratingMax),
    [rating, ratingMax],
  );

  const percent = useMemo(
    () => (rating <= ratingMax ? (rating - base) * 100 : 0),
    [base, rating, ratingMax],
  );

  return {
    base,
    percent,
  };
};
