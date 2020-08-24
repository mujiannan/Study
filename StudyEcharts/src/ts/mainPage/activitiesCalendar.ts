import { Calendar, CalendarApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import cnLocale from '@fullcalendar/core/locales/zh-cn';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'; // webpack uses file-loader to handle font files
import '../../css/calendar.css';


interface ActivityData{
    title:string;
    start:string;
    end:string;
}

interface CalendarEventData{
    title: string;
     start: string; 
     end: string; 
     backgroundColor: 
     string;textClor:string; 
}

export class ActivitiesCalendar{
    private virtualActivitiesData:ActivityData[]=[{
        title: "长沙览秀城5元券",
        start: "2020-07-27",
        end: "2020-08-01"
      },
      {
        title: "南京金茂汇20元满减券",
        start: "2020-08-14",
        end: "2020-08-16"
      },
      {
        title: "丽江J·LIFE全场8折活动",
        start: "2020-08-18",
        end: "2020-08-23"
      },
      {
        title: "青岛金茂湾双人购抽奖",
        start: "2020-08-17",
        end: "2020-08-22"
      },
      {
        title: "南京金茂汇全场9.5折活动",
        start: "2020-08-24",
        end: "2020-08-29"
      }
      ];
      /**
       * render
calendarDiv:HTMLELEMENT       */
      public render(calendarContainer:HTMLDivElement,activitiesData:ActivityData[]=this.virtualActivitiesData) {
          let calendarEventsData:CalendarEventData[]=[];
          activitiesData.forEach((activity,i)=>{
            calendarEventsData.push({
              title:activity.title,
              start:activity.start,
              end:activity.end,
              backgroundColor:['#00ffd088','#216eff88'][Math.floor(i%2)],
              textClor:['#00ffd0','#216eff'][Math.floor(i%2)]
            });
          });
          let calendar = new Calendar(calendarContainer, {
            plugins: [interactionPlugin, dayGridPlugin,timeGridPlugin],
            locale: cnLocale,
            navLinks: false, 
            headerToolbar: {
              start: '',
              center: '',
              end: ''
            },
            editable: false,
            height: '90%',
            buttonText: {},
            views:{
              dayGridHalfMonth:{
                type:'dayGridWeek',
                duration:{weeks:3},
                visibleRange:{
                  start:'2020-08-17',
                  end:'2020-09-06'
                }
              }
            },
            initialView:'dayGridHalfMonth',
            showNonCurrentDates:false,
            expandRows:false,
            events:calendarEventsData,
            scrollTime:'2020-08-31'
          });
          calendar.render();
      }
}

