window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  // Fade out loader
  loader.style.opacity = 0;

  // Wait for transition to finish
  setTimeout(() => {
    loader.style.display = 'none';
    content.style.display = 'block';
  }, 500);
});


