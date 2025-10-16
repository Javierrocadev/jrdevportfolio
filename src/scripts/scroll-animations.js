// scroll-animations.js
export function initScrollAnimations() {
  // Solo ejecutar en móvil
  if (window.innerWidth >= 768) return;
  
  // Cargar GSAP dinámicamente solo en móvil
  import('gsap/ScrollTrigger').then((ScrollTriggerModule) => {
    const gsap = window.gsap;
    gsap.registerPlugin(ScrollTriggerModule.ScrollTrigger);
    
    // Animación para elementos con hover-mobile-scroll
    const hoverElements = document.querySelectorAll('.hover-mobile-scroll');
    
    hoverElements.forEach((element, index) => {
      gsap.fromTo(element, 
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
    
    // Animación para elementos con scale-hover-mobile-scroll
    const scaleElements = document.querySelectorAll('.scale-hover-mobile-scroll');
    
    scaleElements.forEach((element, index) => {
      gsap.fromTo(element, 
        {
          opacity: 0,
          scale: 0.9,
          y: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}