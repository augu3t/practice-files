const expiryDate = document.querySelector('.expiry-date');
const daysLeft = document.querySelector('.days');
const hoursLeft = document.querySelector('.hours');
const minsLeft = document.querySelector('.mins');
const secsLeft = document.querySelector('.secs');
let d

expiryDate.textContent = showExpiryDate();
setInterval(showTimeLeft, 1000);

function showExpiryDate(){
  d = new Date();
  d.setDate(d.getDate() + 10);
  d.setHours(11);
  d.setMinutes(30);

  return `${d.toDateString()}, 
  ${d.getHours()}:
  ${d.getMinutes()}am`;
}

function showTimeLeft(){
  const fixedDate = new Date(d.toDateString());
  const currentDate = new Date();

  const diffInMilliseconds = Math.abs(currentDate - fixedDate);

  const days = Math.floor(diffInMilliseconds / (24 * 60 * 60 * 1000));
  const hours = Math.floor((diffInMilliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)) + 11;
  const minutes = Math.floor((diffInMilliseconds % (60 * 60 * 1000)) / (60 * 1000)) + 30;
  const seconds = Math.floor((diffInMilliseconds % (60 * 1000)) / 1000);

  daysLeft.textContent = timeFormat(days);//days;
  hoursLeft.textContent = timeFormat(hours);//hours;
  minsLeft.textContent = timeFormat(minutes);//minutes;
  secsLeft.textContent = timeFormat(seconds);//seconds;
}

function timeFormat(time){
  if(time < 10){
    return `0${time}`
  }
  return time;
}