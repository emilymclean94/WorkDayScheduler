
$(document).ready(function () {
  var timeDisplay = $('#currentDay');
  var rightNow = dayjs().format('MMM DD, YYYY');

  function displayTime() {
    timeDisplay.text(rightNow);
  }

  // const currentHour = dayjs();
  const timeBlocks = document.querySelectorAll('.time-block');

  $('.time-block').each(function () {
    const hourEl = $(this).siblings().attr('id').split('-')[1];
    if (hourEl == rightNow) {
      $('.time-block').addClass('present');
    } else if (hourEl < rightNow) {
      timeBlocks.classList.add('past');
    } else {
      timeBlocks.classList.add('future');
      $(timeBlocks).removeClass('past');
      $(timeBlocks).removeClass('present');
    }
  });



  $('.saveBtn').each(function () {
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

    localStorage.setItem('hourTasks', JSON.stringify(hourTasks));

  });

  displayTime();
  setInterval(displayTime, 1000);
});


