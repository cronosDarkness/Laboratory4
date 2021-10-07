const httpFunctions = require('./index');
const context = require('../testing/Context');

test('Http trigger example', async() => {
    const request = {
        query : { name: 'JesusCastro' }
    };

    await httpFunctions(context, request);
    expect(context.res.body).toContain('W');
    expect(context.res.body).toEqual('Welcome, JesusCastro');
    expect(context.log.mock.calls.length).toBe(2);
});