function stars(num) {
  var resulte = '';
  var string = '';
  for (let i = 0; i < num; i++) {
    string += '*';
    resulte += `${string} \n`;
  }
  return resulte;
}


// function start() {
//   var resulte = '';
//   var string = '';
//   for (let i = 0; i < 5; i++) {
//     string += '*';
//     resulte += `${string} \n`;
//   }
//   return resulte;
// }

console.log(stars(5));
