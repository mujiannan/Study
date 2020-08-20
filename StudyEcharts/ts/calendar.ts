import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
document.addEventListener('DOMContentLoaded', function() {
    let calendarEl:HTMLElement = <HTMLElement>document.getElementById('jmsy-bs-mainpage-activitiescalendar');
    var calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin ]
    });
    calendar.render();
  });