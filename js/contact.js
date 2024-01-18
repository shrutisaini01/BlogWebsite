
//function to submit details enetered
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
  const isConfirmed = confirm('Do you want to submit the details?');
  if (isConfirmed) {
    simulateServerSubmission(formData);
  }
});

function simulateServerSubmission(formData) {
  console.log('Simulating server submission:', formData);

  const confirmationDiv = document.querySelector('.confirmation');
  confirmationDiv.style.display = 'block';

  // Display the confirmation message for a few seconds
  setTimeout(() => {
    confirmationDiv.style.display = 'none';
  }, 4000);

  // Clear the form fields after a while
  setTimeout(() => {
    document.getElementById('contactForm').reset();
  }, 2000);
}
