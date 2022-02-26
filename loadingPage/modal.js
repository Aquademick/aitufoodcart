function getWeekDay(date) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return days[date.getDay()];
}

let date = new Date();
function changeText() {
if (getWeekDay(date) == 'Monday') {
    document.getElementById('day').innerHTML = "Monday:";
    document.getElementById('first').innerHTML = "· Pasta with Chicken";
    document.getElementById('second').innerHTML = "· Pea Soup";
    document.getElementById('drinks').innerHTML = "· Apple Juice";
  }
if (getWeekDay(date) == 'Tuesday') {
  document.getElementById('day').innerHTML = "Tuesday:";
  document.getElementById('first').innerHTML = "· Pilaf with Beef";
  document.getElementById('second').innerHTML = "· Pearl Barley Soup";
  document.getElementById('drinks').innerHTML = "· Orange Juice";
}
if (getWeekDay(date) == 'Wednesday') {
  document.getElementById('day').innerHTML = "Wednesday:";
  document.getElementById('first').innerHTML = "· Buckwheat with Chicken";
  document.getElementById('second').innerHTML = "· Borsch";
  document.getElementById('drinks').innerHTML = "· Cherry Juice";
}
if (getWeekDay(date) == 'Thursday') {
  document.getElementById('day').innerHTML = "Thursday:";
  document.getElementById('first').innerHTML = "· Chicken Lagman";
  document.getElementById('second').innerHTML = "· Soup with Vegetables";
  document.getElementById('drinks').innerHTML = "· Peach Juice";
}
if (getWeekDay(date) == 'Friday') {
  document.getElementById('day').innerHTML = "Friday:";
  document.getElementById('first').innerHTML = "· Mashed Potatoes";
  document.getElementById('second').innerHTML = "· Chicken Soup";
  document.getElementById('drinks').innerHTML = "· Apple Compote";
}
if (getWeekDay(date) == 'Saturday') {
  document.getElementById('day').innerHTML = "Saturday:";
  document.getElementById('first').innerHTML = "· Rice Porrighe with The Cutlet";
  document.getElementById('second').innerHTML = "· Pelmeni";
  document.getElementById('drinks').innerHTML = "· PineApple Juice";
}

if (getWeekDay(date) == 'Sunday') {
  document.getElementById('day').innerHTML = "Sunday:";
  document.getElementById('first').innerHTML = "· Today is not available!";
  document.getElementById('second').innerHTML = "· Today is not available!";
  document.getElementById('drinks').innerHTML = "· Today is not available!";
}
}
