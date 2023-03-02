function Clock() {
  var date = new Date();
  var hour = date.getHours().toString();
  var minutes = date.getMinutes().toString();
  var seconds = date.getSeconds().toString();
 
  if (hour.length < 2) {
    hour = "0" + hour;
  }

  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }

  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  const html = ` <p>${hour} : ${minutes} : ${seconds}</p> `;
  document.querySelector(".clock").innerHTML = html;
}

setInterval(Clock, 1000);
