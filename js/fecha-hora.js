console.log("validacion de fecha");
console.log("===fecha y hora GMT===");
/* greenwich mean time */
let timeGMT = new Date ();
console.log(timeGMT);
let timeGMTStr = timeGMT.toString();
console.log(timeGMTStr);

console.log("===obtener el dia de la semana===");
let timeGMTDay = timeGMT.getDay();
console.log(timeGMTDay);
let diasemana = ["domingo","lunes","martes","miercoles",
                 "jueves","viernes","sabado"];
console.log("hoy es:" + diasemana[timeGMTDay]);

console.log("===obtener el mes del año===");
let timeGMTMes = timeGMT.getMonth();
console.log(timeGMTMes);
let mes = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","nobiembre","diciembre"];
console.log("el mes es :" + mes[timeGMTMes]);

console.log("fecha y hora desfragmentada");
let currenttime = new Date();
console.log("dia de la semana:" + currenttime.getDay());
console.log("mes del año:" + currenttime.getMonth());
console.log("dia del mes:" + currenttime.getDate());
console.log("año:" + currenttime.getFullYear());
console.log("hora:" + currenttime.getHours());
console.log("minutos:" + currenttime.getMinutes());
console.log("segundos:" + currenttime.getSeconds());
console.log("milisegundos:" + currenttime.getMilliseconds());

console.log("==milisegundos trasncurridos desde 01/01/1970==");
console.log(currenttime.getTime());

console.log("==estableciendo diferencia en fecha==");
let newYear2024 = new Date("january 1, 2024");
let fechaActual = new Date();
let newYear2024ms = newYear2024.getTime();
let fechaActualms = fechaActualms.getTime();

let milisecDiff = newYear2024ms - fechaActualms;
let diaDiff = milisecDiff / (1000 * 60 * 60 * 24);
console.log("dias faltantes para el año nuevo: " + Math.floor (diaDiff));