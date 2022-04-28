//Point Mutations
// Write a program that can calculate the Hamming distance between two DNA
// strands.

// Example
// GAGCCTACTAACGGGAT
// CATCGTAATGACGGCCT
// ^ ^ ^  ^ ^    ^^
// nucleotides match, otherwise it's considered a mutation

//Problem:
// strands should be the same length, otherwise compare based on the length of
// the shorter strand.

class DNA {
  constructor(strand) {
    this.strand = strand.split('');
  }
  hammingDistance(secondStrand) {
    let [strand, otherStrand] = this.sameLength(secondStrand.split(''));
    let distance = 0;
    strand.forEach((nucleotide, index) => {
      if (nucleotide !== otherStrand[index]) {
        distance += 1;
      }
    });
    return distance;
  }
  sameLength(secondStrand) {
    if (this.strand.length === secondStrand.length) {
      return [this.strand, secondStrand];
    } else if (this.strand.length > secondStrand.length) {
      return [this.strand.slice(0, secondStrand.length), secondStrand];
    } else {
      return [this.strand, secondStrand].slice(0, this.strand.length);
    }
  }
}

// let dna = new DNA('GGACGGA');
// console.log(dna.sameLength('GGG'));
// console.log(dna.hammingDistance('GGG'));

module.exports = DNA;