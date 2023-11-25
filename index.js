function scuberGreetingForFeet(height) {
  if (height <= 400) {
    return 'This one is on me!';
  } else if (height <= 2000) {
    return 'That will be twenty bucks.';
  } else if (height > 2500) {
    return 'No can do.';
  } else {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city) {
  if (city === "NYC") {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip) {
  if (tip === 'generous') {
    return 'Thank you so much.';
  } else if (tip === 'not as generous') {
    return 'Thank you.';
  } else {
    return 'Bye.';
  }
}