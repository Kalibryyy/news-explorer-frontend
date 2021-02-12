function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (month < 10) {
    month = `0${month}`
  }

  if (dayOfMonth < 10) {
    dayOfMonth = `0${dayOfMonth}`
  }

  return `${year}-${month}-${dayOfMonth}`;
}

let currentDate = new Date();
currentDate.setDate(currentDate.getDate());

let aWeekAgo = new Date();
aWeekAgo.setDate(aWeekAgo.getDate() - 7);

export const fromDate = formatDate(aWeekAgo);
export const tillDate = formatDate(currentDate);



