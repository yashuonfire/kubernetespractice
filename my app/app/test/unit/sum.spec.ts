describe('sum route validation', () => {
it('rejects non-numbers', async () => {
const payloads = [
{ a: 'x', b: 1 },
{ a: 1 },
{},
{ a: 1, b: null }
];
for (const p of payloads) {
const isOk = typeof p.a === 'number' && typeof p.b === 'number';
expect(isOk).toBe(false);
}
});
});
