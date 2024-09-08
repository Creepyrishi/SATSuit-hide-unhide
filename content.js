// Function to inject the toggle button into all 'question-content' elements
function injectButtons() {
  const questionContents = document.querySelectorAll('.question-content');
  questionContents.forEach((questionContent) => {
    // Check if the button is already injected into this element
    if (!questionContent.querySelector('#toggleButton')) {
      // Create the toggle button
      const toggleButton = document.createElement('button');
      toggleButton.innerText = 'Hide/Unhide Answer';
      toggleButton.id = 'toggleButton';

      // Style the button
      toggleButton.style.position = 'relative';  // Position relative so it stays inside the parent
      toggleButton.style.marginTop = '10px';     // Add some space from the content
      toggleButton.style.zIndex = '1000';

      // Append the button inside the 'question-content' element
      questionContent.appendChild(toggleButton);

      // Add click event listener to hide/unhide elements with 'answer-content' class
      toggleButton.addEventListener('click', function() {
        const elements = document.getElementsByClassName('answer-content');
        Array.from(elements).forEach((el) => {
          if (el.style.display === 'none') {
            el.style.display = 'block';
          } else {
            el.style.display = 'none';
          }
        });
      });
    }
  });
}

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(() => {
  injectButtons();
});

// Start observing the document for changes
observer.observe(document.body, { childList: true, subtree: true });

// Inject buttons immediately if they are present on initial load
injectButtons();
