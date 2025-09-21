// src/scripts/heroAnimation.js
import { gsap } from "gsap";

// Exportar como función por defecto
export default function initHeroAnimation() {
  console.log("Ejecutando animación del hero");
  
  const heroElements = document.querySelectorAll('.hero-section > div > div');
  
  if (heroElements.length === 0) {
    console.warn('No se encontraron elementos para animar');
    return;
  }
  
  gsap.set(heroElements, {
    opacity: 0,
    y: 30
  });
  
  gsap.to(heroElements, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    stagger: 0.3,
    ease: "power2.out",
    delay: 0.5
  });
}