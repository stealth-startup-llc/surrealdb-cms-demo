import { SurrealWebSocket } from "https://deno.land/x/surrealdb@v0.8.0/mod.ts";

const dbDraft = new SurrealWebSocket('ws://127.0.0.1:8001/rpc', {
    user: 'root',
    pass: 'password',
});

const dbPublished = new SurrealWebSocket('ws://127.0.0.1:8000/rpc', {
    user: 'root',
    pass: 'password',
});

async function connectToSurrealDB() {
    try {
        await dbDraft.connect('ws://127.0.0.1:8001/rpc', {
            user: 'root',
            pass: 'password',
        });
        await dbDraft.use({ ns: 'draft', db: 'draft' });
        console.log('Connected to Draft DB!');

        await dbPublished.connect('ws://127.0.0.1:8000/rpc', {
            user: 'root',
            pass: 'password',
        });
        await dbPublished.use({ ns: 'published', db: 'published' });
        console.log('Connected to Published DB!');
    } catch (error) {
        console.error('Error connecting to SurrealDB:', error);
    }
}

connectToSurrealDB();
