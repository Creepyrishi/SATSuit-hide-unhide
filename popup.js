document.getElementById("toggleButton").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: toggleAnswerContent
      });
    });
  });
  
  function toggleAnswerContent() {
    const elements = document.getElementsByClassName('answer-content');
    Array.from(elements).forEach((el) => {
      if (el.style.display === 'none') {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
  }
  