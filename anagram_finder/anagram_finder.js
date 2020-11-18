const AnagramFinder = function (word) {
    this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const sameLengthWordsSet = new Set(this.word.toLowerCase()).size === this.word.length;
    sameLengthWordsArray = Array.from(sameLengthWordsSet);
    
    // return sameLengthWordsArray
    // .sort()
    
}

module.exports = AnagramFinder;
