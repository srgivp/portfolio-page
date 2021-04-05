let sizeAdjuster = () => {
  let maxHeight = document.getElementById("projectsContainer").offsetHeight;
  console.log("maxHeight ", maxHeight);
  let titleHeight = document.getElementById("projectsTitle").offsetHeight;
  let projectsHeight = document.getElementById("projects").offsetHeight;
  let contactsHeight = document.getElementById("contacts").offsetHeight;
  let wholeHeight = titleHeight + projectsHeight + contactsHeight;
  console.log("wholeHeight ", wholeHeight);
  let pictureSizes = ["32%", "30%", "28%", "26%", "23%", "21%", "17%"];
  let i = 0;
  let thumbnails = document.querySelectorAll(".project-tile");
  console.log("thumbnails ", thumbnails);
  do {
    if (i < pictureSizes.length) {
      let thumbnails = document.querySelectorAll(".project-tile");
      for (let j = 0; j < thumbnails.length; j++) {
        thumbnails[j].style.width = pictureSizes[i];
      }
      titleHeight = document.getElementById("projectsTitle").offsetHeight;
      projectsHeight = document.getElementById("projects").offsetHeight;
      contactsHeight = document.getElementById("contacts").offsetHeight;
      wholeHeight = titleHeight + projectsHeight + contactsHeight;
      i = i + 1;
    }
  } while (wholeHeight > maxHeight);
};

let fontSizeAdjuster = () => {
  let figcaptions = document.querySelectorAll("figcaption");
  let fontSizes = ["90%", "80%", "70%", "60%", "50%", "40%", "30%"];
  let maxHeight = figcaptions[1].offsetHeight;
  for (j = 0; j < figcaptions.length; j++) {
    let figcaptionHeight = figcaptions[j].offsetHeight;
    let i = 0;
    do {
      if (i < fontSizes.length) {
        figcaptions[j].style.fontSize = fontSizes[i];
        figcaptionHeight = figcaptions[j].offsetHeight;
        i = i + 1;
      }
    } while (figcaptionHeight > maxHeight);
    figcaptions[j].style.height = `${maxHeight}px`;
  }
};
