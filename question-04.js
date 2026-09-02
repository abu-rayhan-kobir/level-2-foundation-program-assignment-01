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
