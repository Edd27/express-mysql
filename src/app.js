import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import languageRoutes from './routes/language.routes'

const app = express()

// Settings
app.set('port', process.env.PORT || 4000)

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/languages', languageRoutes)

export default app
