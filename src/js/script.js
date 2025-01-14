document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".es-cross__circle");
  const infoDiv = document.getElementById("info");
  const link = document.getElementById("link");

  // Funkcja do zmiany widoczności i aktualizacji danych
  const updateContent = (image) => {
    // Reset opacity dla wszystkich obrazków
    images.forEach(img => img.style.opacity = "0.5");

    // Ustawienie opacity dla wybranego obrazka
    image.style.opacity = "1";

    // Aktualizacja treści w div i linku
    const info = image.getAttribute("data-info");
    infoDiv.textContent = info;

    const href = image.getAttribute("data-link");
    link.href = href;
  };

  // Domyślnie "kliknięcie" pierwszego obrazka
  if (images.length > 0) {
    updateContent(images[0]);
  }

  // Nasłuchiwanie kliknięć na obrazki
  images.forEach(image => {
    image.addEventListener("click", () => updateContent(image));
  });
});