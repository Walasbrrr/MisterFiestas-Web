"use client";

import { useState, useMemo, forwardRef, useImperativeHandle } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  PartyPopper,
  X,
  Check,
  AlertCircle,
} from "lucide-react";
import {
  currentYear,
  currentMonth,
  todayDate,
  UNAVAILABLE_DATES,
  ALL_TIME_SLOTS,
  DAYS_ES,
  MONTHS_ES,
  EVENT_TYPES,
  dateKey,
  getDaysInMonth,
  getFirstDayOfMonth,
  isDateFullyBooked,
  isDatePartiallyBooked,
  isPastDate,
} from "@/lib/calendar-data";

export interface ReservationFormHandle {
  open: () => void;
}

/* ── Component ── */
const ReservationForm = forwardRef<ReservationFormHandle>(function ReservationForm(_props, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
  }));

  // Calendar state
  const [viewYear, setViewYear] = useState(currentYear);
  const [viewMonth, setViewMonth] = useState(currentMonth);
  const [selectedDate, setSelectedDate] = useState<{
    year: number;
    month: number;
    day: number;
  } | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Calendar grid
  const calendarDays = useMemo(() => {
    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfMonth(viewYear, viewMonth);
    const days: (number | null)[] = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(d);
    }
    return days;
  }, [viewYear, viewMonth]);

  // Available time slots for selected date
  const availableSlots = useMemo(() => {
    if (!selectedDate) return [];
    const key = dateKey(selectedDate.year, selectedDate.month, selectedDate.day);
    const booked = UNAVAILABLE_DATES[key] || [];
    return ALL_TIME_SLOTS.map((slot) => ({
      time: slot,
      available: !booked.includes(slot),
    }));
  }, [selectedDate]);

  const prevMonth = () => {
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

  const canGoPrev =
    viewYear > currentYear ||
    (viewYear === currentYear && viewMonth > currentMonth);

  const handleSelectDate = (day: number) => {
    if (
      isPastDate(viewYear, viewMonth, day) ||
      isDateFullyBooked(viewYear, viewMonth, day)
    )
      return;
    setSelectedDate({ year: viewYear, month: viewMonth, day });
    setSelectedTime(null);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset after animation
    setTimeout(() => {
      setStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
      setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
      setSubmitted(false);
    }, 350);
  };

  const canProceedStep1 = selectedDate !== null && selectedTime !== null;
  const canProceedStep2 =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.eventType !== "";

  const selectedDateFormatted = selectedDate
    ? `${selectedDate.day} de ${MONTHS_ES[selectedDate.month]} ${selectedDate.year}`
    : "";

  return (
    <>
      {/* Floating CTA button */}
      <button
        className="reservation-fab"
        onClick={() => setIsOpen(true)}
        aria-label="Realizar mi reserva"
        id="reservation-fab"
      >
        <CalendarDays aria-hidden="true" />
        <span>Realizar mi reserva</span>
      </button>

      {/* Modal overlay */}
      <div
        className={`reservation-overlay ${isOpen ? "reservation-overlay-open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) handleClose();
        }}
      >
        <div
          className={`reservation-modal ${isOpen ? "reservation-modal-open" : ""}`}
        >
          {/* Header */}
          <div className="reservation-header">
            <div className="reservation-header-left">
              <div className="reservation-header-icon">
                <PartyPopper aria-hidden="true" />
              </div>
              <div>
                <h2>Reserva tu evento</h2>
                <p>Selecciona fecha, hora y cuéntanos sobre tu celebración</p>
              </div>
            </div>
            <button
              className="reservation-close"
              onClick={handleClose}
              aria-label="Cerrar formulario"
            >
              <X aria-hidden="true" />
            </button>
          </div>

          {/* Progress steps */}
          <div className="reservation-steps">
            <div
              className={`reservation-step ${step >= 1 ? "reservation-step-active" : ""} ${step > 1 ? "reservation-step-done" : ""}`}
            >
              <span className="reservation-step-num">
                {step > 1 ? <Check size={14} /> : "1"}
              </span>
              <span className="reservation-step-label">Fecha y hora</span>
            </div>
            <div className="reservation-step-line" />
            <div
              className={`reservation-step ${step >= 2 ? "reservation-step-active" : ""} ${step > 2 ? "reservation-step-done" : ""}`}
            >
              <span className="reservation-step-num">
                {step > 2 ? <Check size={14} /> : "2"}
              </span>
              <span className="reservation-step-label">Tus datos</span>
            </div>
            <div className="reservation-step-line" />
            <div
              className={`reservation-step ${step >= 3 ? "reservation-step-active" : ""}`}
            >
              <span className="reservation-step-num">3</span>
              <span className="reservation-step-label">Confirmación</span>
            </div>
          </div>

          {/* Step 1: Calendar + Time */}
          {step === 1 && (
            <div className="reservation-body reservation-body-step1">
              {/* Calendar */}
              <div className="reservation-calendar">
                <div className="calendar-nav">
                  <button
                    className="calendar-nav-btn"
                    onClick={prevMonth}
                    disabled={!canGoPrev}
                    aria-label="Mes anterior"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <span className="calendar-month-label">
                    {MONTHS_ES[viewMonth]} {viewYear}
                  </span>
                  <button
                    className="calendar-nav-btn"
                    onClick={nextMonthNav}
                    aria-label="Mes siguiente"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>

                <div className="calendar-grid">
                  {DAYS_ES.map((d) => (
                    <div key={d} className="calendar-day-header">
                      {d}
                    </div>
                  ))}
                  {calendarDays.map((day, i) => {
                    if (day === null) {
                      return <div key={`empty-${i}`} className="calendar-cell" />;
                    }
                    const past = isPastDate(viewYear, viewMonth, day);
                    const fullyBooked = isDateFullyBooked(
                      viewYear,
                      viewMonth,
                      day
                    );
                    const partiallyBooked = isDatePartiallyBooked(
                      viewYear,
                      viewMonth,
                      day
                    );
                    const isSelected =
                      selectedDate?.year === viewYear &&
                      selectedDate?.month === viewMonth &&
                      selectedDate?.day === day;
                    const isToday =
                      viewYear === currentYear &&
                      viewMonth === currentMonth &&
                      day === todayDate;

                    let cls = "calendar-cell calendar-cell-day";
                    if (past) cls += " calendar-cell-past";
                    else if (fullyBooked) cls += " calendar-cell-booked";
                    else if (partiallyBooked) cls += " calendar-cell-partial";
                    else cls += " calendar-cell-available";
                    if (isSelected) cls += " calendar-cell-selected";
                    if (isToday) cls += " calendar-cell-today";

                    return (
                      <button
                        key={`day-${day}`}
                        className={cls}
                        onClick={() => handleSelectDate(day)}
                        disabled={past || fullyBooked}
                        aria-label={`${day} de ${MONTHS_ES[viewMonth]}${fullyBooked ? ", no disponible" : partiallyBooked ? ", parcialmente disponible" : ""}`}
                      >
                        <span>{day}</span>
                        {fullyBooked && (
                          <span className="calendar-indicator calendar-indicator-booked" />
                        )}
                        {partiallyBooked && !fullyBooked && (
                          <span className="calendar-indicator calendar-indicator-partial" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="calendar-legend">
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

              {/* Time slots */}
              <div className="reservation-time-panel">
                <div className="time-panel-header">
                  <Clock size={18} aria-hidden="true" />
                  <span>
                    {selectedDate
                      ? `Horarios para el ${selectedDateFormatted}`
                      : "Selecciona una fecha primero"}
                  </span>
                </div>
                {selectedDate ? (
                  <div className="time-slots-grid">
                    {availableSlots.map(({ time, available }) => (
                      <button
                        key={time}
                        className={`time-slot ${!available ? "time-slot-unavailable" : ""} ${selectedTime === time ? "time-slot-selected" : ""}`}
                        onClick={() => available && setSelectedTime(time)}
                        disabled={!available}
                      >
                        <Clock size={14} aria-hidden="true" />
                        <span>{time}</span>
                        {!available && (
                          <span className="time-slot-badge">Reservado</span>
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="time-slots-empty">
                    <CalendarDays size={48} />
                    <p>Elige un día en el calendario para ver los horarios disponibles</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Form */}
          {step === 2 && (
            <div className="reservation-body reservation-body-step2">
              <div className="reservation-summary-bar">
                <CalendarDays size={16} aria-hidden="true" />
                <span>
                  {selectedDateFormatted} a las {selectedTime}
                </span>
              </div>

              <div className="reservation-form-grid">
                <div className="reservation-field">
                  <label htmlFor="res-name">
                    <User size={16} aria-hidden="true" />
                    Nombre completo
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="reservation-field">
                  <label htmlFor="res-email">
                    <Mail size={16} aria-hidden="true" />
                    Correo electrónico
                  </label>
                  <input
                    id="res-email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="reservation-field">
                  <label htmlFor="res-phone">
                    <Phone size={16} aria-hidden="true" />
                    Teléfono
                  </label>
                  <input
                    id="res-phone"
                    type="tel"
                    placeholder="809-000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div className="reservation-field">
                  <label htmlFor="res-event">
                    <PartyPopper size={16} aria-hidden="true" />
                    Tipo de evento
                  </label>
                  <select
                    id="res-event"
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData({ ...formData, eventType: e.target.value })
                    }
                  >
                    <option value="">Selecciona una opción</option>
                    {EVENT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="reservation-field reservation-field-full">
                  <label htmlFor="res-message">
                    <MessageSquare size={16} aria-hidden="true" />
                    Mensaje o detalles adicionales{" "}
                    <span className="field-optional">(opcional)</span>
                  </label>
                  <textarea
                    id="res-message"
                    placeholder="Cuéntanos más sobre tu evento, cantidad de invitados, servicios que te interesan..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && !submitted && (
            <div className="reservation-body reservation-body-step3">
              <div className="confirmation-card">
                <h3>Resumen de tu reserva</h3>
                <div className="confirmation-details">
                  <div className="confirmation-row">
                    <CalendarDays size={18} aria-hidden="true" />
                    <div>
                      <span className="confirmation-label">Fecha y hora</span>
                      <strong>
                        {selectedDateFormatted} — {selectedTime}
                      </strong>
                    </div>
                  </div>
                  <div className="confirmation-row">
                    <User size={18} aria-hidden="true" />
                    <div>
                      <span className="confirmation-label">Nombre</span>
                      <strong>{formData.name}</strong>
                    </div>
                  </div>
                  <div className="confirmation-row">
                    <Mail size={18} aria-hidden="true" />
                    <div>
                      <span className="confirmation-label">Correo</span>
                      <strong>{formData.email}</strong>
                    </div>
                  </div>
                  <div className="confirmation-row">
                    <Phone size={18} aria-hidden="true" />
                    <div>
                      <span className="confirmation-label">Teléfono</span>
                      <strong>{formData.phone}</strong>
                    </div>
                  </div>
                  <div className="confirmation-row">
                    <PartyPopper size={18} aria-hidden="true" />
                    <div>
                      <span className="confirmation-label">Tipo de evento</span>
                      <strong>{formData.eventType}</strong>
                    </div>
                  </div>
                  {formData.message && (
                    <div className="confirmation-row">
                      <MessageSquare size={18} aria-hidden="true" />
                      <div>
                        <span className="confirmation-label">Mensaje</span>
                        <strong>{formData.message}</strong>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Success state */}
          {step === 3 && submitted && (
            <div className="reservation-body reservation-body-success">
              <div className="success-content">
                <div className="success-icon">
                  <Check size={40} />
                </div>
                <h3>¡Reserva enviada!</h3>
                <p>
                  Hemos recibido tu solicitud para el{" "}
                  <strong>{selectedDateFormatted}</strong> a las{" "}
                  <strong>{selectedTime}</strong>.
                </p>
                <p>Te contactaremos pronto para confirmar los detalles.</p>
                <button className="button" onClick={handleClose}>
                  Cerrar
                </button>
              </div>
            </div>
          )}

          {/* Footer actions */}
          {!(step === 3 && submitted) && (
            <div className="reservation-footer">
              {step > 1 && (
                <button
                  className="button button-secondary reservation-btn-back"
                  onClick={() => setStep((step - 1) as 1 | 2)}
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                  Atrás
                </button>
              )}
              <div className="reservation-footer-right">
                {step === 1 && (
                  <button
                    className="button reservation-btn-next"
                    onClick={() => setStep(2)}
                    disabled={!canProceedStep1}
                  >
                    Continuar
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                )}
                {step === 2 && (
                  <button
                    className="button reservation-btn-next"
                    onClick={() => setStep(3)}
                    disabled={!canProceedStep2}
                  >
                    Revisar reserva
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                )}
                {step === 3 && !submitted && (
                  <button className="button reservation-btn-confirm" onClick={handleSubmit}>
                    <Check size={16} aria-hidden="true" />
                    Confirmar reserva
                  </button>
                )}
              </div>
              {step === 1 && !canProceedStep1 && (
                <div className="reservation-hint">
                  <AlertCircle size={14} />
                  <span>Selecciona fecha y hora para continuar</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
});

export default ReservationForm;
