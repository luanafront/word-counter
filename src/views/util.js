export default function countWords(phrase) {
  if (phrase === '') {
    return {};
  }

  const phraseList = phrase.split(' ');
  const counter = {};

  for (let i = 0; i < phraseList.length; i++) {
    const word = phraseList[i];
    if (word !== '') {
      if (counter[word] === undefined) {
        counter[word] = 1;
      } else {
        counter[word]++;
      }
    }
  }
  return counter;
}

//TDD - desenvolvimento orientado a teste

// function test(input, expected) {
//   const result = countWords(input);

//   const strResult = JSON.stringify(result);
//   const strExpected = JSON.stringify(expected);

//   if (strResult === strExpected) {
//     console.log('%cPASSOU!', 'color: #0f0');
//   } else {
//     console.log(
//       `%cFALHOU! Esperado: ${strExpected}. Recebido: ${strResult}`,
//       'color: #f00',
//     );
//   }
// }

// (() => {
//   const cases = [
//     {
//       input: 'Luana Luana medeiros',
//       expected: {
//         Luana: 2,
//         medeiros: 1,
//       },
//     },
//     {
//       input: 'uva uva maça pera',
//       expected: {
//         uva: 2,
//         maça: 1,
//         pera: 1,
//       },
//     },
//     {
//       input: '',
//       expected: {},
//     },
//     {
//       input: 'Luana luana medeiros',
//       expected: {
//         Luana: 1,
//         luana: 1,
//         medeiros: 1,
//       },
//     },
//     {
//       input: 'bla bla  bla',
//       expected: {
//         bla: 3,
//       },
//     },
//   ];

//   for (let i = 0; i < cases.length; i++) {
//     const currentCase = cases[i];
//     const {input, expected} = currentCase;
//     test(input, expected);
//   }
// })();
