
$(document).ready(function () {
  var hour = $('.time-block');
  var timeDisplay = $('#currentDay');

  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY');
    timeDisplay.text(rightNow);
  }

  // const currentHour = dayjs();
  // const timeBlocks = document.querySelectorAll('.time-block');

  // timeBlocks.forEach((timeBlock) => {
  //   const hour = parseInt(timeBlock.id.split('-')[1]);
  //   if (hour === currentHour) {
  //     timeBlock.classList.add('present');
  //   } else if (hour < currentHour) {
  //     timeBlock.classList.add('past');
  //   } else {
  //     timeBlock.classList.add('future');
  //     $(timeBlock).removeClass('past');
  //     $(timeBlock).removeClass('present');
  //   }
  // });

  let hourTasks = JSON.parse(localStorage.getItem('hourTasks')) || [];

  $('.saveBtn').each(function () {
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
    }

    localStorage.setItem('hourTasks', JSON.stringify(hourTasks));

  });

  displayTime();
  setInterval(displayTime, 1000);
});


