const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const helmet = require('helmet')
require('./config/database')

const authRoutes = require('./routes/authRoutes')
const mainRoutes = require('./routes/mainRoutes')
const { auth } = require('./middleware/authMiddleware')


const app = express()

app.use(morgan('dev'))
app.use(helmet())

app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.ORIGIN_URL || 'http://localhost:5173',
}))
app.use(express.json())
// app.use(auth)


// app.get('/', (req, res) => {
//     res.send('Home')
// })

app.get('/protected', auth, (req, res, next) => {
    // console.log('protected route')
    res.send({"authorized": true})
})

app.get('/logout', (req, res, next) => {
    // res.cookie('jwt', '', { httpOnly: true, sameSite: 'None', secure: true })
    res.send({"message": "Successfully logged out"})
})

app.use(authRoutes)
app.use(mainRoutes)

app.use((err, req, res, next) => {
    // console.log(err)
    res.status(500).send({error: 'Unknown Error!!!'})
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Listening on port ' + process.env.PORT);
})
