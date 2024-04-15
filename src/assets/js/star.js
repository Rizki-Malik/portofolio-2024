document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mousemove', function(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const stars = document.querySelectorAll("#stars, #stars2");
  
      stars.forEach(function(star) {
        const starRect = star.getBoundingClientRect();
        const starX = starRect.left + starRect.width / 2;
        const starY = starRect.top + starRect.height / 2;
        const deltaX = mouseX - starX;
        const deltaY = mouseY - starY;
  
        const divisor = 100;
        star.style.setProperty("--mouse-x", (deltaX / divisor) + "px");
        star.style.setProperty("--mouse-y", (deltaY / divisor) + "px");
      });
    });
});