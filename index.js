import express from "express";
import bodyParser from "body-parser";
import { getFaqs, createFaqs } from "./database.js";

const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
    PORT,
    () => {
        console.log(`Bienvenue sur http://localhost:${PORT}`)
})

app.get('/faqs', async (req, res) => {
    const faqs = await getFaqs()
    res.send(faqs)

});


app.post("/faqs", async (req, res) => {
    const {question, reponse, ouvert} = req.body
    const faq = await createFaqs(question, reponse, ouvert)
    res.status(201).send(faq)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
