

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