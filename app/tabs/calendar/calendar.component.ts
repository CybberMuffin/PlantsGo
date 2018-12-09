import { Component, OnInit, ApplicationRef } from '@angular/core';
import * as calendarModule from "nativescript-ui-calendar";
import { Color } from "color";
import {CalendarStylesService} from "~/tabs/calendar/calendar-styles.service";
import { NotificationService } from '~/services/notification.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  moduleId: module.id,
})
export class CalendarComponent implements OnInit {
    private calendarEvents = [];
    private monthViewStyle;
    private monthNamesViewStyle;
    private weekViewStyle;
    private yearViewStyle;
    private dayViewStyle;

    constructor(private calendarService: CalendarStylesService,
        private notificationService: NotificationService) {
    }

    ngOnInit() {
        this.monthViewStyle = this.calendarService.getMonthViewStyle();
        this.yearViewStyle = this.calendarService.getYearViewStyle();
        
        this.putEvents();
    }

    putEvents(){
        let events = [];
        let startDate;
        let endDate;
        let colors = [new Color(200, 188, 26, 214),
            new Color(220, 255, 109, 130),
            new Color(255, 55, 45, 255),
            new Color(199, 17, 227, 10),
            new Color(255, 255, 54, 3)];


            //console.log("fucsdk?0");
            //console.log(JSON.stringify(this.notificationService.notifications));

        for(let not of this.notificationService.notifications){
            startDate = new Date(not.date);
            endDate = new Date(not.date);
            let col = Math.floor(Math.random() * 5);
            let event = new calendarModule.CalendarEvent("" + not.plantName + " asking for water", startDate, endDate, false,
            colors[col]);
            events.push(event);
        }

        console.log("kik");
      
        this.calendarEvents = events;
        
    }

    onDateSelected(args) {
        console.log("onDateSelected: " + args.date);
    }

    onDateDeselected(args) {
        console.log("onDateDeselected: " + args.date);
    }

    onNavigatedToDate(args) {
        console.log("onNavigatedToDate: " + args.date);
    }

    onNavigatingToDateStarted(args) {
        console.log("onNavigatingToDateStarted: " + args.date);
    }

    onViewModeChanged(args) {
        console.log("onViewModeChanged: " + args.newValue);
    }
}
