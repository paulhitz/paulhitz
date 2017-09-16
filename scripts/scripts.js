
/**
 * Display a random photo.
 */
function displayRandomPhoto() {
  //Pick a random photo.
  var numPhotos = 46;
  var random = Math.floor((Math.random() * numPhotos) + 1);

  //Display the photo.
  var photoElement = document.getElementById('photo');
  if (photoElement !== null) {
    photoElement.src = "images/photos/" + random + ".jpg";
    photoElement.style.display = 'block';
  }  
}
