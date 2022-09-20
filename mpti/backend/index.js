import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import productRoutes from './routes/Product.js'

const app = express()
app.use(bodyParser.json({limit: "30mb", extends: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extends: true}))
app.use(cors())

app.use('/products', productRoutes)


const CONNECTION_URL = 'mongodb+srv://neeparfume:neeparfume123@cluster0.a5nemzs.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))