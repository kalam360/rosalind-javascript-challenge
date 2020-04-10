const _ = require("lodash")

// Problem 01 http://rosalind.info/problems/dna/

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

const rna = (data) =>{
    console.log(data.replace(/T/g, "U"))

}


// Problem http://rosalind.info/problems/revc/

const revc = (data) => {
    const trans = {A:'T',C:'G', G:'C', T:'A'}
    const strings = data.replace(/[ATCG]/g,(d)=>{
                return trans[d]
    }).split("").reverse().join("")
    console.log(strings)

}

// http://rosalind.info/problems/fib/
// Sample Dataset
// 5 3
// Sample Output
// 19

const fib = (data) => {

    const input = data.split(" ").map((d)=> parseInt(d))
    const seq = [1, 1];

    const fi =(n,k)=>{
            _.range(2,n).forEach((i)=>{
                seq.push(seq[i-2]*k+seq[i-1])
            })
    }
    fi(...input)
    console.log(seq.slice(-1));
    console.log(seq.pop())
}

// http://rosalind.info/problems/gc/
// Sample Dataset

// >Rosalind_6404
// CCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTTCCGGCCTTCCC
// TCCCACTAATAATTCTGAGG
// >Rosalind_5959
// CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCT
// ATATCCATTTGTCAGCAGACACGC
// >Rosalind_0808
// CCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGACCAGCCCGGAC
// TGGGAACCTGCGGGCAGTAGGTGGAAT
// Sample Output

// Rosalind_0808
// 60.919540

const gc = (data) => {
    
    name = data.match(/>\w+/g).map((d)=> d.replace(/>/, ""));
    genome = data.match(/[ATCG]+\n[ATCG]+/g).map((d)=> d.replace(/\n/, ""));
    gobj = _.zipObject(name,genome)
    gcobj = {}
    Object.keys(gobj).forEach( (d)=> {
        gcobj[d]=
          gobj[d].match(/[GC]/g).length / gobj[d].match(/[ATGC]/g).length;

    })
   console.log(gcobj)
}


// http://rosalind.info/problems/hamm/
// Sample Dataset

// GAGCCTACTAACGGGAT
// CATCGTAATGACGGCCT
// Sample Output

// 7

const hamm = (data) => {
    let [k,v] = data.match(/\w+/g)
    matches = []
    k.split("").forEach((d,i)=>{
        if (d != v[i]) { matches.push(d)}
       
    })
    console.log(matches.length)
}


// rosalind.info/problems/prot/

// Sample Dataset

// AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA
// Sample Output

// MAMAPRTEINSTRING


const prot = (data) => {
    const code = {};
`UUU F      CUU L      AUU I      GUU V
UUC F      CUC L      AUC I      GUC V
UUA L      CUA L      AUA I      GUA V
UUG L      CUG L      AUG M      GUG V
UCU S      CCU P      ACU T      GCU A
UCC S      CCC P      ACC T      GCC A
UCA S      CCA P      ACA T      GCA A
UCG S      CCG P      ACG T      GCG A
UAU Y      CAU H      AAU N      GAU D
UAC Y      CAC H      AAC N      GAC D
UAA Stop   CAA Q      AAA K      GAA E
UAG Stop   CAG Q      AAG K      GAG E
UGU C      CGU R      AGU S      GGU G
UGC C      CGC R      AGC S      GGC G
UGA Stop   CGA R      AGA R      GGA G
UGG W      CGG R      AGG R      GGG G`.split(/\s{3,}|\n/).forEach((d)=>{
        code[d.split(/\s/)[0]] = d.split(/\s/)[1].toUpperCase()
});

    const protein = _.range(0, data.length, 3).map((d) => {
      return code[data.slice(d,d+3)]
    });
    console.log(protein.slice(0,-1).join(""))
}

// http://rosalind.info/problems/subs/
// Sample Dataset

// GATATATGCATATACTT
// ATAT
// Sample Output

// 2 4 10

const subs = (data) => {
    let [k,v] = data.split("\n")
    let regex = new RegExp("^"+v,"g")
    let index = []

    _.range(k.length).forEach((d)=>{
        if (regex.test(k.slice(d,))) {index.push(d+1)}
    })
    console.log(index)

}

// http://rosalind.info/problems/cons/

// Sample Dataset
// >Rosalind_1
// ATCCAGCT
// >Rosalind_2
// GGGCAACT
// >Rosalind_3
// ATGGATCT
// >Rosalind_4
// AAGCAACC
// >Rosalind_5
// TTGGAACT
// >Rosalind_6
// ATGCCATT
// >Rosalind_7
// ATGGCACT
// Sample Output
// ATGCAACT
// A: 5 1 0 0 5 5 0 0
// C: 0 0 1 4 2 0 6 1
// G: 1 1 6 3 0 1 0 0
// T: 1 5 0 0 0 1 1 6

const cons = (data) => {

    const dd = {
        A:[],
        C:[],
        G:[],
        T: []
        }
    const input = _.zipObject(data.match(/>\w+/g).map(d => d.replace(/>/g, "")),data.match(/[ATCG]+/g) )
    const matrix = Object.values(input).map(d => d.split(""))

    const transmap = matrix[0].map((d,i) => matrix.map(r => r[i]))
    // const transzip = _.zip(...matrix)

    
    transmap.forEach(d=>{
        count = {}
        d.forEach(m=> {
            count[m] = (count[m] || 0)+1;
        })
        
        Object.keys(dd).forEach(d =>{
            dd[d].push(count[d] == undefined? 0:count[d])
        })
    })
    const code = "ACGT".split("")
    const consus = _.zip(...Object.values(dd))
    const cc = consus.map((d,i)=>{
        return code[d.indexOf(Math.max(...d))]

    })
    console.log(cc.join(""))

}


// http://rosalind.info/problems/fibd/
// Sample Dataset
// 6 3
// Sample Output
// 4

// matures after 1 
// multiplies 2 (male and female )
// dies after 3
// runs for 6 generation

const fibd = data => {
     let [n,m] = data.split(" ").map(d => parseInt(d))
    let ages = [1].concat(Array(m-1).fill(0))
    let sum = 0;
    _.range(n-1).forEach(d => {
        tem = ages.slice(0, -1);
        ages = [ages.slice(1).reduce((a,b)=> a+b, 0)].concat(tem)
    })
    console.log(ages.reduce((a,b)=> a+b))  
}




// exporting the functions
module.exports = {
  dna,
  rna,
  revc,
  fib,
  gc,
  hamm,
  prot,
  subs,
  cons,
  fibd
};

