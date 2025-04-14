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

// Stampa nomen
alert(temp.nome);

// SNACK 2

// Creazione dell' Array di oggetti
const squadre = [
  {
    nome: "Juventus",
    punti: 0,
    falli: 0,
  },

  {
    nome: "Inter",
    punti: 0,
    falli: 0,
  },

  {
    nome: "Milan",
    punti: 0,
    falli: 0,
  },

  {
    nome: "Roma",
    punti: 0,
    falli: 0,
  },
];

const statisticaFalli = [];

// Generazione punti e falli

for (const chiave in squadre) {
  squadre[chiave].punti = generaPunti();
  squadre[chiave].falli = generaFalli();
}
console.log(squadre[0]);

// Generazione nuovo ARRAY con  NOME e FALLI
for (const chiave in squadre) {
  statisticaFalli.push({
    nome: squadre[chiave].nome,
    falli: squadre[chiave].falli,
  });
}
console.log(statisticaFalli);

//--------------------------------------------FUNZIONI
// FUNZIONE GENERAZIONE PUNTI
function generaPunti() {
  return Math.floor(Math.random() * 100) + 1;
}
// FUNZIONE GENERAZIONE FALLI
function generaFalli() {
  return Math.floor(Math.random() * 100) + 1;
}
