const express = require('express')


const app = express()
const port = process.env.PORT || 8000


app.get('/api/customers', (req, res) => {
const customers = [
    {id: 1, firstname: 'john', lastname: 'sunday'},
     { id: 2, firstname: 'terry', lastname: 'monday' },
      { id: 3, firstname: 'smith', lastname: 'saturday' }
]

res.json(customers)

})



app.listen(port, () => {
console.log( `Example app listening on port port! ${port}`)

})