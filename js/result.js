const MAX_SCORE = 420;

function displayScore() {
  const score = sessionStorage.getItem('score');
  if (score !== null && !isNaN(score)) {
    const totalScore = parseInt(score);

    // Define score ranges and corresponding labels with colors based on score
    const scoreRanges = [
      { min: 0, max: 20, label: 'Seek help from a mental health professional', color: 'rgb(0, 0, 0)' },   
      { min: 21, max: 21, label: 'Whats 9 + 10?', color: 'rgb(0, 0, 0)' },    
      { min: 22, max: 42, label: 'Seek help from a mental health professional', color: 'rgb(0, 0, 0)' },    
      { min: 43, max: 68, label: 'You are FUCKED UP', color: 'rgb(127, 11, 11)' },  
      { min: 69, max: 69, label: 'NICE', color: 'rgb(127, 11, 11)' }, 
      { min: 70, max: 84, label: 'You are FUCKED UP', color: 'rgb(127, 11, 11)' },  
      { min: 85, max: 126, label: 'You are fucked up', color: 'rgb(218, 34, 34)' }, 
      { min: 127, max: 168, label: 'You are a bit fucked up', color: 'rgb(155, 178, 10)' },
      { min: 169, max: 210, label: 'Getting on the fucked-up side', color: 'rgb(277, 233, 40)' },  
      { min: 211, max: 252, label: 'You are normal', color: 'rgb(172, 106, 20)' }, 
      { min: 253, max: 294, label: 'We are getting there', color: 'rgb(242, 164, 62)' },   
      { min: 295, max: 336, label: 'You are boring as fuck', color: 'rgb(19, 105, 19)' },   
      { min: 337, max: 378, label: 'Have you even been outside?', color: 'rgb(61, 196, 61)' },   
      { min: 379, max: 419, label: 'Did you even do the test?', color: 'rgb(48, 242, 48)' },  
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

async function displayPercentage() {
  const score = sessionStorage.getItem('score');
  if (score !== null && !isNaN(score)) {
      const totalScore = parseInt(score);
      const percentage = Math.round((totalScore / MAX_SCORE) * 100);

      const ranges = [
          { min: 0, max: 20, label: 'You are fucked up', color: 'rgb(127, 11, 11)' },
          { min: 21, max: 40, label: 'Pretty messed up', color: 'rgb(218, 34, 34)' },
          { min: 41, max: 60, label: 'Messed up', color: 'rgb(155, 178, 10)' },
          { min: 61, max: 80, label: 'You\'ve got issues', color: 'rgb(277, 233, 40)' },
          { min: 81, max: 100, label: 'Normal', color: 'rgb(172, 106, 20)' }
      ];

      let range;
      for (const r of ranges) {
          if (percentage >= r.min && percentage <= r.max) {
              range = r;
              break;
          }
      }

      const percentageLabel = document.getElementById('percentageLabel');
      percentageLabel.textContent = range.label;
      percentageLabel.style.color = range.color;
  } else {
      console.error('Invalid score');
  }
}

// Call the function when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  displayScore();
  displayPercentage();
});
