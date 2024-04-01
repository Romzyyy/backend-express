import express from 'express'

const app = express()

app.get('/product', (req, res) => {
    res.status(200).send({
        data: 'product',
    })
})

app.listen(3000, () => {
    console.log('server is up and running')
})
