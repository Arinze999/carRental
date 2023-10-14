// navbar
const navBar = document.getElementById("d-navigate");
const navBtn = document.getElementById("nav-open");

// rental fleet elements
const rough = document.getElementById("car-list").getElementsByTagName("li");
const carList = Array.from(rough);
const roughTd = document
  .getElementById("car-details-table")
  .getElementsByTagName("td");
const carDetails = Array.from(roughTd);
const toPay = document.getElementById("price");
const carImage = document.getElementById("car-select");

// animations
const formSlide = document.querySelector(".book-ride");

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.right >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  if (isElementInViewport(formSlide)) {
      formSlide.classList.add('visible');
      window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll);





// car details array of objects
const carListDetails = [
  {
    rent: "#40000 ",
    carName: "Mercedes Benz GLK",
    model: "Benz GLK",
    mark: "Mercedes",
    year: "2006",
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
    src: "assets/img/car-fleet-images/mercedes-benz-GLK-2.png",
  },
  {
    rent: "#21500 ",
    carName: "VW Passat",
    model: "Passat",
    mark: "Volkswagen",
    year: "2008",
    doors: "4/5",
    ac: "Yes",
    transmission: "Manual",
    fuel: "Gasoline",
    src: "assets/img/car-fleet-images/VW-passat.png",
  },
  {
    rent: "#20000 ",
    carName: "Toyota Camry",
    model: "Camry",
    mark: "Toyota",
    year: "2010",
    doors: "4/5",
    ac: "Yes",
    transmission: "Dual Support",
    fuel: "Hybrid",
    src: "assets/img/car-fleet-images/toyota2-removebg-preview.png",
  },
  {
    rent: "#35000 ",
    carName: "Lexus ES",
    model: "ES 350",
    mark: "Lexus",
    year: "2020",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    src: "assets/img/car-fleet-images/lexus.png",
  },
  {
    rent: "#27400 ",
    carName: "Honda CR-V",
    model: "CR-V",
    mark: "Honda",
    year: "2016",
    doors: "4/5",
    ac: "Yes",
    transmission: "Dual Support",
    fuel: "Diesel",
    src: "assets/img/car-fleet-images/honda.png",
  },
  {
    rent: "#23000 ",
    carName: "Audi A-6",
    model: "A-6",
    mark: "Audi",
    year: "2016",
    doors: "4/5",
    ac: "Yes",
    transmission: "Automatic",
    fuel: "Hybrid",
    src: "assets/img/car-fleet-images/audi.png",
  },
];

// function for clicking on each carList item
carList.map((each) => {
  each.addEventListener("click", () => {
    toPay.innerText = carListDetails[carList.indexOf(each)].rent;
    carImage.setAttribute("src", carListDetails[carList.indexOf(each)].src);
    carDetails[0].innerText = carListDetails[carList.indexOf(each)].model;
    carDetails[1].innerText = carListDetails[carList.indexOf(each)].mark;
    carDetails[2].innerText = carListDetails[carList.indexOf(each)].year;
    carDetails[3].innerText = carListDetails[carList.indexOf(each)].doors;
    carDetails[4].innerText = carListDetails[carList.indexOf(each)].ac;
    carDetails[5].innerText =
      carListDetails[carList.indexOf(each)].transmission;
    carDetails[6].innerText = carListDetails[carList.indexOf(each)].fuel;
  });
});

//navbar responsive function
navBtn.addEventListener("click", () => {
  navBar.classList.toggle("show-nav");
});
