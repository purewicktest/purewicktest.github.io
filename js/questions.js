const questions = [
  { text: 'Watched porn?', weight: 1 },
  { text: 'Had a wank?', weight: 1 },
  { text: 'Had a wank in a room that isnt yours?', weight: 1 },
  { text: 'Had a wank in public?', weight: 2 },
  { text: 'Had a wank with someone else in the room?', weight: 1 },
  { text: 'Had a wank using inanimate object?', weight: 1 },
  { text: 'Been caught while wanking?', weight: 2 },
  { text: 'Had a wank in a university building?', weight: 2 },

  { text: 'Been in a relationship?', weight: 1 },
  { text: 'Held hands?', weight: 1 },
  { text: 'Had a kiss?', weight: 1 },
  { text: 'Has a kiss longer than 30 seconds?', weight: 1 },
  { text: 'Gave or received a hickey?', weight: 1 },
  { text: 'Felt up or had your tits felt up?', weight: 1 },
  { text: 'Felt up or had your ass felt up?', weight: 1 },
  { text: 'Sent a nude?', weight: 2 },
  { text: 'Received a nude?', weight: 2 },
  { text: 'Dry humped?', weight: 1 },
  { text: 'Gave head?', weight: 2 },
  { text: 'Gave head untill cum?', weight: 2 },
  { text: 'Received head?', weight: 2 },
  { text: 'Receieved head untill cum?', weight: 2 },
  { text: 'Gave or received period head?', weight: 4 },
  { text: 'Gave anal head?', weight: 2 },
  { text: 'Received anal head?', weight: 2 },
  { text: 'Ate someone\'s cum?', weight: 1 },
  { text: 'Showered with someone?', weight: 1 },
  
  { text: 'Lost your virginity?', weight: 1 },
  { text: 'Lost your virginity on or before 18?', weight: 1 },
  { text: 'Lost your virginity on or before 16?', weight: 2 },
  { text: 'body count is more than or equal to 1?', weight: 1 },
  { text: 'body count is more than or equal to 5?', weight: 2 },
  { text: 'body count is more than or equal to 10?', weight: 3 },
  { text: 'body count is more than or equal to 20?', weight: 4 },
  { text: 'body count is more than 30+?', weight: 5 },
  { text: 'Had sex with 2 people in one day?', weight: 1 },
  { text: 'Had sex with 3 people in one day?', weight: 3 },
  { text: 'Had sex with 4 or more people in one day?', weight: 5 },
  { text: 'Had period sex?', weight: 2 },
  { text: 'Had anal sex?', weight: 2 },
  { text: 'Had a one night stand?', weight: 1 },
  { text: 'Had a threesome?', weight: 2 },
  { text: 'Threesome with 2 of the opposite sex?', weight: 2 },
  { text: 'Had a foursome?', weight: 3 },
  { text: 'Had a foursome with 3 of the opposite sex?', weight: 5 },
  { text: 'Had a orgy? (5 or more people)', weight: 5 },
  { text: 'Shagged in a public place?', weight: 2 },
  { text: 'Shagged in a university building?', weight: 2 },
  { text: 'Shagged in the libary?', weight: 2 },
  { text: 'Shagged in a pub?', weight: 2 },
  { text: 'Shagged in a club?', weight: 2 },
  { text: 'Shagged in a car?', weight: 1 },
  { text: 'Joined the mile high club?', weight: 5 },
  { text: 'Shagged a coworker?', weight: 1 },
  { text: 'Shagged a coursemate?', weight: 1 },
  { text: 'Shagged a flatmate?', weight: 1 },
  { text: 'Shagged a MILF/DILF (must have a kid)?', weight: 3 },
  { text: 'been to a strip club?', weight: 1 },
  { text: 'Shagged a prostitute?', weight: 3 },
  { text: 'Been to a kink party?', weight: 2 },
  { text: 'Cheated on your partner?', weight: 2 },
  { text: 'Travelled more than 3 hours for a shag?', weight: 3 },
  { text: 'Took someones virginity?', weight: 2 },
  { text: 'Shagged without a condom?', weight: 1 },
  { text: 'Had a STI/STD scare or test?', weight: 2 },
  { text: 'Had a STI/STD?', weight: 3 },
  { text: 'Had 2 STIs/STDs?', weight: 4 },
  { text: 'Had 3 or more STIs/STDs?', weight: 5 },
  { text: 'Made a porno?', weight: 2 },
  { text: 'Had a pregnancy scare or test?', weight: 1 },
  { text: 'Made someone pregnant or was pregnant?', weight: 5 },
  { text: 'Had or gave the sperm to an abortion?', weight: 5 },
  
  { text: 'Been to a pres?', weight: 1 },
  { text: 'Start your pre\'s before 10pm?', weight: 1 },
  { text: 'Start your pre\'s before 8pm?', weight: 1 },
  { text: 'Start your pre\'s before 6pm?', weight: 2 },
  { text: 'Start your pre\'s before 4pm?', weight: 2 },
  { text: 'Start your pre\'s before 2pm?', weight: 3 },
  { text: 'Start your pre\'s before 12pm?', weight: 3 },
  { text: 'Been to a afters?', weight: 1 },
  { text: 'Been to a afters that lasted until 7am?', weight: 2 },
  { text: 'Been on a 2 day bender?', weight: 2 },
  { text: 'Been on a 3 day bender?', weight: 3 },
  { text: 'Been on a 4 day bender?', weight: 4 },
  { text: 'Been on a week or more bender?', weight: 5 },

  { text: 'Drank alcohol?', weight: 1 },
  { text: 'Thrown up while drinking?', weight: 1 },
  { text: 'Blacked out from drinking?', weight: 1 },
  { text: 'Gone to a lecture hungover?', weight: 1 },
  { text: 'Gone to work on a hangover?', weight: 1 },
  { text: 'Vaped nicotine?', weight: 1 },
  { text: 'Smoked a cigarette?', weight: 1 },
  { text: 'Smoked Weed?', weight: 1 },
  { text: 'Vaped weed?', weight: 1 },
  { text: 'Eaten edibles?', weight: 1 },
  { text: 'Greened out while high?', weight: 1 },
  { text: 'Smoked spice/K2?', weight: 3 },
  { text: 'Used Noss canisters?', weight: 2 },
  { text: 'Used poppers?', weight: 2 },
  { text: 'Used MDMA?', weight: 2 },
  { text: 'Used speed?', weight: 2 },
  { text: 'Used Khat/meow meow?', weight: 3 },
  { text: 'Used Cocaine?', weight: 3 },
  { text: 'Used DXM?', weight: 2 },
  { text: 'Used GHB?', weight: 3 },
  { text: 'Used Ketamine?', weight: 2 },
  { text: 'Used LSD?', weight: 2 },
  { text: 'Used Shrooms?', weight: 2 },
  { text: 'Used salvia?', weight: 3 },
  { text: 'Used DMT?', weight: 3 },
  { text: 'Used Benzos?', weight: 2 },
  { text: 'Used heroin?', weight: 5 },
  { text: 'Used crack/meth?', weight: 5 },
  { text: 'Used research chemicals?', weight: 2 },
  { text: 'Gone to lecture on a comedown?', weight: 2 },
  { text: 'Gone to lecture while high?', weight: 4 },
  { text: 'Gone to work on a comedown?', weight: 2 },
  { text: 'Gone to work while high?', weight: 3 },
  { text: 'Got high at work?', weight: 3 },
  { text: 'Got high at university?', weight: 2 },
  { text: 'Raided your medicine cabinet?', weight: 2 },
  { text: 'Raided other people\'s medicine cabinet?', weight: 4 },
  { text: 'Used 2 drugs together?', weight: 2 },
  { text: 'Used 3 drugs together?', weight: 3 },
  { text: 'Used 4 drugs together?', weight: 4 },
  { text: 'Used 5 or more drugs together?', weight: 5 },
  { text: 'Overdosed?', weight: 5 },
  { text: 'Ended up in a hospital from drug use?', weight: 4 },
  { text: 'Been to a psych ward?', weight: 5 },

  { text: 'Stole food from a flatmate?', weight: 1 },
  { text: 'Vandalised something on purpose?', weight: 2 },
  { text: 'Used transport without paying?', weight: 2 },
  { text: 'Shoplifted on purpose?', weight: 3 },
  { text: 'Stole public property on a night out?', weight: 2 },
  { text: 'Been thorwn out from a store?', weight: 1 },
  { text: 'Been banned from a store?', weight: 2 },
  { text: 'Been thrown out of a pub?', weight: 1 },
  { text: 'Been barred from a pub?', weight: 2 },
  { text: 'Been thrown out of a club?', weight: 1 },
  { text: 'Been banned from a club?', weight: 2 },
  { text: 'Had the police called on you?', weight: 3 },
  { text: 'Ran from the police?', weight: 4 },
  { text: 'Been placed in handcuffs?', weight: 2 },
  { text: 'Spent a night in a cell?', weight: 4 },
  { text: 'Got a citation from the police?', weight: 4 },
  { text: 'Got a criminal conviction?', weight: 5 },

  { text: 'Been in a fight?', weight: 3 },
  { text: 'Been jumped?', weight: 3 },
  { text: 'Been stabbed?', weight: 5 },
  { text: 'Been robbed?', weight: 2 },
  { text: 'Been robbed at knife point?', weight: 3 },

  { text: 'Spent £100 on a night out?', weight: 1 },
  { text: 'Spent £200 on a night out?', weight: 1 },
  { text: 'Spent £400 on a night out?', weight: 2 },
  { text: 'Spent £600 on a night out?', weight: 3 },
  { text: 'Spent £800 on a night out?', weight: 4 },
  { text: 'Spent £1,000+ on a night out?', weight: 5 },

  { text: 'Lost wallet/phone on a night out?', weight: 1 },
  { text: 'Woke up in a bed that was not yours?', weight: 1 },
  { text: 'Woke up in public?', weight: 3 },
  { text: 'Ended up in a hospital due to a night out?', weight: 5 },

  { text: 'Been in detention?', weight: 1 },
  { text: 'Been on report?', weight: 1 },
  { text: 'Been exluded?', weight: 1 },
  { text: 'Been expelled?', weight: 1 },

  { text: 'Got a noise complaint from the university?', weight: 2 },
  { text: 'Got a fine from the university?', weight: 3 },
  { text: 'Had to run from the campus security?', weight: 2 },
  { text: 'Been caught by the campus security?', weight: 3 },
  { text: 'Been excluded from a university?', weight: 4 },
  { text: 'Been expelled from a university?', weight: 5 },
  ]



// Function to calculate the total and display in console
// to run use > node questions.js
const totalWeight = questions.reduce((total, question) => total + question.weight, 0);

console.log(totalWeight);