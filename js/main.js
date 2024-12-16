const uniSubmitButton = document.getElementById("uni-submit-button");
const universityInput = document.getElementById("university-input");

uniSubmitButton.addEventListener("click", function() {
    const selectedUni = universityInput.value.trim();

    if (selectedUni) {
        uniSubmitButton.textContent = "Done";

        const prompt = document.createElement("div");
        prompt.textContent = `You selected ${selectedUni}`;
        prompt.style.position = "fixed";
        prompt.style.top = "20px";
        prompt.style.left = "50%";
        prompt.style.transform = "translateX(-50%)";
        prompt.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        prompt.style.color = "#fff";
        prompt.style.padding = "10px 20px";
        prompt.style.borderRadius = "5px";
        prompt.style.zIndex = "1000";
        document.body.appendChild(prompt);

        setTimeout(() => {
            document.body.removeChild(prompt);
            uniSubmitButton.textContent = "Submit";
        }, 2000);
    } else {
        alert("Please enter a university.");
    }
});


function submitQuiz() {
    let totalWeight = 0;
    questions.forEach((question) => {
        totalWeight += question.weight;
    });

    let score = totalWeight; 
    questions.forEach((question, index) => {
        const checkbox = document.getElementById(`question-${index}`);
        if (checkbox.checked) {
            score -= question.weight; 
        }
    });

    const sanitizedScore = parseInt(score);

    if (!isNaN(sanitizedScore)) {
        sessionStorage.setItem('score', sanitizedScore);
        window.location.href = 'result.html';
    } else {
        console.error('Invalid score value.');
    }
}

const input = document.getElementById("university-input");
const list = document.getElementById("university-list");

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
        return university.name.toLowerCase().includes(query) || 
               university.aliases.some(alias => alias.toLowerCase().includes(query));
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

function generateQuestions() {
    const quizContainer = document.querySelector('.quiz-container');

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';  

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `question-${index}`;

        const label = document.createElement('label');
        label.htmlFor = `question-${index}`;
        label.textContent = question.text;

        questionElement.appendChild(checkbox);
        questionElement.appendChild(label);
        quizContainer.appendChild(questionElement); 
    });

    adjustFontSize();
}

function adjustFontSize() {
    const questions = document.querySelectorAll('.question');
    let minFontSize = parseFloat(window.getComputedStyle(document.body).fontSize);

    questions.forEach(question => {
        let fontSize = minFontSize;
        question.style.fontSize = fontSize + 'px';

        while (question.scrollWidth > question.clientWidth && fontSize > 12) {
            fontSize -= 0.5;
            question.style.fontSize = fontSize + 'px';
        }

        if (fontSize < minFontSize) {
            minFontSize = fontSize;
        }
    });

    questions.forEach(question => {
        question.style.fontSize = minFontSize + 'px';
    });
}

window.addEventListener('resize', adjustFontSize);
window.addEventListener('load', generateQuestions);
