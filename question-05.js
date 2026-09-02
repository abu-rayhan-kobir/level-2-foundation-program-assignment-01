

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;
  if (runsNeeded <= 0) {
    return "Won";
  } else if (ballsLeft <= 0) {
    return "Lost";
  } else {
    const requiredRunRate = (runsNeeded / ballsLeft) * 6;
    if (requiredRunRate <= 6) {
      return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
    } else if (requiredRunRate > 6 && requiredRunRate <= 12 ) {
      return `Need ${runsNeeded} rusn in ${ballsLeft} balls | Tough`;
    } else {
      return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
    }
  }
}