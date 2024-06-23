import _ from "underscore";
//Así se exportaría la función a otros archivos o módulos

/**
 *
 * @param {Array<String} deck es un arreglo de string
 * @returns {String} retorna la carta del deck
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw new Error("No hay cartas en el deck");
  }
  const carta = deck.pop();
  return carta;
};
