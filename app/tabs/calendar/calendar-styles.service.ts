import { Injectable } from '@angular/core';
import {
    AllDayEventsViewStyle,
    CalendarDayViewStyle, CalendarMonthNamesViewStyle,
    CalendarMonthViewStyle,
    CalendarWeekViewStyle,
    CalendarYearViewStyle,
    CellStyle,
    DayCellStyle, DayEventsViewStyle, MonthCellStyle
} from "nativescript-ui-calendar";

@Injectable({
  providedIn: 'root'
})
export class CalendarStylesService {
    constructor(){}
    getMonthViewStyle(): CalendarMonthViewStyle {
        const monthViewStyle = new CalendarMonthViewStyle();
        monthViewStyle.backgroundColor = "#d4eac8";
        monthViewStyle.selectionShapeColor = "#a4ed7d";

        const todayCellStyle = new DayCellStyle();
        todayCellStyle.cellBackgroundColor = "#56a3a6";
        todayCellStyle.cellBorderWidth = 2;
        todayCellStyle.cellBorderColor = "#d4eac8";
        todayCellStyle.cellTextColor = "#a4ed7d";
        todayCellStyle.cellTextSize = 14;
        monthViewStyle.todayCellStyle = todayCellStyle;

        const dayCellStyle = new DayCellStyle();
        dayCellStyle.showEventsText = true;
        dayCellStyle.eventTextColor = "#56a3a6";
        dayCellStyle.eventTextSize = 8;
        dayCellStyle.cellBackgroundColor = "#d4eac8";
        dayCellStyle.cellBorderWidth = 1;
        dayCellStyle.cellBorderColor = "#a4ed7d";
        dayCellStyle.cellTextColor = "#484538";
        dayCellStyle.cellTextSize = 10;
        monthViewStyle.dayCellStyle = dayCellStyle;


        const weekendCellStyle = new DayCellStyle();
        weekendCellStyle.eventTextColor = "#56a3a6";
        weekendCellStyle.eventTextSize = 8;
        weekendCellStyle.cellBackgroundColor = "#b3e268";
        weekendCellStyle.cellBorderWidth = 1;
        weekendCellStyle.cellBorderColor = "#a4ed7d";
        weekendCellStyle.cellTextColor = "#484538";
        weekendCellStyle.cellTextSize = 10;
        monthViewStyle.weekendCellStyle = weekendCellStyle;

        const selectedCellStyle = new DayCellStyle();
        selectedCellStyle.eventTextColor = "#56a3a6";
        selectedCellStyle.eventTextSize = 8;
        selectedCellStyle.cellBackgroundColor = "#a4ed7d";
        selectedCellStyle.cellBorderWidth = 2;
        selectedCellStyle.cellBorderColor = "#56a3a6";
        selectedCellStyle.cellTextColor = "Black";
        selectedCellStyle.cellTextSize = 18;
        monthViewStyle.selectedDayCellStyle = selectedCellStyle;


        const dayNameCellStyle = new CellStyle();
        dayNameCellStyle.cellBackgroundColor = "#a4ed7d";
        dayNameCellStyle.cellBorderColor = "#56a3a6";
        dayNameCellStyle.cellTextColor = "#484538";
        dayNameCellStyle.cellTextSize = 10;
        monthViewStyle.dayNameCellStyle = dayNameCellStyle;

        const titleCellStyle = new DayCellStyle();
        titleCellStyle.cellBackgroundColor = "#a4ed7d";
        titleCellStyle.cellBorderWidth = 1;
        titleCellStyle.cellBorderColor = "#484538";
        titleCellStyle.cellTextColor = "#484538";
        titleCellStyle.cellTextFontName = "Times New Roman";
        titleCellStyle.cellTextFontStyle = "Bold";
        titleCellStyle.cellTextSize = 18;
        monthViewStyle.titleCellStyle = titleCellStyle;

        return monthViewStyle;
    }

    getYearViewStyle(): CalendarYearViewStyle {
        const yearViewStyle = new CalendarYearViewStyle();

        const titleCellStyle = new DayCellStyle();
        titleCellStyle.cellBackgroundColor = "#a4ed7d";
        titleCellStyle.cellBorderWidth = 1;
        titleCellStyle.cellBorderColor = "#484538";
        titleCellStyle.cellTextColor = "#484538";
        yearViewStyle.titleCellStyle = titleCellStyle;

        const monthCellStyle = new MonthCellStyle();
        monthCellStyle.weekendTextColor = "#d4eac8";
        monthCellStyle.todayTextColor = "#484538";
        monthCellStyle.dayTextColor = "#484538";
        monthCellStyle.dayNameTextColor = "#484538";
        monthCellStyle.monthNameTextColor = "#484538";
        yearViewStyle.monthCellStyle = monthCellStyle;

        return yearViewStyle;
    }
}
