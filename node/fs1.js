const fs = require('fs')

fs.readFile('./tt.txt','utf8',(err,data)=>{
    console.log(err)
    console.log(data)
})