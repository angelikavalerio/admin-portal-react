import { useState } from "react";
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState([])

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your new event")
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.start}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })

      console.log(currentEvents[0].title)
    }
  }



  const handleEventClick = (selected) => {
    if (window.confirm(
      `Are you sure you want to delete the event ${selected.event.title}?`
    )
    ) {
      selected.event.remove()
    }
  }

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box
        display="flex"
        flexDirection={theme.breakpoints.down('md') && "column"}
        justifyContent="space-between"
        mt="10px"
      >
        <Box
          flex={theme.breakpoints.down('md') ? "1 1 100%" : "1 1 20%"}
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => {
              return (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px"
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric"
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              )
            })}
          </List>
        </Box>

        <Box
          flex="1 1 100%"
          ml={theme.breakpoints.down('md') ? undefined : "15px"}
        >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}
            initialView="dayGridMonth"
            editable
            selectable
            selectMirror
            dayMaxEvents
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: 1223, title: "Happy New Year", date: "2024-01-01" },
              { id: 23223, title: "Sample event", date: "2024-08-11" }
            ]}
          />

        </Box>
      </Box>
    </Box >
  )
}

export default Calendar