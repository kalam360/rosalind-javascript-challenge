const biostrng = require('./bioinformatics-stronghold-i.js')
const fs = require("fs")

fs.readFile('./input.txt', (err, buff)=>{
    
    const data = buff.toString()
    
    biostrng.fibd(data)
})


