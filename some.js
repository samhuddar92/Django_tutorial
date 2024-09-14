let people_age=[24,34,18,19];

let voter=people_age.every(el => el>=18)
console.log(voter);

let voternew=people_age.some(el=>el==88)
console.log(voternew);