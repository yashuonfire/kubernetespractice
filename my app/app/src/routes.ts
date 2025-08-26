import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => res.status(200).json({ status: 'ok' }));

router.post('/sum', (req, res) => {
const { a, b } = req.body || {};
if (typeof a !== 'number' || typeof b !== 'number') {
return res.status(400).json({ error: 'a and b must be numbers' });
}
return res.json({ result: a + b });
});

router.get('/', (_req, res) => res.send('Hello from myapp v1!'));

export default router;
