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
          entry.target.classList.add(
            "animate__animated",
            "animate__slideInLeft"
          );
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
      observer.observe(targetElement);});