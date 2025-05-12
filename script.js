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
const sanxia = "sanxia<br>2024"
const sanxiaDescription = "In 2003, the Three Gorges Dam was constructed, " +
                          "displacing over one million residents. Included " +
                          "in those impacted was my grandmother’s entire family. " +
                          "My grandmother grew up in Old Fengdu City, now hosting " +
                          "fishermen during low-tide seasons and entirely submerged the rest of the year. " +
                          '\nFor 5 weeks, I traveled across this region, attempting to 发现三峡 ' +
                          '(“Discover the Three Gorges” in a far less poetic translation). ' +
                          'This period of time turned into a meditation on language. ' +
                          'I communicated in broken Chinese, composed photographs with elementary grammar, ' +
                          'and rekindled familial ties previously unknown to me across our differing nationalities.'
                          
const gradDescription = "During the week immediately following graduation, " +
                        "I asked my friends to show me their favorite " +
                        "(or most frequented) spaces around Hyde Park."

const imageTexts = [
  { title: sanxia, description: sanxiaDescription},
  { title: sanxia, description: sanxiaDescription},
  { title: sanxia, description: sanxiaDescription},
  { title: sanxia, description: sanxiaDescription},
  { title: sanxia, description: sanxiaDescription},
  { title: sanxia, description: sanxiaDescription},
  { title: sanxia, description: sanxiaDescription},
  { title: sanxia, description: sanxiaDescription},
  { title: "-<br>2024", description: gradDescription},
  { title: "-<br>2024", description: gradDescription},
  { title: "-<br>2024", description: gradDescription},
  { title: "-<br>2024", description: gradDescription},
  { title: "-<br>2024", description: gradDescription},
  { title: "play<br>2024", description: modaDescription },
  { title: "play<br>2024", description: modaDescription },
  { title: "play<br>2024", description: modaDescription },
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
  description.textContent = currentImageText.description;
});
