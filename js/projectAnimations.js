document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll('.project-card');
  
  const observerOptions = {
    threshold: 0.2 // Adjust as needed
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  projectCards.forEach(card => {
    observer.observe(card);
  });
}); 