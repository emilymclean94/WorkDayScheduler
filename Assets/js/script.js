var saveButton = $('.saveBtn');
// var taskDescription = $('.description');
var hour = $('.time-block');
var timeDisplay = $('#currentDay');


function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY');
  timeDisplay.text(rightNow);
}

$(function () {

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

  $(saveButton).each(function () {
    const hour = $(this).attr('id').split('-')[1];
    const userInput = $('textarea').val();

    let hourTasks = JSON.parse(localStorage.getItem('hourTasks')) || [];
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
  });

  localStorage.setItem('hourTasks', JSON.stringify(hourTasks));

});


displayTime();
setInterval(displayTime, 1000);

