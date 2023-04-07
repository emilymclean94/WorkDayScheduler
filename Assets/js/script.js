
$(document).ready(function () {
  var timeDisplay = $('#currentDay');
  var currentHour = dayjs().$H;

  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY');
    timeDisplay.text(rightNow);
  }

  //When user clicks the save button this function is fired 
  $('.saveBtn').click(function () {

    $('.saveBtn').each(function () {
      // console.log('POW!');

      let hourTasks = JSON.parse(localStorage.getItem('hourTasks')) || [];
      const hour = $(this).parent().attr('id').split('-')[1];
      const userInput = $(this).siblings('.description').val();


      const index = hourTasks.findIndex(hourTask => hourTask.hour === hour);

      if (index !== -1) {
        hourTasks[index].description = userInput;
      } else {
        const hourTask = {
          hour: hour,
          description: userInput,
        };
        hourTasks.push(hourTask);
      };

      function saveToStorage(hourTasks) {
        localStorage.setItem('hourTasks', JSON.stringify(hourTasks));
      }

      saveToStorage(hourTasks);

    });

  });

  
  // Updates each time block to represent past, present, and future hours
  $('.time-block').each(function () {
    const hourEl = $(this).attr('id').split('-');
    if (parseInt(hourEl[1]) === currentHour) {
      $(this).addClass('present');
    } else if (parseInt(hourEl[1]) < currentHour) {
      $(this).addClass('past');
    } else {
      $(this).addClass('future');
    }
  });
  //end time-block class change function

  displayTime();
  setInterval(displayTime, 1000);
});
