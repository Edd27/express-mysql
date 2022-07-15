import { config } from 'dotenv'

config()

export default {
  port: process.env.PORT || 4000,
  dbHost: process.env.DB_HOST || '',
  dbName: process.env.DB_NAME || '',
  dbUser: process.env.DB_USER || '',
  dbPassword: process.env.DB_PASSWORD || ''
}
