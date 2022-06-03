const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
    'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
},
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthPlace': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthPlace': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if( rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    response.json(rappers)
})
app.listen(PORT, ()=>{
    console.log(`This server is running on port ${PORT}! You better go catch it!`)
})