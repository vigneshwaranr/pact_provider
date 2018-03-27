import buildServer from './app/server'

let app = buildServer()
app.listen(process.env.BOOK_API_PORT, () => { console.log(`User API started on port ${process.env.BOOK_API_PORT}`) })