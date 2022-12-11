/* Adding an intersection observer API for the tools and technologies section.*/

//*selecting the target elements for our observer API
const targetElements = document.querySelectorAll(".icon");

//* constructing our intersectionObserverAPI object
const options = {
  root: null, // the root element when set to null allows the browser to use the document's viewport to watch for intersections.
  rootMargin: "0px",
  threshold: 0, // specifies the distance between the root element and the target element. 0 means as soon as a single pixel of the target element becomes visible in the document's viewport , an event needs to be triggered.
};

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__slideInLeft");
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, options);

/*
 The below code watches for changes between the root element and each target element.
It is important to note that our observe method watches a single element at a time , 
therefore we have to loop through our array of target elements.
*/
targetElements.forEach((targetElement) => {
  observer.observe(targetElement);
});

// dynamically adding an active class for each nav link.
let navlinks = document.querySelectorAll(".nav-link");
navlinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    // the body of this function will first trigger a removal of any active classes from the nav links using the below resetLinks function.
    resetLinks();
    // Then will eventually add an active class to which ever nav link that is clicked.
    navLink.classList.add("active");
  });
});

// resets the nav links to their default state.
function resetLinks() {
  navlinks.forEach((navLink) => {
    navLink.classList.remove("active");
  });
}
