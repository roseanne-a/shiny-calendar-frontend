//date is this year and over
//day and month are valid

export function isValidStartDate(date) {
  const today = new Date();
  const currentYear = today.getFullYear();

  //true means there is an error
  if (isNaN(new Date(date))) return false;
  else if (new Date(date).getFullYear() < currentYear) return false;
  else return true;
}

export function isValidEndDate(start, end) {
  const formattedStartDate = new Date(start);
  const formattedEndDate = new Date(end);

  if (isNaN(formattedEndDate) || formattedEndDate < formattedStartDate)
    return false;
  else return true;
}
