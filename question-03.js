

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