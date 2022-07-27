//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const dnaToRnaMap = new Map([
  ['G', 'C'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'U']
]);
function dnaToRnaMapper(nucleotide) {
  let newNucleotide = dnaToRnaMap.get(nucleotide);
  if(newNucleotide === undefined){
    throw new Error('Invalid DNA');
  }
  return newNucleotide;
}
export function toRna(dna){
  let rna = '';
  [...dna].forEach(nucleotide => rna+=dnaToRnaMapper(nucleotide));
  return rna;
}

