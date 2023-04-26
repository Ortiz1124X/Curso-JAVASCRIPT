// - Un nuevo Set con los nombres de tu familia

const familia = ['Diana', 'Enidth', 'Sandra', 'Gladys', 'Darwin', 'Felipe'];
const miSet = new Set(familia);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

miSet.add('Felipe');
console.log(miSet);

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

miSet.add('JavaScript');
console.log(miSet);