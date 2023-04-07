
$(document).ready(function () {
  var timeDisplay = $('#currentDay');
  var rightNow = dayjs().format('MMM DD, YYYY');

  function displayTime() {
    timeDisplay.text(rightNow);
  }

  $('.time-block').each(function () {
    const hourEl = $(this).siblings().attr('id').split('-')[1];
    if (hourEl == rightNow) {
      $('.time-block').addClass('present');
    } else if (hourEl < rightNow) {
      timeBlocks.classList.add('past');
    } else {
      timeBlocks.classList.add('future');
      $('.time-block').removeClass('past');
      $('.time-block').removeClass('present');
    }
  });


  $('.saveBtn').each(function () {
    console.log('POW!');
    
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


