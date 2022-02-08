/**
 * Formate un nombre avec un espace tous les 3 chiffres pour avoir de la visibilité
 * @param {Number} nombre en entrée Example: 4000000
 * @returns {Number} nombre en sortie Example: 4 000 000
 */

function numberFormat(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export default numberFormat;
