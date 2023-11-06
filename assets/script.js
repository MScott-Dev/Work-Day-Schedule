// consts


const currentDay = $('#currentDay');
var currentHour = parseInt(dayjs().format('H'));


const hour9 = $('#9');
const hour10 = $('#10');
const hour11 = $('#11');
const hour12 = $('#12');
const hour13 = $('#13');
const hour14 = $('#14');
const hour15 = $('#15');
const hour16 = $('#16');
const hour17 = $('#17');

// // All text blocks
const hourElement = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];




const nine = parseInt(hour9[0].id);
const ten = parseInt(hour10[0].id);
const eleven = parseInt(hour11[0].id);
const twelve = parseInt(hour12[0].id);
const one = parseInt(hour13[0].id);
const two = parseInt(hour14[0].id);
const three = parseInt(hour15[0].id);
const four = parseInt(hour16[0].id);
const five = parseInt(hour17[0].id);

// // All element Ids
const hourId = [nine, ten, eleven, twelve, one, two, three, four, five];



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  $('.saveBtn').on('click', function(){
    const description = $(this).siblings('.description').val();
    const time = $(this).parent().attr('id');
    localStorage.setItem(time, description);
  });

  for(let i = 9; i <= 17; i++){ 
    $(`#${i} .description`).val(localStorage.getItem(`${i}`));
  }

  // Displays the date at th e top of the page
  var date = dayjs().format('dddd, MMMM YYYY');
  currentDay.text(date);

  

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


