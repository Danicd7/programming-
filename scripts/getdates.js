
const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = year;


const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Update: ${lastModified}`;

