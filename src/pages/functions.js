import moment from 'moment';

function startNow (today, input) {
  var d = new Date (today),
    month = '' + (d.getMonth () + 1),
    day = '' + d.getDate () - Number (input),
    year = d.getFullYear ();

  const getDays = (year, month) => {
    return new Date (year, month, 0).getDate ();
  };
  const daysInLastMonth = getDays (year, month - 1);

  if (day < 0) {
    day = (daysInLastMonth + day).toString ();
    month = month - 1;
    if (month === 0) {
      month = '12';
      year = year - 1;
    }
  }
  if (month.length < 2 || month < 10) month = '0' + month;
  if (day.length < 2 || day < 10) day = '0' + day;
  return [day, month, year].join ('/');
}

function endNow (today, input) {
  var d = new Date (today),
    month = '' + (d.getMonth () + 1),
    day = '' + (d.getDate () + Number (input)),
    year = d.getFullYear ();
  const getDays = (year, month) => {
    return new Date (year, month, 0).getDate ();
  };
  const daysInMonth = getDays (year, month);
  if (day > daysInMonth) {
    day = (day - daysInMonth).toString ();
    month = month + 1;
    if (month > 12) {
      month = '1';
      year = year + 1;
    }
  }

  if (month.length < 2 || month < 10) month = '0' + month;
  if (day.length < 2 || day < 10) day = '0' + day;

  return [day, month, year].join ('/');
}

export async function dateNow (select) {
  console.log ('select === ', select);
  let startWeek = '';
  let endWeek = '';
  let d = new Date (select),
    month = '' + (d.getMonth () + 1),
    day = '' + d.getDate (),
    year = d.getFullYear (),
    HH = d.getHours (),
    MM = d.getMinutes (),
    ss = d.getSeconds ();

  if (month.length < 2 || month < 10) month = '0' + month;
  if (day.length < 2 || day < 10) day = '0' + day;
  let today = [year, month, day].join ('-');
  let time = [HH, MM, ss].join (':');
  // let today = "2020-12-31";

  if (moment (today).format ('dddd') === 'Sunday') {
    startWeek = startNow (today, 6);
    endWeek = today;
  } else if (moment (today).format ('dddd') === 'Saturday') {
    startWeek = startNow (today, 5);
    endWeek = endNow (today, 1);
  } else if (moment (today).format ('dddd') === 'Friday') {
    startWeek = startNow (today, 4);
    endWeek = endNow (today, 2);
  } else if (moment (today).format ('dddd') === 'Thursday') {
    startWeek = startNow (today, 3);
    endWeek = endNow (today, 3);
  } else if (moment (today).format ('dddd') === 'Wednesday') {
    startWeek = startNow (today, 2);
    endWeek = endNow (today, 4);
  } else if (moment (today).format ('dddd') === 'Tuesday') {
    startWeek = startNow (today, 1);
    endWeek = endNow (today, 5);
  } else if (moment (today).format ('dddd') === 'Monday') {
    startWeek = today;
    endWeek = endNow (today, 6);
  }
  today = new Date (today);
  return {today, time};
}
