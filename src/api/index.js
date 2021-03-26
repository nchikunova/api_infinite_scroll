export * from './constants'; // Импортирует всё(*), а потом экспортирует в одной строке!

// Всё равно, что написать:
// import constants from './constats';
//   +
// export default {
//   ...constants
// };

export * from './character';
