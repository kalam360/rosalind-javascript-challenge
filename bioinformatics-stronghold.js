

// Problem 01 http://rosalind.info/problems/dna/
// A string is simply an ordered collection of symbols selected from some alphabet and formed into a word; 
// the length of a string is the number of symbols that it contains.

// An example of a length 21 DNA string (whose alphabet contains the symbols 'A', 'C', 'G', and 'T') is
//  "ATGCTTCAGAAAGGTCTTACG."

// Given: A DNA string s of length at most 1000 nt.

// Return: Four integers (separated by spaces) counting the respective number 
// of times that the symbols 'A', 'C', 'G', and 'T' occur in s.

// Sample Dataset
// AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC
// Sample Output
// 20 12 17 21


const dna = (data)=>{
    const counter = {
        A: 0,
        C: 0,
        G: 0,
        T: 0
    };

    [...data].forEach((d)=>{
        counter[d] += 1;
    })
    console.log(Object.values(counter).toString().replace(/,/g, " "))
}

// Problem http://rosalind.info/problems/rna/
// An RNA string is a string formed from the alphabet containing 'A', 'C', 'G', and 'U'.

// Given a DNA string t corresponding to a coding strand, its transcribed RNA string u is 
// formed by replacing all occurrences of 'T' in t with 'U' in u.

// Given: A DNA string t having length at most 1000 nt.

// Return: The transcribed RNA string of t.

// Sample Dataset
// GATGGAACTTGACTACGTAAATT
// Sample Output
// GAUGGAACUUGACUACGUAAAUU 

const rna = (data) =>{
    console.log(data.replace(/T/g, "U"))

}


// Problem http://rosalind.info/problems/revc/
// In DNA strings, symbols 'A' and 'T' are complements of each other, as are 'C' and 'G'.

// The reverse complement of a DNA string s is the string sc formed by reversing the symbols 
// of s, then taking the complement of each symbol (e.g., the reverse complement of "GTCA" is "TGAC").

// Given: A DNA string s of length at most 1000 bp.

// Return: The reverse complement sc of s.

// Sample Dataset
// AAAACCCGGT
// Sample Output
// ACCGGGTTTT


const revc = (data) => {
    const trans = {A:'T',C:'G', G:'C', T:'A'}
    const strings = data.replace(/[ATCG]/g,(d)=>{
                return trans[d]
    }).split("").reverse().join("")
    console.log(strings)

}





// exporting the functions
module.exports = {
  dna,
  rna,
  revc
};

