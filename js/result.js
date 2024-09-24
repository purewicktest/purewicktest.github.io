function backButton() {
  window.location.href = '../index.html'; 
}
function uniScoreButton() {
  window.location.href = 'uni-scores.html'; 
}
function backToResultsButton() {
  window.location.href = 'result.html'; 
}

const MAX_SCORE = 420;

function displayScore() {
  const score = sessionStorage.getItem('score');
  if (score !== null && !isNaN(score)) {
    const totalScore = parseInt(score);

    const scoreRanges = [
      { min: 0,   max: 10,  label: 'Seek immediate help', color: 'rgb(139, 0, 0)' }, 
      { min: 11,  max: 20,  label: 'Critical condition, moments away from death', color: 'rgb(165, 42, 42)' },
      { min: 21,  max: 30,  label: 'This is an emergency', color: 'rgb(205, 92, 92)' },
      { min: 31,  max: 40,  label: 'You are unstable', color: 'rgb(220, 60, 60)' }, 
      { min: 41,  max: 50,  label: 'You are a high risk liability', color: 'rgb(255, 69, 0)' },
      { min: 51,  max: 60,  label: 'Serious concerns for your wellbeing', color: 'rgb(255, 140, 0)' },
      { min: 61,  max: 70,  label: 'How are you not ashamed', color: 'rgb(255, 165, 0)' }, 
      { min: 71,  max: 80,  label: 'Hot mess', color: 'rgb(255, 215, 0)' },
      { min: 81,  max: 90,  label: 'Should be ashamed', color: 'rgb(255, 240, 128)' },
      { min: 91,  max: 100, label: 'Consider asking for help sometimes', color: 'rgb(255, 255, 160)' },
      { min: 101, max: 110, label: 'Seriously concerning', color: 'rgb(255, 215, 0)' },
      { min: 111, max: 120, label: 'Very concerning', color: 'rgb(255, 140, 0)' },
      { min: 121, max: 130, label: 'You\'re a car crash', color: 'rgb(255, 100, 0)' },
      { min: 131, max: 140, label: 'Do you need the crisis help line?', color: 'rgb(255, 69, 0)' }, 
      { min: 141, max: 150, label: 'You are so messed up', color: 'rgb(255, 0, 0)' },
      { min: 151, max: 160, label: 'You are messed up', color: 'rgb(255, 0, 0)' },
      { min: 161, max: 170, label: 'Take today off and reflect', color: 'rgb(255, 0, 0)' },
      { min: 171, max: 180, label: 'It\'s not too late to turn to religion', color: 'rgb(255, 0, 0)' },
      { min: 181, max: 190, label: 'Significant issues', color: 'rgb(220, 0, 0)' },
      { min: 191, max: 200, label: 'One bad choice away from the psych ward', color: 'rgb(200, 0, 0)' },
      { min: 201, max: 210, label: 'You\'re a serious problem', color: 'rgb(180, 0, 0)' },
      { min: 211, max: 220, label: 'Urgent action needed to save you', color: 'rgb(160, 0, 0)' },
      { min: 221, max: 230, label: 'You are going down a bad path', color: 'rgb(140, 0, 0)' },
      { min: 231, max: 240, label: 'You are doing okay', color: 'rgb(144, 238, 144)' }, 
      { min: 241, max: 250, label: 'You\'re stable but need some attention', color: 'rgb(173, 255, 47)' },
      { min: 251, max: 260, label: 'You might need an intervention... or a hobby', color: 'rgb(255, 255, 0)' },
      { min: 261, max: 270, label: 'Need to live more', color: 'rgb(255, 215, 0)' },
      { min: 271, max: 280, label: 'Some red flags', color: 'rgb(255, 140, 0)' },
      { min: 281, max: 290, label: 'You\'re barely scraping by', color: 'rgb(255, 69, 0)' },
      { min: 291, max: 300, label: 'I can tell you\'re tapped', color: 'rgb(178, 34, 34)' },
      { min: 301, max: 305, label: 'Doing well for yourself', color: 'rgb(0, 255, 0)' }, 
      { min: 306, max: 310, label: 'You go out a little too much, huh?', color: 'rgb(150, 255, 0)' },
      { min: 311, max: 315, label: 'You don\'t get invited out a lot, huh?', color: 'rgb(125, 255, 0)' },
      { min: 316, max: 320, label: 'I bet you\'re fun at the Xmas work do', color: 'rgb(100, 255, 0)' },
      { min: 321, max: 325, label: 'Dysfunctional', color: 'rgb(75, 255, 0)' },
      { min: 326, max: 330, label: 'Unhinged', color: 'rgb(50, 255, 0)' },
      { min: 331, max: 335, label: 'Weird mate', color: 'rgb(25, 255, 0)' },
      { min: 336, max: 340, label: 'Borderline weird', color: 'rgb(0, 255, 0)' },
      { min: 341, max: 345, label: 'Some red flags but still functional', color: 'rgb(0, 240, 0)' },
      { min: 346, max: 350, label: 'Yawn, nothing to see here', color: 'rgb(0, 225, 0)' },
      { min: 351, max: 355, label: 'The personality of oatmeal', color: 'rgb(0, 210, 0)' },
      { min: 356, max: 360, label: 'Meh, you\'re fine... maybe', color: 'rgb(0, 195, 0)' },
      { min: 361, max: 365, label: 'You call that living?', color: 'rgb(0, 180, 0)' },
      { min: 366, max: 370, label: 'Vanilla bitch, go live', color: 'rgb(0, 165, 0)' },
      { min: 371, max: 375, label: 'Living a boring life, I see', color: 'rgb(0, 150, 0)' },
      { min: 376, max: 380, label: 'This test is clearly not for you', color: 'rgb(0, 135, 0)' },
      { min: 381, max: 385, label: 'I bet you have no friends', color: 'rgb(0, 120, 0)' },
      { min: 386, max: 390, label: 'Have you been out in the past week?', color: 'rgb(0, 105, 0)' },
      { min: 391, max: 395, label: 'Bla bla bla fuck off', color: 'rgb(0, 90, 0)' },
      { min: 396, max: 400, label: 'Grow up', color: 'rgb(0, 75, 0)' },
      { min: 401, max: 410, label: 'Not good enough', color: 'rgb(0, 60, 0)' },
      { min: 411, max: 420, label: 'Give it a rest', color: 'rgb(0, 255, 0)' } 
  ];
    

    let userClass = 'Unknown'; 
    let color = '';
    for (const range of scoreRanges) {
      if (totalScore >= range.min && totalScore <= range.max) {
        userClass = range.label;
        color = range.color;
        break;
      }
    }

    const scoreElement = document.getElementById('score');
    const scoreClassElement = document.getElementById('scoreClass');
    scoreElement.style.color = color;
    scoreElement.textContent = score;
    scoreClassElement.textContent = `${userClass}`;
  } else {
    console.error('Invalid or missing score in session storage.');
  }
}

