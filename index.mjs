import http from 'http'
import {readFileSync} from 'fs'
const server = http.createServer((req,res)=>{
    const html = readFileSync('./index.html',{encoding:'utf-8'})
    if(!html) return 
    console.log(html)
    res.setHeader('Content-Type','text/html')
    res.write(html,(e)=>console.log(''))
    res.end()
})

server.listen(7392)