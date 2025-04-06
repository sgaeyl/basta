document.getElementById('yesBtn').addEventListener('click', function() {
    showResponse(true);
  });
  
  document.getElementById('noBtn').addEventListener('click', function() {
    showResponse(false);
  });
  
  function showResponse(isOkay) {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.style.display = 'block';
    
    if (isOkay) {
      responseMessage.classList.remove('failure');
      responseMessage.classList.add('success');
      responseMessage.textContent = "Great to hear! Keep taking care of yourself 😊";
    } else {
      responseMessage.classList.remove('success');
      responseMessage.classList.add('failure');
      responseMessage.textContent = "I'm sorry to hear that... Make sure you're reaching out if you need support! 💙";
    }
  }
  