import express from 'express'

export default function buildServer() {

    let app = express().use(express.json())

    app.get('/books', (req, res) => {
        console.log(req.query.ids)
        let ids = req.query.ids.split(',')
        let books = ids.map((id) => {
            return {
                id: id,
                name: `Book ${id}`
            }
        })
        return res.json(books)
    })

    app.use(function (err, req, res, next) {
        console.error(err.stack)
        res.status(500).json({
            error: err.message
        })
    })

    return app
}