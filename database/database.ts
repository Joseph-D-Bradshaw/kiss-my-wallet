import { Database } from "sqlite3"

export const createDataBase = () => {
    const db = new Database('base-db.sqlite', (err) => {
        err ? console.log(err) : console.log('Successfully connected to database')
    })

    const createUserTableSql = `
        CREATE TABLE IF NOT EXISTS User (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )
    `

    const createCategoryTableSql = `
        CREATE TABLE IF NOT EXISTS Category (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            budget REAL,
            user_id INTEGER NOT NULL,
            FOREIGN KEY (user_id) REFERENCES User(id)
        )
    `

    const createTransactionTableSql = `
        create TABLE IF NOT EXISTS Transaction (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT NOT NULL,  -- ISO-8601 date string
            amount REAL NOT NULL,
            user_id INTEGER NOT NULL,
            FOREIGN KEY (user_id) REFERENCES User(id),
            category_id INTEGER NOT NULL,
            FOREIGN KEY (category_id) REFERENCES Category(id)
        )
    `

    db.run(createUserTableSql, (err) => {
        err ? console.log(err) : console.log('Created User table')
    })

    return db
}