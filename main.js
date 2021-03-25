// external JSON file JS //

fetch('venues.json')
  .then((response) => response.json())
  .then((json) => json.forEach(tableElements)
  )

  function tableElements (element, index, arr){
    arr[index] = document.querySelector('#posts-table tbody').innerHTML +=
    `<tr>
        <td>${element.Venue}</td>
        <td>${element.City}</td>
        <td>${element.Date}</td>
        </tr>`
  }

// countdown clock JS //

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}
  
  const deadline = new Date(Date.parse('2021-06-19') + 15 * 24 * 60 * 60 * 1000);
  initializeClock('clockdiv', deadline);

// HTML form JS //

var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method: "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
      alert('HEY IT WORKED! Click OK to see the results on this nifty Google Sheet!')
      window.location.assign("https://docs.google.com/spreadsheets/d/14bzfUQ8J7P4q3028VyCbxwf88zKniMpvMkrPrhXXHE0/")
  });
});


  
