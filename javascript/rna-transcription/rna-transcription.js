//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = () => {
  let res = "";

  for (let i = 0; i <toRna.length; i++) {
    const nucleotide = toRna.charAt(i);
    let new_nucleotide = nucleotide;
    if(nucleotide === 'G')
      new_nucleotide='C';
    else if(nucleotide === 'C')
      new_nucleotide='G';
    else if(nucleotide === 'T')
      new_nucleotide='A';
    else if(nucleotide === 'A')
      new_nucleotide='U';
    res = res.concat(new_nucleotide);
  }
  return res;
};
