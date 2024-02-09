import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const app = fastify();
const prisma = new PrismaClient();

// GET POST PUT DELETE PATCH HEAD OPTIONS

app.post('/polls', async (req, res) => {
    const createPollBody = z.object({
        title: z.string(),
        // options: z.array(z.string())
    });
    
    const { title } = createPollBody.parse(req.body);

    const poll = await prisma.poll.create({
        data: {
            title,
        }
    });

    console.log('Created poll:');
    console.table(poll);
    
    return res.status(201).send({ "pollId": poll.id });
})

app.listen({port: 3333}).then(() => {
    console.log("HTTP server is running...");
});