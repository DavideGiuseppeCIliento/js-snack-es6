// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// SNACK 1

// Creazione dell' Array di oggetti
const biciclette = [
  {
    nome: "Graziella",
    peso: 35,
  },

  {
    nome: "Muntain",
    peso: 25,
  },

  {
    nome: "BMX",
    peso: 30,
  },

  {
    nome: "Tandem",
    peso: 60,
  },
];

// Verifica peso minore
let temp = biciclette[0];
console.log(biciclette[0]);
for (const key in biciclette) {
  if (temp.peso > biciclette[key].peso) temp = biciclette[key];
  console.log(temp.peso);
  console.log(biciclette[key]);
}

alert(temp.nome);
