let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let endDate = '01/01/2023 00:00:00';
// date format mm/dd/yyyy

let dateNY = setInterval(function() {
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown

    // time calculation for days, hours, minutes and secons

    let distanceDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    let distanceHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let distanceMin = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let distanceSec = Math.floor((distance % (1000 * 60)) / (1000));

    //output the result in elemente with ID

    days.innerHTML = distanceDays + "<br><span>Days</span>";
    hours.innerHTML = distanceHours + "<br><span>Hours</span>";
    minutes.innerHTML = distanceMin + "<br><span>Minutes</span>";
    seconds.innerHTML = distanceSec + "<br><span>Seconds</span>";

    //animated stroke

    dd.style.strokeDashoffset = 440 - (440 * distanceDays) / 365;
    hh.style.strokeDashoffset = 440 - (440 * distanceHours) / 24;
    mm.style.strokeDashoffset = 440 - (440 * distanceMin) / 60;
    ss.style.strokeDashoffset = 440 - (440 * distanceSec) / 60;

    //animated circle dots

    //360deg / 365 days = 0.986
    day_dot.style.transform = `rotateZ( ${distanceDays  * 0.986}deg)`;

    //360deg / 24 Hours = 15
    hr_dot.style.transform = `rotateZ( ${distanceHours  * 15}deg)`;

    //360deg / 60 Min = 6
    min_dot.style.transform = `rotateZ( ${distanceMin  * 6}deg)`;

    //360deg / 60 Sec = 6
    sec_dot.style.transform = `rotateZ( ${distanceSec  * 6}deg)`;

    if (distance < 0) {
        clearInterval(dateNY);
        document.getElementById('time').style.display = 'none';
        document.querySelector('.newYear').style.display = 'block';
    }

})