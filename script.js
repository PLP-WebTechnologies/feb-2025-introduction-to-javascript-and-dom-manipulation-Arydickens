// Track state for toggle
let isTextChanged = false;
let isColorChanged = false;

// Toggle text content
function changeText() {
  const textElement = document.getElementById("intro-text");
  if (isTextChanged) {
    textElement.textContent = "This is a paragraph to be updated dynamically.";
  } else {
    textElement.textContent = "Text has been updated dynamically!";
  }
  isTextChanged = !isTextChanged;
}

// Toggle CSS style
function changeColor() {
  const box = document.getElementById("color-box");
  if (isColorChanged) {
    box.style.color = "";
    box.style.backgroundColor = "";
    box.style.padding = "";
    box.style.borderRadius = "";
  } else {
    box.style.color = "white";
    box.style.backgroundColor = "#007BFF";
    box.style.padding = "10px";
    box.style.borderRadius = "8px";
  }
  isColorChanged = !isColorChanged;
}

// Add/Remove element
function toggleElement() {
  const container = document.getElementById("toggle-container");
  const existing = document.getElementById("dynamic-element");

  if (existing) {
    container.removeChild(existing);
  } else {
    const newElem = document.createElement("p");
    newElem.id = "dynamic-element";
    newElem.textContent = "Hello! I'm a dynamically added paragraph.";
    container.appendChild(newElem);
  }
}
