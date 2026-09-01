/* ── Shared calendar test data & helpers ── */

const today = new Date();
export const currentYear = today.getFullYear();
export const currentMonth = today.getMonth();
export const todayDate = today.getDate();

// Generate some unavailable dates for the current and next month
export const UNAVAILABLE_DATES: Record<string, string[]> = {};

export function dateKey(year: number, month: number, day: number) {
  return `${year}-${month}-${day}`;
}

// Current month — some fully booked days
[3, 7, 8, 14, 15, 21, 22, 28, 29].forEach((d) => {
  const key = dateKey(currentYear, currentMonth, d);
  UNAVAILABLE_DATES[key] = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];
});

// Partially booked days
[5, 10, 12, 17, 19, 24, 26].forEach((d) => {
  const key = dateKey(currentYear, currentMonth, d);
  UNAVAILABLE_DATES[key] = ["10:00", "11:00", "14:00", "15:00", "16:00"];
});

// Next month
const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
[2, 5, 6, 12, 13, 19, 20, 26, 27].forEach((d) => {
  const key = dateKey(nextYear, nextMonth, d);
  UNAVAILABLE_DATES[key] = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];
});
[3, 8, 15, 22, 28].forEach((d) => {
  const key = dateKey(nextYear, nextMonth, d);
  UNAVAILABLE_DATES[key] = [
    "09:00",
    "12:00",
    "13:00",
    "18:00",
    "19:00",
    "20:00",
  ];
});

export const ALL_TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

export const DAYS_ES = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
export const MONTHS_ES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const EVENT_TYPES = [
  "Cumpleaños",
  "Boda",
  "Quinceañera",
  "Baby Shower",
  "Evento empresarial",
  "Graduación",
  "Reunión familiar",
  "Otro",
];

/* ── Calendar helpers ── */
export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

export function isDateFullyBooked(year: number, month: number, day: number) {
  const key = dateKey(year, month, day);
  return UNAVAILABLE_DATES[key]?.length === ALL_TIME_SLOTS.length;
}

export function isDatePartiallyBooked(
  year: number,
  month: number,
  day: number,
) {
  const key = dateKey(year, month, day);
  const booked = UNAVAILABLE_DATES[key];
  return booked && booked.length > 0 && booked.length < ALL_TIME_SLOTS.length;
}

export function isPastDate(year: number, month: number, day: number) {
  const d = new Date(year, month, day);
  const t = new Date();
  t.setHours(0, 0, 0, 0);
  return d < t;
}

/** Count stats for a given month */
export function getMonthStats(year: number, month: number) {
  const daysInMonth = getDaysInMonth(year, month);
  let available = 0;
  let partial = 0;
  let booked = 0;

  for (let d = 1; d <= daysInMonth; d++) {
    if (isPastDate(year, month, d)) continue;
    if (isDateFullyBooked(year, month, d)) booked++;
    else if (isDatePartiallyBooked(year, month, d)) partial++;
    else available++;
  }
  return { available, partial, booked };
}
