const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const isPangram = (string) => {
    string = string.toLowerCase();
    return this.alphabet.every(x => string.includes(x));
  }
  return isPangram(this.phrase);
}

module.exports = PangramFinder;
