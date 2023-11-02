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

// All text blocks
const hourElement = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

const textBlock9 = $('#textBlock');

// button Elements
const button9 = document.getElementById("button9");
const button10 = document.getElementById("button10");
const button11 = document.getElementById("button11");
const button12 = document.getElementById("button12");
const button13 = document.getElementById("button13");
const button14 = document.getElementById("button14");
const button15 = document.getElementById("button15");
const button16 = document.getElementById("button16");
const button17 = document.getElementById("button17");

// All buttons
const buttons = [button9, button10, button11, button12, button13, button14, button15, button16, button17];


// console.log(hour9[0].children[1].value);
// console.log(JSON.stringify(hour9));

const nine = parseInt(hour9[0].id);
const ten = parseInt(hour10[0].id);
const eleven = parseInt(hour11[0].id);
const twelve = parseInt(hour12[0].id);
const one = parseInt(hour13[0].id);
const two = parseInt(hour14[0].id);
const three = parseInt(hour15[0].id);
const four = parseInt(hour16[0].id);
const five = parseInt(hour17[0].id);

// All element Ids
const hourId = [nine, ten, eleven, twelve, one, two, three, four, five];



const specificTextArea = [hour9[0].children[1], hour10[0].children[1], hour11[0].children[1]];















const userSavedEvents = JSON.parse(localStorage.getItem('userSavedEvents')) || [];



// Adds items to local storage
// button9.addEventListener('click', (e) => {
//   i = 0

//   const savedEvents = {
//     timeEvent: specificTextArea[0].value,
//     time: hourId[0]
//   };
//   userSavedEvents.push(savedEvents);
//   // console.log(hour9[0].children[1].value);
//   // console.log(hour9[0].id);
//   localStorage.setItem('userSavedEvents', JSON.stringify(userSavedEvents));

  




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

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //






  // Displays the date at th e top of the page
  var date = dayjs().format('dddd, MMMM YYYY');
  currentDay.text(date);

  // adds buttons to each
  for (n = 0; n < buttons.length; n++) {
    buttons[n].addEventListener('click', function() {
      console.log("clicked");

    
    })
  }

  






  // Updates the hours to display correct color
    for (i = 0; i < hourElement.length; i++) {
      if (hourId[i] < currentHour) {
          hourElement[i].addClass('past');
        } else if (hourId[i] === currentHour) {
          hourElement[i].addClass('present');
        } else {
          hourElement[i].addClass('future');
        }
    }
    
});


