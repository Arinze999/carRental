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
const loadingAnimation = document.querySelector(".loader");

carImage.addEventListener("load", () => {
  loadingAnimation.style.display = "none";
  carImage.style.display = "block";
});

// animations
const formSlide = document.querySelector(".book-ride");
const fadeInLeft = document.querySelectorAll(".fade-in-left");
const fadeInRight = document.querySelectorAll(".fade-in-right");
const fadeInBottom = document.querySelectorAll(".fade-in-bottom");

// faq
const items = document.querySelectorAll(".item-faq");

// form
const carType = document.getElementById("car-type");

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
navBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  navBtn.classList.toggle("rotate-nav");
  navBar.classList.toggle("show-nav");
});

// opening book animation function
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.right >= 0 &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  if (isElementInViewport(formSlide)) {
    formSlide.classList.add("open-book");
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);

// fade in fron left animation function
function fadeInLeftElements() {
  fadeInLeft.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isAnimated = element.getAttribute("data-animated") === "true";

    if (!isAnimated && elementTop < window.innerHeight && elementBottom >= 0) {
      element.style.opacity = 1;
      element.style.transform = "translateX(0)";
      element.setAttribute("data-animated", "true");
    } else if (
      isAnimated &&
      (elementTop >= window.innerHeight || elementBottom < 0)
    ) {
      element.style.opacity = 0;
      element.style.transform = "translateX(-100%)";
      element.setAttribute("data-animated", "false");
    }
  });
}

fadeInLeftElements();
window.addEventListener("scroll", fadeInLeftElements);

// fade in from right animation function
function fadeInRightElements() {
  fadeInRight.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isAnimated = element.getAttribute("data-animated") === "true";

    if (!isAnimated && elementTop < window.innerHeight) {
      element.style.opacity = 1;
      element.style.transform = "translateX(0)";
      element.setAttribute("data-animated", "true");
    } else if (
      isAnimated &&
      (elementTop >= window.innerHeight || elementBottom < 0)
    ) {
      element.style.opacity = 0;
      element.style.transform = "translateX(100%)";
      element.setAttribute("data-animated", "false");
    }
  });
}

fadeInRightElements();
window.addEventListener("scroll", fadeInRightElements);

// fade in from right animation function
function fadeInBottomElements() {
  fadeInBottom.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const isAnimated = element.getAttribute("data-animated") === "true";

    if (!isAnimated && elementTop < window.innerHeight) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
      element.setAttribute("data-animated", "true");
    } else if (
      isAnimated &&
      (elementTop >= window.innerHeight || elementBottom < 0)
    ) {
      element.style.opacity = 0;
      element.style.transform = "translatey(30%)";
      element.setAttribute("data-animated", "false");
    }
  });
}

fadeInBottomElements();
window.addEventListener("scroll", fadeInBottomElements);

// function to show answers to FAQ
items.forEach((item) => {
  item.addEventListener("click", () => {
    const description = item.querySelector(".answer");
    const isOpen = description.style.display === "block";

    // Hide all descriptions
    items.forEach((i) => {
      const desc = i.querySelector(".answer");
      desc.style.display = "none";
    });

    if (!isOpen) {
      description.style.display = "block";
    }
  });
});

// function for form cartype options
var carOptions = [
  carListDetails[0].carName,
  carListDetails[1].carName,
  carListDetails[2].carName,
  carListDetails[3].carName,
  carListDetails[4].carName,
  carListDetails[5].carName,
];

for (var i = 0; i < carOptions.length; i++) {
  var options = document.createElement("option");
  options.text = carOptions[i];
  options.value = i;
  carType.appendChild(options);
}

// function to make navbar close easier
window.addEventListener("click", (event) => {
  if (event.target !== navBar) {
    if (navBar.classList.contains("show-nav")) {
      navBtn.classList.remove("rotate-nav");
      navBar.classList.remove("show-nav");
    }
  }
});
