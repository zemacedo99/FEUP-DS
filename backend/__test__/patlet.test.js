const createServer = require("../server.js")
const axios = require("axios")

let server

jest.setTimeout(40000)

beforeAll(() => {
    server = createServer()
});
  
afterAll(() => {
    server.close()
});

test('Testing getAllPatlets', async () => {
    const patlets = (await axios.get("http://localhost:3000/patlets")).data
    patlets.forEach(patlet => {
        expect(patlet.hasOwnProperty('id')).toBeTruthy()
        expect(patlet.hasOwnProperty('image')).toBeTruthy()
        expect(patlet.hasOwnProperty('introduction')).toBeTruthy()
        expect(patlet.hasOwnProperty('linkedPatlets')).toBeTruthy()
        expect(patlet.hasOwnProperty('problem')).toBeTruthy()
        expect(patlet.hasOwnProperty('solution')).toBeTruthy()
        expect(patlet.hasOwnProperty('stars')).toBeTruthy()
        expect(patlet.hasOwnProperty('title')).toBeTruthy()
    });
    expect(patlets).toHaveLength(94)
})

test('Testing patlets', async () => {
    let patlet
    for (let i = 1; i < 95; i++)
    {
        patlet = (await axios.get("http://localhost:3000/patlets/" + i)).data
        expect(patlet.hasOwnProperty('id')).toBeTruthy()
        expect(patlet.hasOwnProperty('image')).toBeTruthy()
        expect(patlet.hasOwnProperty('introduction')).toBeTruthy()
        expect(patlet.hasOwnProperty('linkedPatlets')).toBeTruthy()
        expect(patlet.hasOwnProperty('problem')).toBeTruthy()
        expect(patlet.hasOwnProperty('solution')).toBeTruthy()
        expect(patlet.hasOwnProperty('stars')).toBeTruthy()
        expect(patlet.hasOwnProperty('title')).toBeTruthy()
        expect(patlet.id).toBe(i)
    }
})
