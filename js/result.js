function displayScore() {
  const score = sessionStorage.getItem('score');
  if (score !== null && !isNaN(score)) {
    const totalScore = parseInt(score);

    // Define score ranges and corresponding labels with colors based on score
    const scoreRanges = [
      { min: 0, max: 20, label: 'Seek help from a mental health professional', color: 'rgb(0, 0, 0)' },    // Black
      { min: 21, max: 21, label: 'Whats 9 + 10?', color: 'rgb(0, 0, 0)' },    // Black
      { min: 22, max: 42, label: 'Seek help from a mental health professional', color: 'rgb(0, 0, 0)' },    // Black
      { min: 43, max: 68, label: 'You are FUCKED UP', color: 'rgb(127, 11, 11)' },  // Dark Red
      { min: 69, max: 69, label: 'NICE', color: 'rgb(127, 11, 11)' },  // Dark Red
      { min: 70, max: 84, label: 'You are FUCKED UP', color: 'rgb(127, 11, 11)' },  // Dark Red
      { min: 85, max: 126, label: 'You are fucked up', color: 'rgb(218, 34, 34)' }, // Red
      { min: 127, max: 168, label: 'You are a bit fucked up', color: 'rgb(155, 178, 10)' }, // Dark Yellow
      { min: 169, max: 210, label: 'Getting on the fucked-up side', color: 'rgb(277, 233, 40)' },  // Yellow
      { min: 211, max: 252, label: 'You are normal', color: 'rgb(172, 106, 20)' }, // Dark Orange
      { min: 253, max: 294, label: 'We are getting there', color: 'rgb(242, 164, 62)' },  // Orange 
      { min: 295, max: 336, label: 'You are boring as fuck', color: 'rgb(19, 105, 19)' },    // Dark Green
      { min: 337, max: 378, label: 'Have you even been outside?', color: 'rgb(61, 196, 61)' },    // Green
      { min: 379, max: 419, label: 'Did you even do the test?', color: 'rgb(48, 242, 48)' },   // Bright Green
      { min: 420, max: 420, label: 'Nice', color: 'rgb(48, 242, 48)' }
    ];
    

    // Find the appropriate label and color based on the score
    let userClass = 'Unknown'; 
    let color = '';
    for (const range of scoreRanges) {
      if (totalScore >= range.min && totalScore <= range.max) {
        userClass = range.label;
        color = range.color;
        break;
      }
    }

    // Set the color of the score and class label
    const scoreElement = document.getElementById('score');
    const scoreClassElement = document.getElementById('scoreClass');
    scoreElement.style.color = color;
    scoreElement.textContent = score;
    scoreClassElement.textContent = `${userClass}`;
  } else {
    // Handle the case where the score is not valid or doesn't exist in session storage
    console.error('Invalid or missing score in session storage.');
  }
}

// Call the function when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  displayScore();
});
