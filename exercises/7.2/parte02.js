const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* Ex 01 */
const adicionaTurno = (object, key, value) => {
  object[key] = value;
};
adicionaTurno(lesson2, 'turno', 'manhã');
console.log("Adiciona o Turno Manhã no objeto Lessons 2");
// console.log(lesson2);

/* EX 02 */
const listaChaves = (object) => Object.keys(object);
console.log("Lista as chaves do objeto Lessons 2");
// console.log(listaChaves(lesson2));

/* EX 03 */
const mostraTamanho = (object) => Object.keys(object).length;
console.log("Mostra o tamanho do objeto Lessons 2");
// console.log(mostraTamanho(lesson2));

/* EX 04 */
const mostraValores = (object) => Object.values(object);
console.log("Mostra os valores do objeto Lessons 2");
// console.log(mostraValores(lesson2));

/* EX 05 */
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log("Mostra todos os objetos lessons");
// console.log(allLessons);

/* EX 06 */
const numeroEstudantes = (object) => {
  let total = 0;
  const array = Object.keys(object);
  for (aluno in array) {
    total += object[array[aluno]].numeroEstudantes;
  }
  return total;
};
console.log('O total de alunos em todas as aulas');
// console.log(numeroEstudantes(allLessons));

/* EX 07 */
const pegaValorPos = (object, pos) => Object.values(object)[pos];
console.log('Recupera dos valores da chave de acordo com sua posição');
// console.log(pegaValorPos(lesson1, 2));

/* EX 08 */
const verificaPar = (object, key, value) => {
  const array = Object.entries(object);
  let existe = false;
  for (let i in array) {
    if (array[i][0] === key && array[i][1] === value) existe = true;
  }
  return existe;
};
console.log('O par (chave/valor) existe na função ? (true or false)')
console.log(verificaPar(lesson2,'professor','João'));