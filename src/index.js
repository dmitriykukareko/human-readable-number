module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }

  const units = number % 10;
  const tens = Math.floor(number % 100 / 10);
  const hundreds = Math.floor(number / 100);
  
  let result = [];
  const arrayUnits = [' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
  const arrayTens = [' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];

  if (hundreds != 0) {
      result.push(arrayUnits[hundreds - 1] + ' hundred');
  }

  if (tens === 1) {
      result.push(arrayUnits[number % 100 - 1]);
    } else {
      result.push(arrayTens[tens - 2]);
      result.push(arrayUnits[units - 1]);
    }

  return result.join('').trim();
}
