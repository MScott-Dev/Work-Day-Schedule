// consts
const currentDay = $('#currentDay');
const hour9 = $('#9');
const hour10 = $('#10');
const hour11 = $('#11');
const hour12 = $('#12');
const hour13 = $('#13');
const hour14 = $('#14');
const hour15 = $('#15');
const hour16 = $('#16');
const hour17 = $('#17');

var currentHour = parseInt(dayjs().format('H'));

const nine = parseInt(hour9[0].id);
const ten = parseInt(hour10[0].id);
const eleven = parseInt(hour11[0].id);
const twelve = parseInt(hour12[0].id);
const one = parseInt(hour13[0].id);
const two = parseInt(hour14[0].id);
const three = parseInt(hour15[0].id);
const four = parseInt(hour16[0].id);
const five = parseInt(hour17[0].id);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // Displays the date at th e top of the page
  var date = dayjs().format('dddd, MMMM YYYY');
  currentDay.text(date);



  // Updates the hours to display correct color

    // 9am
    if (nine < currentHour) {
        hour9.addClass('past');
      } else if (nine === currentHour) {
        hour9.addClass('present');
      } else {
        hour9.addClass('future');
      }

    // 10am
    if (ten < currentHour) {
        hour10.addClass('past');
      } else if (ten === currentHour) {
        hour10.addClass('present');
      } else {
        hour10.addClass('future');
      }

    // 11am
    if (eleven < currentHour) {
        hour11.addClass('past');
      } else if (eleven === currentHour) {
        hour11.addClass('present');
      } else {
        hour11.addClass('future');
      }

    // 12pm
    if (twelve < currentHour) {
        hour12.addClass('past');
      } else if (twelve === currentHour) {
        hour12.addClass('present');
      } else {
        hour12.addClass('future');
      }

    // 1pm
    if (one < currentHour) {
        hour13.addClass('past');
      } else if (one === currentHour) {
        hour13.addClass('present');
      } else {
        hour13.addClass('future');
      }

    // 2pm
    if (two < currentHour) {
        hour14.addClass('past');
      } else if (two === currentHour) {
        hour14.addClass('present');
      } else {
        hour14.addClass('future');
      }

    // 3pm
    if (three < currentHour) {
        hour15.addClass('past');
      } else if (three === currentHour) {
        hour15.addClass('present');
      } else {
        hour15.addClass('future');
      }

    // 4pm
    if (four < currentHour) {
        hour16.addClass('past');
      } else if (four === currentHour) {
        hour16.addClass('present');
      } else {
        hour16.addClass('future');
      }

    // 5pm
    if (five < currentHour) {
        hour17.addClass('past');
      } else if (five === currentHour) {
        hour17.addClass('present');
      } else {
        hour17.addClass('future');
      }
});



// console.log(nine);
console.log(nine);
console.log(currentHour);
console.log(nine < currentHour);
// console.log(nine < currentHour);

