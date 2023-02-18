let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "lorem ipsp dolor sit amet consectetur adipisicing elit. velit porro et veniam except",
      image: "images/slider 2.png"
    },
    {
      name: "loki",
      des:
        "lorem ipsp dolor sit amet consectetur adipisicing elit. velit porro et veniam except",
      image: "images/slider 1.png"
    },
    {
      name: "wanda vision",
      des:
        "lorem ipsp dolor sit amet consectetur adipisicing elit. velit porro et veniam except",
      image: "images/slider 3.png"
    },
    {
      name: "raya and the last dragan",
      des:
        "lorem ipsp dolor sit amet consectetur adipisicing elit. velit porro et veniam except",
      image: "images/slider 4.png"
    },
    {
      name: "luca",
      des:
        "lorem ipsp dolor sit amet consectetur adipisicing elit. velit porro et veniam except",
      image: "images/slider 5.png"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; //track the current slide
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    //create Dom Elemnets
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    //attaching all the elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(Document.createTextNode(movies[slideIndex].name));
    p.appendChild(Document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    content.appendChild(imgElement);
    carousel.appendChild(slide);
  
    //setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    //setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.classname = "movie-des";
  
    sliders.push(slide);
  
    if (slide.length) {
      sliders[0].style.marginLeft = `clac(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //video card
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.childeren[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.childeren[1];
      video.pause();
    });
  });
  
  //card slider
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });