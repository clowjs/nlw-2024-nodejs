import fastify from 'fastify'

const app = fastify()

// GET POST PUT DELETE PATCH HEAD OPTIONS

interface Poll {
    title: string
    options: string[]
}

app.post('/polls', (req) => {
    console.log(req.body)
})

app.listen({port: 3333}).then(() => {
    console.log("HTTP server is running...");
})

// Drivers Nativo

// ORM - Object Relational Mapping