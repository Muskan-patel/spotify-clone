const musicScroll = document.getElementById("musicScroll");

function scrollLeft() {
  musicScroll.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
  musicScroll.scrollBy({ left: 300, behavior: 'smooth' });
}