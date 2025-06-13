document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('foodQuiz');
  const progressFill = document.getElementById('progressFill');
  const questions = document.querySelectorAll('.quiz-question-container');
  const totalQuestions = questions.length;
  const thankYouSection = document.getElementById('thankYouSection');

  // Update progress bar based on currently answered questions
  function updateProgress() {
    let currentAnswered = 0;
    questions.forEach(questionContainer => {
      const radioInputs = questionContainer.querySelectorAll('input[type="radio"]');
      if (Array.from(radioInputs).some(input => input.checked)) {
        currentAnswered++;
      }
    });
    const progress = (currentAnswered / totalQuestions) * 100;
    progressFill.style.width = `${progress}%`;
  }

  // Add event listeners to all radio inputs to update progress on change
  const radioInputs = document.querySelectorAll('input[type="radio"]');
  radioInputs.forEach(input => {
    input.addEventListener('change', updateProgress);
  });

  // Initial progress update on page load
  updateProgress();

  // Form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Recalculate answered questions right before submission
    let currentAnswered = 0;
    questions.forEach(questionContainer => {
      const radioInputs = questionContainer.querySelectorAll('input[type="radio"]');
      if (Array.from(radioInputs).some(input => input.checked)) {
        currentAnswered++;
      }
    });

    if (currentAnswered !== totalQuestions) {
      alert('Please answer all questions before submitting.');
      return;
    }

    // Get form data
    const formData = new FormData(form);
    const answers = Object.fromEntries(formData);

    // Store answers in localStorage
    localStorage.setItem('foodPreferences', JSON.stringify(answers));

    // Hide the quiz form and show the thank you message with loading animation
    form.classList.add('hidden');
    thankYouSection.classList.remove('hidden');

    // Redirect to home page after 3 seconds
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 3000);
  });
}); 