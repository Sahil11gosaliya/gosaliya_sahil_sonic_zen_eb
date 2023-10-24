(() => {
  console.log("IIFE Fired");
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Holder",
      text: "This is the holder for the earbuds. It provides a secure and convenient fitting solution.",
      image: "images/holder.jpeg",
    },
    {
      title: "Volume Control",
      text: "Adjust the volume with this control. Enjoy a customized audio experience with ease.",
      image: "images/volume.jpg",
    },
    {
      title: "Earpiece",
      text: "The earpiece delivers high-quality sound. Experience crystal clear soft audio like never before.",
      image: "images/earpiece.jpg",
    },
    {
      title: "Blinker",
      text: "The blinker adds a stylish touch. It also serves as a notification indicator.",
      image: "images/blinker.jpg",
    },
    {
      title: "Charging Point",
      text: "Charge your earbuds with this port. Stay connected throughout the day with ease.",
      image: "images/charging_port.png",
    },
    {
      title: "Brand",
      text: "SonicZen - Experience the future of audio. Immerse yourself in a world of premium sound quality.",
      image: "images/brand.png",
    },
    {
      title: "Head Piece",
      text: "The head piece ensures a comfortable fit. Enjoy extended listening sessions without discomfort.",
      image: "images/head_piece.jpg",
    },
  ];

  //functions
  function modelLoaded() {
    //console.log(hotspots);
    hotspots.forEach((hotspot) => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);
      let title = document.createElement("h2");
      title.textContent = infoBox.title;
      let text = document.createElement("p");
      text.textContent = infoBox.text;
      let image = document.createElement("img");
      image.src = infoBox.image;

      image.style.width = "300px";
      image.style.height = "300px";

      selected.appendChild(title);
      selected.appendChild(text);
      selected.appendChild(image);
    });
  }
  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 0, { autoAlpha: 0 });
  }

  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("click", showInfo);
    hotspot.addEventListener("mousemove", hideInfo);
  });
})();

