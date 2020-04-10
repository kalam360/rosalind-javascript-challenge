const biostrng = require('./bioinformatics-stronghold.js')
const fs = require("fs")

fs.readFile('./input.txt', (err, buff)=>{
    
    const data = buff.toString()
    
    biostrng.revc(data)
})


