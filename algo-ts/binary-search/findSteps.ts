export const findSteps = (set: number): number => {
  let hi = set;
  let lo = 1;
  let steps = 0;

  while (lo < hi) {
    const mid = 1 + (hi - 1) / 2;

    hi = Math.floor(mid);
    steps++;
  }

  return steps;
};
