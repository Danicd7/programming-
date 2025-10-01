// Set current year
const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = year;

// Set last modified date
const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Update: ${lastModified}`;


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const temple = document.querySelector('.temple-span')

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.textContent = hamburger.textContent === '✖' ? '☰' : '✖';
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 640) {
    navMenu.classList.remove('show');
    hamburger.textContent = '☰';
    temple.classList.toggle('hidden');
  }
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/nigeria_temple.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti_temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Madrid Spain Temple",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19-21",
    area: 45800,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Lisbon Portugal Temple",
    location: "Lisbon, Portugal",
    dedicated: "2019, September, 15",
    area: 23730,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6315-main.jpg"
  },
  {
    templeName: "Durban South Africa Temple",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg"
  },
  // Add more temple objects here...
];

createTempleCard(temples);

const nonUtahLink = document.querySelector('#nonUtah');

nonUtahLink.addEventListener('click', () => {
  // Clear previous cards
  document.querySelector("#album").innerHTML = "";
  createTempleCard(temples.filter(temple => !temple.location.includes('Utah')));

});

document.querySelector('a[title="Old"]').addEventListener('click', () => {
  document.querySelector("#album").innerHTML = "";
  createTempleCard(temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  }));
});

document.querySelector('a[title="New"]').addEventListener('click', () => {
  document.querySelector("#album").innerHTML = "";
  createTempleCard(temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year >= 2000;
  }));
});

document.querySelector('a[title="Large"]').addEventListener('click', () => {
  document.querySelector("#album").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.area > 90000));
});

document.querySelector('a[title="Small"]').addEventListener('click', () => {
  document.querySelector("#album").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.area < 10000));
});

document.querySelector('a[title="Home"]').addEventListener('click', () => {
  document.querySelector("#album").innerHTML = "";
  createTempleCard(temples); // Show all
});



function createTempleCard(filteredTemples) {
  filteredTemples.forEach((temple, index) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.inneHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.inneHTML = `<span class="label">Dedication:</span> ${temple.dedication}`;
    area.inneHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("width", "600");
    img.setAttribute("height", "400");

    if (index !== 0) {
      img.setAttribute("loading", "lazy");
    }

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector("#album").appendChild(card);
  });
}

