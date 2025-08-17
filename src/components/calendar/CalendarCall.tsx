"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  Calendar as RBCalendar,
  momentLocalizer,
  Views,
} from "react-big-calendar";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./week/customToolBar";
import CustomEventPopover from "./week/customEvent";
import CustomDayHeader from "./week/customDayHeader";

export function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export type GoogleEventProps = {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  summary: string;
};

export type TypedGoogleEventProps = GoogleEventProps & {
  eventType: string;
};

export type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  resource: TypedGoogleEventProps;
};

//This will hold calendar events of all types (i.e. all classes)
//Dont forget to add in the google calendar id later
export const calendarSources = [
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL_CS009, eventType: "CS 009ABC" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL_CS010, eventType: "CS 010ABC" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL_CS011, eventType: "CS 011" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL_CS061, eventType: "CS 061" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL_CS100, eventType: "CS 100" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL_CS111, eventType: "CS 111" },
  { id: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL_CS141, eventType: "CS 141" },
];



//Uses localization to get the momenets date I think??
const localizer = momentLocalizer(moment);

//Note this calendar will only have week and day
const CalendarCall = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isDay, setIsDay] = React.useState<boolean>(true);
  const currentMonth = date?.toLocaleDateString("en-US", {
    month: "long",
  });

  const currentYear = date?.toLocaleDateString("en-US", {
    year: "numeric",
  });

  const [selectedClass, setSelectedClass] = React.useState<string[]>(
    calendarSources.map((source) => source.eventType),
  );
  const isMobile = useWindowWidth() < 768;

  const { data, isLoading } = useQuery<{
    allEvents: TypedGoogleEventProps[];
    futureEvents: TypedGoogleEventProps[];
  }>({
    queryKey: ["googleCalendarEvents"],
    queryFn: async () => {
      const now = new Date();
      const tenWeeksAgo = new Date(
        now.getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();
      const tenWeeksAhead = new Date(
        now.getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const results = await Promise.all(
        calendarSources.map(async ({ id, eventType }) => {
          try {
            const res = await fetch(
              `https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${tenWeeksAgo}&timeMax=${tenWeeksAhead}`,
            );

            if (!res.ok) {
              console.warn(`Failed to fetch ${eventType} calendar`);
              return [];
            }

            const data = await res.json();

            return (data.items || []).map((item: GoogleEventProps) => ({
              ...item,
              eventType,
            }));
          } catch (err) {
            console.error(`Error fetching ${eventType} events`, err);
            return [];
          }
        }),
      );

      const allEvents: TypedGoogleEventProps[] = results.flat();

      const futureEvents = allEvents
        .filter((item) => {
          const startString = item.start?.dateTime || item.start?.date;
          return startString && new Date(startString) >= now;
        })
        .slice(0, 3);

      return { allEvents, futureEvents };
    },
  });

  // Convert Google events to react-big-calendar events
  const calendarEvents = React.useMemo(() => {
    if (!data?.allEvents) return [];
    return data.allEvents
      .map((event) => {
        const startString = event.start?.dateTime || event.start?.date;
        const endString = event.end?.dateTime || event.end?.date;
        if (!startString || !endString) return null;
        return {
          title: event.summary ?? "Untitled Event",
          start: new Date(startString),
          end: new Date(endString),
          allDay: !event.start?.dateTime,
          resource: event,
        };
      })
      .filter(
        (
          e,
        ): e is {
          title: string;
          start: Date;
          end: Date;
          allDay: boolean;
          resource: TypedGoogleEventProps;
        } => e !== null,
      );
  }, [data]);

  //Custom event renderer for react-big-calendar
  const CustomEvent = ({ event }: { event: CalendarEvent }) => {
    const resource = event.resource;
    return (
      <CustomEventPopover
        startDate={resource.start}
        endDate={resource.end}
        title={event.title}
        date={event.start}
        location={resource.location}
        description={resource.description}
        eventType={resource.eventType}
      />
    );
  };

  return (
    <div>
      <div className="w-11/12 mx-auto my-4 flex justify-between text-nowrap pt-8 text-6xl font-bold text-ula-blue-primary">
        {currentMonth}, {currentYear}
        <div className="rounded-xl border-2 border-black p-2 text-xl text-black">
          <button
            onClick={() => setIsDay(false)}
            className={`my-1 rounded-lg px-8 py-2 transition-colors duration-200 ${
              !isDay ? "bg-ula-yellow-primary" : "bg-transparent"
            }`}
          >
            WEEK
          </button>
          <button
            onClick={() => setIsDay(true)}
            className={`my-1 rounded-lg px-8 py-2 transition-colors duration-200 ${
              isDay ? "bg-ula-yellow-primary" : "bg-transparent"
            }`}
          >
            DAY
          </button>
        </div>
      </div>
      {isLoading || !data ? (
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      ) : (
        <div className="rounded-calendar-top mx-auto h-[150vh] w-11/12 pb-8">
          <RBCalendar
            key={isDay ? "CalendarDay" : "CalendarWeek"}
            localizer={localizer}
            events={calendarEvents.filter((event) =>
              selectedClass.includes(event.resource.eventType),
            )}
            startAccessor="start"
            endAccessor="end"
            titleAccessor="title"
            defaultView={isDay ? Views.DAY : Views.WEEK}
            views={["day", "week"]}
            min={new Date(1970, 1, 1, 9, 0, 0)} // 9:00 AM
            max={new Date(1970, 1, 1, 21, 0, 0)} // 8:00 PM
            date={date}
            onNavigate={setDate}
            formats={{
              timeGutterFormat: (date) =>
                isMobile
                  ? moment(date).format("hA")
                  : moment(date).format("h:mm A"),
            }}
            //key={isMobile ? "mobile" : "desktop"}
            components={{
              toolbar: (props) => (
                <CustomToolbar
                  {...props}
                  selectedClass={selectedClass}
                  setSelectedClass={setSelectedClass}
                  allClassTypes={calendarSources.map((s) => s.eventType)}
                />
              ),
              event: CustomEvent,
              //Day view not given in header because if it's one column, it
              //won't use the header and not render it
              header: CustomDayHeader,
            }}
            eventPropGetter={() => ({
              style: {
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
                padding: 0,
                margin: 0,
              },
            })}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarCall;
