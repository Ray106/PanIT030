// ============================================================
//  IT030 — Final Project Starter
//  script.js
//
//  This file powers the Interest Filter on interests.html.
//
//  What this feature does when finished:
//    - Stores your projects/interests as structured data
//    - Renders them as cards on the page when it loads
//    - When the user picks a category from the dropdown,
//      shows only the items that match
//
//  HOW TO WORK THROUGH THIS FILE:
//    1. Read every comment block before touching any code
//    2. Complete the TODOs from top to bottom — do not skip ahead
//    3. After each TODO: save → refresh browser → check the result
//    4. If something breaks, open DevTools (F12) → Console tab
//       and read the red error message before changing anything
//
//  Concepts you are using:
//    const        — a variable whose value does not change
//    array        — a list of items [ ]
//    object       — a item with named properties { key: value }
//    function     — a named block of code you can call by name
//    switch       — a cleaner way to handle multiple specific cases
//    for loop     — repeating code for each item in a list
//    innerHTML    — writing HTML content into a page element
//    getElementById — finding a page element by its id
// ============================================================


// ============================================================
//  PART 1 — YOUR DATA
// ============================================================

const items = [
  {
    name: "Animation Video Editing",
    category: "Video Editing",
    description: "I enjoy editing short animation videos because it combines timing, music, visual rhythm, and storytelling."
  },
  {
    name: "Color and Mood",
    category: "Video Editing",
    description: "I like adjusting color, contrast, and pacing to make a video feel more polished and expressive."
  },
  {
    name: "Cat Photography",
    category: "Cat",
    description: "I like taking photos of my cat because its expressions and movements feel natural and unpredictable."
  },
  {
    name: "Cat Care",
    category: "Cat",
    description: "Taking care of a cat helps me notice small details, daily routines, and behavior changes."
  },
  {
    name: "MotoGP Racing",
    category: "Motorcycle",
    description: "I am interested in MotoGP because it combines racing strategy, rider skill, speed, and motorcycle technology."
  },
  {
    name: "Riding Culture",
    category: "Motorcycle",
    description: "Motorcycle culture interests me because it connects freedom, personal identity, travel, and technical skill."
  },
];


// ============================================================
//  PART 2 — THE RENDER FUNCTION
// ============================================================

function renderItems(list) { // This function receives a list of items and displays them on the webpage.

  const container = document.getElementById("items-container"); // Finds the HTML element where the item cards will appear.

  container.innerHTML = ""; // Clears the old cards before showing the new filtered cards.

  for (let i = 0; i < list.length; i++) { // Loops through every item in the list.

    const card = document.createElement("div"); // Creates a new div element for one item card.
    card.className = "item-card"; // Adds the CSS class item-card so the card can be styled.

    card.innerHTML = // Writes HTML content inside the card.
      "<h3>" + list[i].name + "</h3>" + // Shows the item name as the card title.
      "<p>"  + list[i].description + "</p>" + // Shows the item description as paragraph text.
      "<span class='item-tag'>" + list[i].category + "</span>"; // Shows the item category as a small tag.

    container.appendChild(card); // Adds the finished card into the container on the page.
  }

  document.getElementById("result-count").textContent = // Finds the result count paragraph and changes its text.
    list.length + " items shown"; // Shows how many items are currently displayed.
}


// ============================================================
//  PART 3 — THE FILTER FUNCTION
// ============================================================

function filterItems(category) { // This function receives the category selected by the user.

  switch (category) { // Checks which category value was selected.

    case "": // Empty value means the user selected All.
      renderItems(items); // Shows every item in the full items array.
      break; // Stops this case from running into the next case.

    case "Video Editing": // First category case.
      const filtered1 = []; // Creates an empty array to store matching items.
      for (let i = 0; i < items.length; i++) { // Loops through every item in the full items array.
        if (items[i].category === "Video Editing") { // Checks whether the current item's category matches this case.
          filtered1.push(items[i]); // Adds the matching item into the filtered array.
        }
      }
      renderItems(filtered1); // Displays only the items in the filtered array.
      break; // Stops this case.

    case "Cat": // Second category case.
      const filtered2 = []; // Creates an empty array to store matching items.
      for (let i = 0; i < items.length; i++) { // Loops through every item in the full items array.
        if (items[i].category === "Cat") { // Checks whether the current item's category matches this case.
          filtered2.push(items[i]); // Adds the matching item into the filtered array.
        }
      }
      renderItems(filtered2); // Displays only the items in the filtered array.
      break; // Stops this case.

    case "Motorcycle": // Third category case.
      const filtered3 = []; // Creates an empty array to store matching items.
      for (let i = 0; i < items.length; i++) { // Loops through every item in the full items array.
        if (items[i].category === "Motorcycle") { // Checks whether the current item's category matches this case.
          filtered3.push(items[i]); // Adds the matching item into the filtered array.
        }
      }
      renderItems(filtered3); // Displays only the items in the filtered array.
      break; // Stops this case.

    default: // Runs if the selected value does not match any case above.
      renderItems(items); // Shows the full list as a safe fallback.
      break; // Stops the default case.
  }
}


// ============================================================
//  PART 4 — RUN ON LOAD
// ============================================================

filterItems(""); // Runs the filter once when the page loads so All items appear immediately.
