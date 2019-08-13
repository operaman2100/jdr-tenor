import React from 'react';
import Photo from '../../components/Photo/Photo';
import './Calendar.css';
import PearlPyramid from '../../images/pearl-pyramid.jpg';
import YearlyCalendar from '../../components/YearlyCalendar/YearlyCalendar';
import data2018 from '../../data/calendarData/calendar201819.json';
import data2016 from '../../data/calendarData/calendar201617.json';
import data2015 from '../../data/calendarData/calendar201415.json';
import data2013 from '../../data/calendarData/calendar2013.json';
import data2012 from '../../data/calendarData/calendar2012.json';
import data2011 from '../../data/calendarData/calendar2011.json';
import data2010 from '../../data/calendarData/calendar2010.json';
import data2009 from '../../data/calendarData/calendar2009.json';
import data2008 from '../../data/calendarData/calendar2008.json';
import data2007 from '../../data/calendarData/calendar2007.json';
import data2006 from '../../data/calendarData/calendar-pre-2007.json';

const Calendar = () => {
  return (
    <div>
    <Photo props={PearlPyramid} />
    <div className="calendar-div">
    <div className="year-div">
    <h2>2018-19</h2>
    <YearlyCalendar className="calendar-component" props={data2018} />
    </div>
    <div className="year-div">
    <h2>2016-17</h2>
    <YearlyCalendar className="calendar-component" props={data2016} />
    </div>
    <div className="year-div">
    <h2>2015</h2>
    <YearlyCalendar className="calendar-component" props={data2015} />
    </div>
    <div className="year-div">
    <h2>2013-14</h2>
    <YearlyCalendar className="calendar-component" props={data2013} />
    </div>
    <div className="year-div">
    <h2>2012</h2>
    <YearlyCalendar className="calendar-component" props={data2012} />
    </div>
    <div className="year-div">
    <h2>2011</h2>
    <YearlyCalendar className="calendar-component" props={data2011} />
    </div>
    <div className="year-div">
    <h2>2010</h2>
    <YearlyCalendar className="calendar-component" props={data2010} />
    </div>
    <div className="year-div">
    <h2>2009</h2>
    <YearlyCalendar className="calendar-component" props={data2009} />
    </div>
    <div className="year-div">
    <h2>2008</h2>
    <YearlyCalendar className="calendar-component" props={data2008} />
    </div>
    <div className="year-div">
    <h2>2007</h2>
    <YearlyCalendar className="calendar-component" props={data2007} />
    </div>
    <div className="year-div">
    <h2>Selected Earlier Engagements</h2>
    <YearlyCalendar className="calendar-component" props={data2006} />
    </div>
    </div>
    </div>
  )
}

export default Calendar;
