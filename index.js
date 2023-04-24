const http = require('http')
const fs = require('fs')

const requestListener = (request, response)=>{ 
    const {method, url} = request
    if(method === 'GET'){
        if(url === '/'){
            fs.readFile('./views/index.html', 'utf-8', (err, data)=>{
                if(err){
                    console.log('err: ', err)
                    response.end();
                }
                response.end(data);
            })
        }
        if(url === '/about'){
            fs.readFile('./views/about.html', 'utf-8', (err, data)=>{
                if(err){
                    console.log('err: ', err)
                    response.end();
                }
                response.end(data);
            })
        }
        if(url === '/contacts'){
            fs.readFile('./views/contacts.html', 'utf-8', (err, data)=>{
                if(err){
                    console.log('err: ', err)
                    response.end();
                }
                response.end(data);
            })
        }
    } 
}
 
const server = http.createServer(requestListener);
const port = 3000
server.listen(port)

 