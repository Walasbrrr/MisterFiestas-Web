"use client";

import { useState, useMemo } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck2,
  CalendarX2,
  Clock,
} from "lucide-react";
import {
  currentYear,
  currentMonth,
  todayDate,
  DAYS_ES,
  MONTHS_ES,
  getDaysInMonth,
  getFirstDayOfMonth,
  isDateFullyBooked,
  isDatePartiallyBooked,
  isPastDate,
  getMonthStats,
  UNAVAILABLE_DATES,
  ALL_TIME_SLOTS,
  dateKey,
} from "@/lib/calendar-data";

export default function InlineCalendar({
  onReserveClick,
}: {
  onReserveClick: () => void;
}) {
  const [viewYear, setViewYear] = useState(currentYear);
  const [viewMonth, setViewMonth] = useState(currentMonth);
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const calendarDays = useMemo(() => {
    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return days;
  }, [viewYear, viewMonth]);

  const stats = useMemo(
    () => getMonthStats(viewYear, viewMonth),
    [viewYear, viewMonth],
  );

  const canGoPrev =
    viewYear > currentYear ||
    (viewYear === currentYear && viewMonth > currentMonth);

  const prevMonthNav = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonthNav = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  // Info for hovered day
  const hoveredInfo = useMemo(() => {
    if (hoveredDay === null) return null;
    if (isPastDate(viewYear, viewMonth, hoveredDay)) return null;
    const key = dateKey(viewYear, viewMonth, hoveredDay);
    const booked = UNAVAILABLE_DATES[key] || [];
    const availableCount = ALL_TIME_SLOTS.length - booked.length;
    return {
      day: hoveredDay,
      available: availableCount,
      total: ALL_TIME_SLOTS.length,
      fullyBooked: availableCount === 0,
    };
  }, [hoveredDay, viewYear, viewMonth]);

  return (
    <div className="inline-calendar-layout">
      {/* Calendar card */}
      <div className="inline-calendar-card">
        <div className="calendar-nav">
          <button
            className="calendar-nav-btn calendar-nav-btn-dark"
            onClick={prevMonthNav}
            disabled={!canGoPrev}
            aria-label="Mes anterior"
          >
            <ArrowLeft size={18} />
          </button>
          <span className="calendar-month-label calendar-month-label-dark">
            {MONTHS_ES[viewMonth]} {viewYear}
          </span>
          <button
            className="calendar-nav-btn calendar-nav-btn-dark"
            onClick={nextMonthNav}
            aria-label="Mes siguiente"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="calendar-grid">
          {DAYS_ES.map((d) => (
            <div
              key={d}
              className="calendar-day-header calendar-day-header-dark"
            >
              {d}
            </div>
          ))}
          {calendarDays.map((day, i) => {
            if (day === null) {
              return <div key={`empty-${i}`} className="calendar-cell" />;
            }
            const past = isPastDate(viewYear, viewMonth, day);
            const fullyBooked = isDateFullyBooked(viewYear, viewMonth, day);
            const partiallyBooked = isDatePartiallyBooked(
              viewYear,
              viewMonth,
              day,
            );
            const isToday =
              viewYear === currentYear &&
              viewMonth === currentMonth &&
              day === todayDate;

            let cls = "calendar-cell calendar-cell-day calendar-cell-dark";
            if (past) cls += " calendar-cell-past-dark";
            else if (fullyBooked) cls += " calendar-cell-booked-dark";
            else if (partiallyBooked) cls += " calendar-cell-partial-dark";
            else cls += " calendar-cell-available-dark";
            if (isToday) cls += " calendar-cell-today-dark";

            return (
              <div
                key={`day-${day}`}
                className={cls}
                onMouseEnter={() => setHoveredDay(day)}
                onMouseLeave={() => setHoveredDay(null)}
                aria-label={`${day} de ${MONTHS_ES[viewMonth]}${fullyBooked ? ", no disponible" : partiallyBooked ? ", parcialmente disponible" : ", disponible"}`}
              >
                <span>{day}</span>
                {fullyBooked && (
                  <span className="calendar-indicator calendar-indicator-booked" />
                )}
                {partiallyBooked && !fullyBooked && (
                  <span className="calendar-indicator calendar-indicator-partial" />
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="calendar-legend calendar-legend-dark">
          <div className="calendar-legend-item">
            <span className="calendar-legend-dot calendar-legend-dot-available" />
            <span>Disponible</span>
          </div>
          <div className="calendar-legend-item">
            <span className="calendar-legend-dot calendar-legend-dot-partial" />
            <span>Algunos horarios</span>
          </div>
          <div className="calendar-legend-item">
            <span className="calendar-legend-dot calendar-legend-dot-booked" />
            <span>No disponible</span>
          </div>
        </div>
      </div>

      {/* Right side panel: Stats + Hover Info + CTA */}
      <div className="inline-calendar-sidebar">
        {/* Hovered day info */}
        <div className="inline-calendar-hover-card">
          {hoveredInfo ? (
            <>
              <div className="hover-card-date">
                <Clock size={18} aria-hidden="true" />
                <span>
                  {hoveredInfo.day} de {MONTHS_ES[viewMonth]}
                </span>
              </div>
              {hoveredInfo.fullyBooked ? (
                <div className="hover-card-status hover-card-status-booked">
                  <CalendarX2 size={32} />
                  <div>
                    <strong>Sin disponibilidad</strong>
                    <span>
                      Todos los horarios están reservados para este día
                    </span>
                  </div>
                </div>
              ) : (
                <div className="hover-card-status hover-card-status-available">
                  <CalendarCheck2 size={32} />
                  <div>
                    <strong>
                      {hoveredInfo.available} de {hoveredInfo.total} horarios
                    </strong>
                    <span>disponibles para reservar</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="hover-card-empty">
              <Clock size={24} />
              <span>
                Pasa el cursor sobre una fecha para ver la disponibilidad
              </span>
            </div>
          )}
        </div>

        {/* Month stats */}
        <div className="inline-calendar-stats">
          <div className="inline-stat">
            <span className="inline-stat-number inline-stat-available">
              {stats.available}
            </span>
            <span className="inline-stat-label">Días disponibles</span>
          </div>
          <div className="inline-stat">
            <span className="inline-stat-number inline-stat-partial">
              {stats.partial}
            </span>
            <span className="inline-stat-label">Parcialmente reservados</span>
          </div>
          <div className="inline-stat">
            <span className="inline-stat-number inline-stat-booked">
              {stats.booked}
            </span>
            <span className="inline-stat-label">Completamente reservados</span>
          </div>
        </div>

        {/* CTA */}
        <button className="button inline-calendar-cta" onClick={onReserveClick}>
          Realizar mi reserva
          <ArrowUpRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
