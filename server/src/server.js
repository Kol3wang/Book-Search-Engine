import express from 'express';
import path from 'node:path';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { json } from 'body-parser';
import db from './config/connection.js';
import typeDefs from './schema/typeDefs';
import resolvers from './schema/resolvers';
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
// Initialize Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Start Apollo Server
(async () => {
    await server.start();
    app.use('/graphql', json(), expressMiddleware(server));
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`🌍 Now listening on http://localhost:${PORT}`);
            console.log(`🚀 GraphQL playground available at http://localhost:${PORT}/graphql`);
        });
    });
})();
