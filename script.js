function updateUTCTime() {
  const now = new Date();
  const utcString = now.toUTCString();
  document.getElementById('currentTimeUTC').textContent = utcString;
}
setInterval(updateUTCTime, 1000);

updateUTCTime();