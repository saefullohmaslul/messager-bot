const express = require('express')
const parser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))


app.listen(PORT, () => console.log(`server running on port: ${PORT}`))