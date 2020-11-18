const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    return new Set(this.word.toLowerCase()).size === this.word.length;
}

module.exports = IsogramFinder;
