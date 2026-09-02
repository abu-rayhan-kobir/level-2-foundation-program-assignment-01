// Question-01 solution:

function describeValue (value) {
  const valueType = typeof (value);
  if (value) {
    return `${valueType} | truthy`;
  } else {
    return `${valueType} | falsy`;
  }
}

// Question-02 solution

function getDayType (day) {
  switch (day.toLowerCase ()) {
    case "sunday":
      return "Working Day";
    
    case "monday":
      return "Working Day";

    case "tuesday":
      return "Working Day";

    case "wednesday":
      return "Working Day";

    case "thursday":
      return "Working Day";
    
    case "friday":
      return "Weekend";
    
    case "saturday":
      return "Weekend";

    default:
      return "Invalid Day";
  }
}

// Question-03 solution:

function validateUsername (username) {
  username = username.toLowerCase ();
  if (username.length < 4) {
    return "Too Short";
  } else if (username.includes (" ")) {
    return "No Space Allowed";
  } else if (username.includes ("admin")) {
    return "Reserved Word";
  } else {
    return "Available";
  }
}

// Question-04 solution:

function getCngFare (distance, isNight = false, waitingMinutes = 0) {
  if (isNight && distance <= 2) {
    const costWithoutExtraCharge = 50 + (2 * waitingMinutes);
    return costWithoutExtraCharge + (costWithoutExtraCharge * 0.2);
  } else if (!isNight && distance <= 2) {
    return 50 + (2 * waitingMinutes);
  } else if (isNight && distance > 2) {
    const extraDistance = distance - 2;
    const costWithoutExtraCharge = 50 + (15 * extraDistance) + (2 * waitingMinutes);
    return costWithoutExtraCharge + (costWithoutExtraCharge * 0.2);
  } else {
    const extraDistance = distance - 2;
    return 50 + (15 * extraDistance) + (2 * waitingMinutes);
  }
}

// Question-05 solution:

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

