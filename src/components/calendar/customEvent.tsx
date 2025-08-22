import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";

interface CalendarEventDialogProps {
  startDate: {
    dateTime?: string;
    date?: string;
  };
  endDate?: {
    dateTime?: string;
    date?: string;
  };
  title: string;
  location?: string;
  description?: string;
  eventType: string;
}

const CalendarEventDialog = ({
  startDate,
  endDate,
  title,
  location,
  description,
  eventType,
}: CalendarEventDialogProps) => {
  let eventStartDate = new Date();
  let eventEndDate = new Date();
  let hasStartTime = false;
  let hasEndTime = false;
  let hasLocation = false;

  if (location) {
    hasLocation = true;
  }

  if (startDate.dateTime) {
    eventStartDate = new Date(startDate.dateTime);
    hasStartTime = true;
  } else if (startDate.date) {
    eventStartDate = new Date(startDate.date);
  }

  if (endDate?.dateTime) {
    eventEndDate = new Date(endDate.dateTime);
    hasEndTime = true;
  } else if (endDate?.date) {
    eventEndDate = new Date(endDate.date);
  }

  let timeRangeDisplay = "";
  if (hasStartTime) {
    timeRangeDisplay = eventStartDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Los_Angeles",
    });
    if (hasEndTime) {
      timeRangeDisplay +=
        " - " +
        eventEndDate.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "America/Los_Angeles",
        });
    }
  }

  return (
    <Dialog>
      <div className="text-s flex h-full w-full cursor-default flex-col rounded-2xl border-2 border-black bg-ula-blue-accent px-2 py-3 text-white">
        <DialogTrigger className="cursor-pointer whitespace-nowrap text-left hover:opacity-50">
          <div className="overflow-hidden text-ellipsis">
            {hasStartTime && timeRangeDisplay}
          </div>
          <div className="overflow-hidden text-ellipsis text-[90%]">
            {eventType}
          </div>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[90%]">
            {location ? location : "No location"}
          </div>
        </DialogTrigger>
      </div>
      <DialogOverlay className="bg-gray-400/50">
        <DialogContent className="z-50 w-[80vw] bg-white p-0 shadow-md md:w-[40vw] 2xl:w-[30vw]">
          <div className="rounded-t-md bg-ula-blue-accent px-10 py-3 text-xl text-white">
            {title}
          </div>
          <div className="rounded-b-xl bg-white px-10 text-lg">
            <ul className="list-disc space-y-4 pb-4 pl-10 marker:text-2xl marker:text-ula-blue-accent">
              {hasStartTime && <li>{timeRangeDisplay}</li>}
              {hasLocation && <li>{location}</li>}
              {description && <li>{description}</li>}
            </ul>
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default CalendarEventDialog;
