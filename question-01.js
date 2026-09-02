/* Question-01:
Write a function describeValue that takes any value and returns a string with two pieces of information joined by a space, a pipe, and another space.
*/

function describeValue (value) {
  const valueType = typeof (value);
  if (value) {
    return `${valueType} | truthy`;
  } else {
    return `${valueType} | falsy`;
  }
}
