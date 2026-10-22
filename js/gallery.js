/* Name this external file gallery.js and store it in js folder */

function upDate(previewPic) {
  /* In this function you MUST:
     1) Check with console.log that the event triggers and inspect previewPic (alt and src).
     2) Change the url for the background image of the div with the id = "image" to the source of the previewPic.
     3) Change the text of the div with the id = "image" to the alt text of the previewPic.
  */
  console.log("--> upDate event triggered!");
  console.log("previewPic alt: " + previewPic.alt);
  console.log("previewPic src: " + previewPic.src);

  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  /* In this function you MUST:
     1) Update the url for the background image of the div with the id = "image" back to the original value: url('').
     2) Update the text of the div with the id = "image" back to original text: "Hover over an image below to display here."
  */
  console.log("--> unDo event triggered!");

  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
