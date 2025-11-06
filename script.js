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
const gradDescription = "During the week immediately following graduation, " +
                        "I asked my friends to show me their favorite " +
                        "(or most frequented) spaces around Hyde Park."

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
  description.innerHTML = currentImageText.description;
});

// --- MOBILE GRID + MODAL LOGIC ---

const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const imageArray = Array.from(document.querySelectorAll('.gallery img'));
let currentIndex = 0;

// Open modal when an image is tapped
imageArray.forEach((img, index) => {
  img.addEventListener('click', (e) => {
    if (window.innerWidth > 768) return; // only trigger on mobile
    currentIndex = index;
    openModal();
  });
});

function openModal() {
  modal.classList.add('active');
  modalImg.src = imageArray[currentIndex].src;
}

// Navigate left/right
function showNext() {
  currentIndex = (currentIndex + 1) % imageArray.length;
  modalImg.src = imageArray[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
  modalImg.src = imageArray[currentIndex].src;
}

// Handle modal clicks
modal.addEventListener('click', (e) => {
  const modalRect = modalImg.getBoundingClientRect();

  // Click outside image (white margin)
  if (
    e.clientX < modalRect.left ||
    e.clientX > modalRect.right ||
    e.clientY < modalRect.top ||
    e.clientY > modalRect.bottom
  ) {
    modal.classList.remove('active');
    return;
  }

  // Click inside image
  const clickX = e.clientX - modalRect.left;
  const imgWidth = modalRect.width;

  if (clickX < imgWidth / 2) {
    showPrev(); // tapped left side
  } else {
    showNext(); // tapped right side
  }
});
