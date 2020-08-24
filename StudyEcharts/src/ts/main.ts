import '../css/jmsy-bs.css';
import {ActivitiesCalendar} from './mainPage/activitiesCalendar';
import {MainPage} from './mainPage/mainPage';


document.addEventListener('DOMContentLoaded', function () {
  let activitiesCalendarContainer: HTMLDivElement = <HTMLDivElement>document.getElementById('jmsy-bs-mainpage-activitiescalendar');
  let activitiesCalendar:ActivitiesCalendar=new ActivitiesCalendar();
  activitiesCalendar.render(activitiesCalendarContainer);
  let mainPage:MainPage=new MainPage();
});