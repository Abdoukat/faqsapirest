// const {createPool} = require('mysql');
import mysql from "mysql2";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "api-rest",
    connectionLimit: 10
}).promise()

export async function getFaqs() {
    const [rows] = await pool.query(`select * from faqs`)
    return rows
}

export async function createFaqs(question, reponse, ouvert) {
    const [res] = await pool.query(`insert into faqs (question, reponse, ouvert) values (?, ?, ?)`,
    [question, reponse, ouvert])
    return res.insertId
}
