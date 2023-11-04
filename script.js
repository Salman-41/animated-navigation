// Get the menu bars and overlay elements
const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");

// Get all navigation items
const navItems = Array.from({ length: 5 }, (_, i) =>
  document.getElementById(`nav-${i + 1}`)
);

// Define the slide-in and slide-out classes for each navigation item
const slideInClasses = Array.from({ length: 5 }, (_, i) => `slide-in-${i + 1}`);
const slideOutClasses = Array.from(
  { length: 5 },
  (_, i) => `slide-out-${i + 1}`
);

function toggleNav() {
  // Toggle the change class on the menu bars
  menuBars.classList.toggle("change");

  // Toggle the overlay-active class on the overlay
  overlay.classList.toggle("overlay-active");

  // Check if the overlay is active
  const isOverlayActive = overlay.classList.contains("overlay-active");

  // Remove the slide-left or slide-right class from the overlay, depending on whether it's active
  overlay.classList.remove(
    isOverlayActive ? "overlay-slide-left" : "overlay-slide-right"
  );

  // Add the slide-right or slide-left class to the overlay, depending on whether it's active
  overlay.classList.add(
    isOverlayActive ? "overlay-slide-right" : "overlay-slide-left"
  );

  // For each navigation item
  navItems.forEach((navItem, i) => {
    // Remove the slide-out or slide-in class, depending on whether the overlay is active
    navItem.classList.remove(
      isOverlayActive ? slideOutClasses[i] : slideInClasses[i]
    );

    // Add the slide-in or slide-out class, depending on whether the overlay is active
    navItem.classList.add(
      isOverlayActive ? slideInClasses[i] : slideOutClasses[i]
    );
  });
}

// Add a click event listener to the menu bars that toggles the navigation
menuBars.addEventListener("click", toggleNav);

// Add a click event listener to each navigation item that toggles the navigation
navItems.forEach((navItem) => navItem.addEventListener("click", toggleNav));
