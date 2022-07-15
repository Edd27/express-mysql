import mysql from 'promise-mysql'
import config from '../config'

const connection = mysql.createConnection({
  host: config.dbHost,
  database: config.dbName,
  user: config.dbUser,
  password: config.dbPassword
})

export const getConnection = () => connection
