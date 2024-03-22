// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
var graduationDate = dayjs('2006-06-01').format('MMM D, YYYY');
    $(`#1a`).text(graduationDate);
// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var dayOfWeek2027 = dayjs('2027-01-01').format('dddd');
    $('#2a').text(dayOfWeek2027);
// TODO: 3. What is the current time in the format: hours:minutes:seconds
var currentTime = dayjs().format('h:mm:ss A');
    $('#3a').text(currentTime); 
// TODO: 4. What is the current Unix timestamp?
var currentUnixTimestamp = dayjs().unix();
    $('#4a').text(currentUnixTimestamp);
// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixTimestamp = 1318781876;
var convertedTimestamp = dayjs.unix(unixTimestamp).format('YYYY-MM-DD HH:mm:ss');
    $('#5a').text(convertedTimestamp);
// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)
var today = dayjs();
var may4_2027 = dayjs('2027-05-04');
var differenceInDays = may4_2027.diff(today, 'day');
    $('#6a').text(differenceInDays + ` days`);



