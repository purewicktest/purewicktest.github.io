

//makes the website
function generateQuestions() {
    const form = document.getElementById('quiz-form');
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `question-${index}`;
        const label = document.createElement('label');
        label.htmlFor = `question-${index}`;
        label.textContent = question.text;
        questionElement.appendChild(checkbox);
        questionElement.appendChild(label);
        form.appendChild(questionElement);
    });
}

// Calculate the score
function submitQuiz() {
  let totalWeight = 0;
  questions.forEach((question, index) => {
    totalWeight += question.weight;
  });

  let score = totalWeight; // Initialize score with the total weight
  questions.forEach((question, index) => {
    const checkbox = document.getElementById(`question-${index}`);
    if (checkbox.checked) {
      score -= question.weight; // Subtract the weight if the checkbox is checked
    }
  });

  // Sanitize the score using parseInt to ensure it's an integer
  const sanitizedScore = parseInt(score);

  // Check if the score is a valid number
  if (!isNaN(sanitizedScore)) {
    sessionStorage.setItem('score', sanitizedScore);
    window.location.href = 'result.html';
  } else {
    // Handle the case where the score is not a valid number
    console.error('Invalid score value.');
  }
}


generateQuestions();


// this is the uni dropbox 
const input = document.getElementById("university-input");
const list = document.getElementById("university-list");
let selectedUni = "";

function displayMatches(matches) {
  list.innerHTML = "";
  matches.forEach(function(match) {
    const li = document.createElement("li");
    li.textContent = match.name;
    li.addEventListener("click", function() {
      input.value = match.name;
      selectedUni = match.name;
      list.innerHTML = "";
    });
    list.appendChild(li);
  });
}

function filterUniversities(query) {
  const universities = getUniversities();
  return universities.filter(function(university) {
    return university.name.toLowerCase().includes(query) || university.aliases.some(alias => alias.toLowerCase().includes(query));
  });
}

input.addEventListener("input", function() {
  const query = input.value.toLowerCase();
  const matches = filterUniversities(query);
  displayMatches(matches);
});

input.addEventListener("focusout", function() {
  setTimeout(function() {
    list.innerHTML = "";
  }, 200);
});

const submitButton = document.getElementById("submit-button");
const selectedUniText = document.getElementById("selected-uni-text");

submitButton.addEventListener("click", function() {
  if (selectedUni !== "") {
    selectedUniText.textContent = "You selected " + selectedUni + ".";
  } else {
    selectedUniText.textContent = "No university selected."; // Display a message if no university is selected
  }
});
