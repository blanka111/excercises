/*
/*
 0. Vypiste cislo, ktore vam uzivatel zadal v tvare "Uzivatel zadal cislo: CISLO SEM a to je peklne cislo
 1. Vypis cisla od 1 - 20
 2. Vypis cisla od 20 - 1
 3. Vypis cisla, ktore su delitelne 3
 4. Vypis cisla, ktore su delitelne 4 a 6
 */


/*const prompt = require('prompt-sync')();

let vstup = prompt ('vloz cislo : ');

console.log(vstup);

console.log(`Uzivatel zadal cislo ${vstup} a to je peklne cislo `);

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

for (let i = 20; i >= 1; i--) {
    console.log(i);
}

for (let i = 20; i >= 1; i--) {
    console.log(i);
}*/


const prompt = require('prompt-sync')();

let vstup = prompt ('vloz cislo : ');
console.log(vstup);

/*
if (vstup % 3 === 0)
{
console.log('Cislo delitelne 3');
}
else {
    console.log('Cislo neni delitelne 3');
}
*/

for (let i = 0; i < vstup; i++)
{
    if ((i % 2 === 0) && (i % 4 === 0)) {
        console.log(i);

    }
}

/*
If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).
After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

*/


