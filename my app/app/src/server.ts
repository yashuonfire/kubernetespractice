import express from 'express';
import routes from './routes.js';

export function createApp() {
const app = express();
app.use(express.json());
app.use('/', routes);
return app;
}

export function start() {
const port = process.env.PORT || 3000;
const app = createApp();
app.listen(port, () => console.log(`myapp listening on ${port}`));
}
