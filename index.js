// Wait for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
    // When the DOM is fully loaded, change the text content of the paragraph
    const textParagraph = document.getElementById("text");
    textParagraph.textContent = "This is really cool!";
  });
  
  // This will log to the console before the DOM is fully loaded
  console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
  