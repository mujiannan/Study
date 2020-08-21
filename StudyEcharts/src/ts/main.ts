import '../css/jmsy-bs.css';

import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'; // webpack uses file-loader to handle font files
import '../css/calendar.css';
document.addEventListener('DOMContentLoaded', function() {
    let calendarEl:HTMLElement = <HTMLElement>document.getElementById('jmsy-bs-mainpage-activitiescalendar');
    var calendar = new Calendar(calendarEl, {
      plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, bootstrapPlugin],
      themeSystem:'bootstrap'
    });
    calendar.render();
  });