async function displayPercentage() {
  const score = sessionStorage.getItem('score');
  if (score !== null && !isNaN(score)) {
    const totalScore = parseInt(score);
    const percentage = Math.round((totalScore / MAX_SCORE) * 100);

    const explanations = [
      { min: 0, max: 25, text: 'Call Minds support line on 0300 102 1234. Please also message me if you ever need someone to talk to, you are loved.' },
      { min: 25, max: 40, text: 'Fucking hell mate, this is bad. Bad bad. You need to think before you act. Perhaps it was just you peaking when you were 16, but honestly, I dont think its good for you. If we tracked everyone who got this score range and were able to see where they are in a couple of years, I genuinely reckon at LEAST 50% will be dead, in prison, or on heroin. Shit, some of you already are lol.' },
      { min: 40, max: 50, text: 'How do you get to sleep at night? Must have an insane process mate; you must have a 15-step plan. How does one with this much of a fucked up palate even sit still? Do you even care about your life? Think of your friends or family, think what this must do to them, take a break. If I knew how to put emojis in this I would put the crying one.' },
      { min: 50, max: 60, text: 'You have completed all you needed to, you can rest now. You dont need to do any more and I would say any less, but some of the shit on this list youll never be able to remove from your soul. That shit is stained and it is deeply stained.' },
      { min: 60, max: 75, text: 'You are fucked up, have a few screws loose, but I think this is the perfect level of fucked up. Anything less and youd need help, like not even as a joke. I actually think if you got lower than this you are a freak, nitty slag, or predator. Stay at this level and chill out a little.' },
      { min: 75, max: 80, text: 'Yikes, you must stink of shit or have some unidentified rash at this very moment. You most likely have a few skeletons in your closet and god damn they must be bad ones. I mean what compels you to get this low on this test? Its not even that deep of a test (I got literally 20 points lower).' },
      { min: 80, max: 85, text: 'This is abnormal now, worrying if you will. You get out there and you like seeing the world, but Im not sure the world likes seeing you. This can go two ways, you either will take this as a compliment or insult. This is bad though, quite bad.' },
      { min: 85, max: 90, text: 'Ok... we are getting there, I see that you are trying but you are still not invited for pres. I sense that you are forced to do half of this shit, if you want to be better you have to be a degenerate on your own. Keep going though I believe in you! I recommend a good ket binge.' },
      { min: 90, max: 100, text: 'You simply have not lived. You need to get out there more and see the world. I think you need a life coach and a fucking good one. Why are you still reading this? Go do some drugs and shag a stranger.' }
];

    let explanation;
    for (const e of explanations) {
      if (percentage >= e.min && percentage <= e.max) {
        explanation = e.text;
        break;
      }
    }

    const percentageLabel = document.getElementById('percentageLabel');
    percentageLabel.textContent = explanation;
  } else {
    console.error('Invalid score');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  displayScore();
  displayPercentage();
});
