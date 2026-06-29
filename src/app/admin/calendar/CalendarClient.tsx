"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Clock, MapPin, Users, Filter, Search, Edit2 } from "lucide-react";
import Link from "next/link";

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  type: "event" | "meeting" | "publication" | "deadline" | "maintenance";
  location?: string;
  attendees?: number;
  description?: string;
}

export default function CalendarClient() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [viewMode, setViewMode] = useState<"month" | "week" | "day">("month");
  const [eventModalOpen, setEventModalOpen] = useState(false);

  const [events, setEvents] = useState<CalendarEvent[]>([
    {
      id: "1",
      title: "Innovation Week 2026",
      date: new Date(2024, 0, 20),
      time: "9:00 AM",
      type: "event",
      location: "Surigao City Convention Center",
      attendees: 250,
      description: "Annual innovation showcase event",
    },
    {
      id: "2",
      title: "Startup Pitch Competition",
      date: new Date(2024, 0, 25),
      time: "2:00 PM",
      type: "event",
      location: "PRIME SDN Hub",
      attendees: 100,
      description: "Startup pitch competition with prizes",
    },
    {
      id: "3",
      title: "Framework Review Meeting",
      date: new Date(2024, 0, 28),
      time: "10:00 AM",
      type: "meeting",
      location: "Conference Room A",
      attendees: 15,
      description: "Quarterly framework review",
    },
    {
      id: "4",
      title: "News Release: Q1 Report",
      date: new Date(2024, 1, 1),
      time: "12:00 PM",
      type: "publication",
      description: "Q1 2024 innovation report publication",
    },
    {
      id: "5",
      title: "System Maintenance",
      date: new Date(2024, 1, 5),
      time: "2:00 AM",
      type: "maintenance",
      description: "Scheduled server maintenance",
    },
    {
      id: "6",
      title: "Grant Application Deadline",
      date: new Date(2024, 1, 15),
      time: "11:59 PM",
      type: "deadline",
      description: "Startup grant application deadline",
    },
  ]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const getEventTypeColor = (type: CalendarEvent["type"]) => {
    const colors = {
      event: "bg-teal-100 text-teal-700 border-teal-200",
      meeting: "bg-blue-100 text-blue-700 border-blue-200",
      publication: "bg-purple-100 text-purple-700 border-purple-200",
      deadline: "bg-red-100 text-red-700 border-red-200",
      maintenance: "bg-amber-100 text-amber-700 border-amber-200",
    };
    return colors[type];
  };

  const getEventTypeIcon = (type: CalendarEvent["type"]) => {
    const icons = {
      event: CalendarIcon,
      meeting: Users,
      publication: CalendarIcon,
      deadline: Clock,
      maintenance: Clock,
    };
    return icons[type];
  };

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/dashboard">
            <button className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
              <ArrowLeft size={20} />
            </button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
            <p className="text-gray-500 mt-1">Manage events, schedules, and deadlines</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setEventModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold"
          >
            <Plus size={18} />
            <span>Add Event</span>
          </button>
        </div>
      </div>

      {/* Calendar Controls */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigateMonth("prev")}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-xl font-bold text-gray-900 min-w-[200px] text-center">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button
              onClick={() => navigateMonth("next")}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentDate(new Date())}
              className="px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-semibold"
            >
              Today
            </button>
            <div className="flex items-center bg-gray-100 rounded-xl p-1">
              {["month", "week", "day"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    viewMode === mode
                      ? "bg-white text-maroon-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-xl overflow-hidden">
          {/* Day Headers */}
          {dayNames.map((day) => (
            <div key={day} className="bg-gray-50 p-3 text-center">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{day}</span>
            </div>
          ))}

          {/* Empty Cells */}
          {Array.from({ length: startingDayOfWeek }).map((_, index) => (
            <div key={`empty-${index}`} className="bg-white p-3 min-h-[100px]" />
          ))}

          {/* Days */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const dayEvents = getEventsForDate(date);
            const isToday = new Date().toDateString() === date.toDateString();

            return (
              <motion.div
                key={day}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.01 }}
                className={`bg-white p-3 min-h-[100px] hover:bg-gray-50 transition-colors cursor-pointer ${isToday ? "bg-blue-50/50" : ""}`}
                onClick={() => {
                  if (dayEvents.length > 0) {
                    setSelectedEvent(dayEvents[0]);
                  }
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-semibold ${isToday ? "bg-maroon-900 text-white w-7 h-7 rounded-full flex items-center justify-center" : "text-gray-900"}`}>
                    {day}
                  </span>
                  {dayEvents.length > 0 && (
                    <span className="text-xs text-gray-500">{dayEvents.length}</span>
                  )}
                </div>
                <div className="space-y-1">
                  {dayEvents.slice(0, 2).map((event) => {
                    const EventTypeIcon = getEventTypeIcon(event.type);
                    return (
                      <div
                        key={event.id}
                        className={`p-1.5 rounded-md text-xs font-medium border ${getEventTypeColor(event.type)} truncate`}
                      >
                        <span className="flex items-center gap-1">
                          <EventTypeIcon size={10} />
                          {event.title}
                        </span>
                      </div>
                    );
                  })}
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-gray-500 font-medium">
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Events List */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Upcoming Events</h2>
            <p className="text-sm text-gray-500 mt-0.5">Next 30 days</p>
          </div>
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-gray-400" />
            <select className="px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-700/20">
              <option>All Types</option>
              <option>Events</option>
              <option>Meetings</option>
              <option>Publications</option>
              <option>Deadlines</option>
              <option>Maintenance</option>
            </select>
          </div>
        </div>
        <div className="space-y-3">
          {events.slice(0, 5).map((event) => {
            const EventTypeIcon = getEventTypeIcon(event.type);
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className={`p-3 rounded-xl ${getEventTypeColor(event.type)}`}>
                  <EventTypeIcon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900">{event.title}</p>
                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <CalendarIcon size={14} />
                      {event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {event.time}
                    </span>
                    {event.location && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {event.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getEventTypeColor(event.type)}`}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-maroon-900 text-white">
              <div className="flex items-center gap-3">
                <CalendarIcon size={20} />
                <h3 className="font-bold text-lg">Event Details</h3>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 text-lg">{selectedEvent.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{selectedEvent.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Date</p>
                  <p className="text-sm font-medium text-gray-900">
                    {selectedEvent.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Time</p>
                  <p className="text-sm font-medium text-gray-900">{selectedEvent.time}</p>
                </div>
                {selectedEvent.location && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-sm font-medium text-gray-900">{selectedEvent.location}</p>
                  </div>
                )}
                {selectedEvent.attendees && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Attendees</p>
                    <p className="text-sm font-medium text-gray-900">{selectedEvent.attendees}</p>
                  </div>
                )}
              </div>
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold">
                  <Edit2 size={18} />
                  <span>Edit Event</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Add Event Modal */}
      {eventModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-maroon-900 text-white">
              <div className="flex items-center gap-3">
                <Plus size={20} />
                <h3 className="font-bold text-lg">Add New Event</h3>
              </div>
              <button
                onClick={() => setEventModalOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  placeholder="Event title"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Type</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900">
                  <option value="event">Event</option>
                  <option value="meeting">Meeting</option>
                  <option value="publication">Publication</option>
                  <option value="deadline">Deadline</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900"
                  placeholder="Event location"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Description</label>
                <textarea
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-maroon-700/20 focus:border-maroon-900 resize-none"
                  rows={3}
                  placeholder="Event description"
                />
              </div>
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setEventModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button className="px-4 py-2.5 rounded-xl bg-maroon-900 text-white hover:bg-maroon-800 transition-colors font-semibold">
                  Create Event
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
