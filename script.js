const galleryContainer = document.querySelector('.gallery-container');

galleryContainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    galleryContainer.scrollLeft += event.deltaY; 
});

const images = document.querySelectorAll('.gallery img');
const title = document.querySelector('.title');
const description = document.querySelector('.description');

const moda = "moda<br>2020-2024"
const modaDescription = "produced for MODA Magazine at the University of Chicago"
const sanxia = "sanxia (three gorges) <br>2024"
const sanxiaDescription = "In 2003, the Three Gorges Dam was erected, consequently displacing 1.4 million residents, " + 
                          "including my grandmother's entire family. 21 years later, I returned with the " +
                          "simple intention of bettering my photographic language and inadvertently discovered a " +
                          "history tied both to my bloodline and to the whole of China.<br></br>" +
                          "For the five weeks we spent in various small towns and villages, I sometimes spoke, "+
                          "periodically raised my camera, and mostly just listened. The people of Sanxia live at "+
                          "the cusp of old and new, between the tension of nature and industry. They are tenacious "+
                          "and resolute. Amidst all the movement &mdash; the Yangtze, society, modernization &mdash; they forged a path to stay."

const imageTexts = [
  { title: sanxia, description: sanxiaDescription},
  { title: sanxia, description: sanxiaDescription},
  { title: sanxia, description: sanxiaDescription},
  { title: sanxia, description: sanxiaDescription},
  { title: sanxia, description: sanxiaDescription},
  { title: sanxia, description: sanxiaDescription},
  { title: sanxia, description: sanxiaDescription},
  { title: sanxia, description: sanxiaDescription},
  { title: "play<br>2024", description: "(or running) produced for MODA Magazine at the University of Chicago" },
  { title: "play<br>2024", description: "(or running) produced for MODA Magazine at the University of Chicago" },
  { title: "play<br>2024", description: "(or running) produced for MODA Magazine at the University of Chicago" },
  { title: "shadow and the self<br>2024", description: "produced for RBIM at the University of Chicago" },
  { title: "mad professor<br>2023", description: modaDescription },
  { title: "mad professor<br>2023", description: modaDescription },
  { title: "mad professor<br>2023", description: modaDescription },
  { title: "SASA<br>2023", description: modaDescription },
  { title: "SASA<br>2023", description: modaDescription },
  { title: "-<br>2023", description: modaDescription },
  { title: "-<br>2022", description: modaDescription },
  { title: "-<br>2022", description: modaDescription },
  { title: "dance<br>2022", description: modaDescription },
  { title: "dance<br>2022", description: modaDescription },
  { title: "dinner<br>2021", description: modaDescription },
  { title: "dinner<br>2021", description: modaDescription },
  { title: "rebirth<br>2021", description: modaDescription },
  { title: "rebirth<br>2021", description: modaDescription },
  { title: "-<br>2020", description: modaDescription },
  { title: "-<br>2020", description: modaDescription }
];

var lastIndex = 0;

galleryContainer.addEventListener("scroll", function () {
  let closestImageIndex = 0;
  const viewportCenterX = window.innerWidth / 2;

  images.forEach((image, index) => {
    const rect = image.getBoundingClientRect();
    var imageRight = rect.right;
    var imageLeft = rect.left;
    if (imageLeft < viewportCenterX && imageRight >= viewportCenterX) {
      closestImageIndex = index;
      lastIndex = index;
      console.log(lastIndex);
    } else {
      closestImageIndex = lastIndex;

    }
  });

  const currentImageText = imageTexts[closestImageIndex];
  title.innerHTML = currentImageText.title;
  description.innerHTML = currentImageText.description;
});
