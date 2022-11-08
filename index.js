function writeCards(invites, event) {
  const newArray = [];
  for (let i = 0; i < invites.length; i++) {
    newArray.push(`Thank you, ${invites[i]}, for the wonderful ${event} gift!`);
  }
  return newArray;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");

function countDown() {
  let countDown = 10;
  while (countDown > -1) {
    console.log(countDown--);
  }
}

countDown();
