const calendar = document.querySelector("#calendar");

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

const monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const daysOfWeek = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

const daysInMonth = new Date(year, month + 1, 0).getDate();

let dayIndex = daysOfWeek.indexOf(new Date(year, month, 1).toLocaleDateString('en-US', { weekday: 'short' }));

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 7; j++) {
    const dayNumber = i * 7 + j - dayIndex + 2;
    const cell = document.createElement("div");
    cell.innerText = (dayNumber >= 1 && dayNumber <= daysInMonth) ? dayNumber : "";
    if (dayNumber === day) {
      cell.classList.add("today");
    }
    calendar.appendChild(cell);
  }
}