const express = require('express')
const parser = require('body-parser')

const { verifyToken } = require('./controllers/verify-token.controller')

const app = express()
const PORT = process.env.PORT || 3000

app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))

app.use('/', verifyToken)


app.listen(PORT, () => console.log(`server running on port: ${PORT}`))