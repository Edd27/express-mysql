import { getConnection } from '../database/database'

const getLanguages = async (req, res) => {
  try {
    const connection = await getConnection()
    const languages = await connection.query('SELECT * FROM language')
    res.json(languages).end()
  } catch (err) {
    res.status(500).json({ message: err.message }).end()
  }
}

const addLanguage = async (req, res) => {
  try {
    const connection = await getConnection()
    const { name, programmers } = req.body
    if (!name || !programmers) {
      return res.status(400).json({ message: 'Missing parameters' }).end()
    }
    await connection.query('INSERT INTO language SET ?', {
      name,
      programmers
    })
    res.status(201).json({ message: 'Language added successfully' }).end()
  } catch (err) {
    res.status(500).json({ message: err.message }).end()
  }
}

const getLanguage = async (req, res) => {
  try {
    const connection = await getConnection()
    const { id } = req.params
    const language = await connection.query(
      'SELECT * FROM language WHERE id = ?',
      id
    )
    if (!language[0]) {
      return res.status(404).json({ message: 'Language not found' }).end()
    }
    res.json(language[0]).end()
  } catch (err) {
    res.status(500).json({ message: err.message }).end()
  }
}

const deleteLanguage = async (req, res) => {
  try {
    const connection = await getConnection()
    const { id } = req.params
    const result = await connection.query(
      'DELETE FROM language WHERE id = ?',
      id
    )
    if (!result.affectedRows) {
      return res.status(404).json({ message: 'Language not found' }).end()
    }
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ message: err.message }).end()
  }
}

const updateLanguage = async (req, res) => {
  try {
    const connection = await getConnection()
    const { id } = req.params
    const { name, programmers } = req.body
    if (!name || !programmers) {
      return res.status(400).json({ message: 'Missing parameters' }).end()
    }
    const result = await connection.query(
      'UPDATE language SET ? WHERE id = ?',
      [{ name, programmers }, id]
    )
    if (!result.affectedRows) {
      return res.status(404).json({ message: 'Language not found' }).end()
    }
    res.json({ message: 'Language updated successfully' }).end()
  } catch (err) {
    res.status(500).json({ message: err.message }).end()
  }
}

export const methods = {
  getLanguages,
  addLanguage,
  getLanguage,
  deleteLanguage,
  updateLanguage
}
