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

export function formatCardDate(date) {
  const dayOfMonth = date.split('T')[0].split('-')[2];
  const month = date.split('T')[0].split('-')[1];
  const year = date.split('T')[0].split('-')[0];

  let stringMonth;
  if (month == '01') {
    stringMonth = 'января';
  }
  if (month == '02') {
    stringMonth = 'февраля';
  }
  if (month == '03') {
    stringMonth = 'марта';
  }
  if (month == '04') {
    stringMonth = 'апреля';
  }
  if (month == '05') {
    stringMonth = 'мая';
  }
  if (month == '06') {
    stringMonth = 'июня';
  }
  if (month == '07') {
    stringMonth = 'июля';
  }
  if (month == '08') {
    stringMonth = 'августа';
  }
  if (month == '09') {
    stringMonth = 'сентября';
  }
  if (month == '10') {
    stringMonth = 'октября';
  }
  if (month == '11') {
    stringMonth = 'ноября';
  }
  if (month == '12') {
    stringMonth = 'декабря';
  }

  return `${dayOfMonth} ${stringMonth}, ${year}`;
}

export const fromDate = formatDate(aWeekAgo);
export const tillDate = formatDate(currentDate);