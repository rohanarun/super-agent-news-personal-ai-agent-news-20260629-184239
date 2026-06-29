(function () {
  // Guarded GSAP usage
  function initAnimations() {
    if (!window.gsap) return;
    gsap.from('.tile', {
      opacity: 0,
      y: 24,
      stagger: 0.08,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.bento',
        start: 'top 80%'
      }
    });
  }

  // Load GSAP from CDN with fallback safety
  var script = document.createElement('script');
  script.src = 'https://unpkg.com/gsap@3/dist/gsap.min.js';
  script.onload = function () {
    var st = document.createElement('script');
    st.src = 'https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js';
    st.onload = function () {
      gsap.registerPlugin(ScrollTrigger);
      initAnimations();
    };
    document.head.appendChild(st);
  };
  script.onerror = function () {
    // No animation, site still works
  };
  document.head.appendChild(script);
})();