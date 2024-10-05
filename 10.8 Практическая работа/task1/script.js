const thumbnails = document.querySelectorAll('.thumbnail');
const fullSizeImage = document.getElementById('mainImage');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    fullSizeImage.src = this.src;
  });
});
