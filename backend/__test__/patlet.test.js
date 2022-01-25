import createServer from './server.js';
const axios = require("axios");

let server;

jest.setTimeout(40000);

beforeAll(() => {
  server = createServer();
});

afterAll(() => {
  server.close();
});

test("Testing getAllPatlets", async () => {
  const patlets = (await axios.get("http://localhost:3000/patlets")).data;
  patlets.forEach((patlet) => {
    expect(Object.prototype.hasOwnProperty.call(patlet, "id")).toBeTruthy();
    expect(Object.prototype.hasOwnProperty.call(patlet, "image")).toBeTruthy();
    expect(
      Object.prototype.hasOwnProperty.call(patlet, "introduction")
    ).toBeTruthy();
    expect(
      Object.prototype.hasOwnProperty.call(patlet, "linkedPatlets")
    ).toBeTruthy();
    expect(
      Object.prototype.hasOwnProperty.call(patlet, "problem")
    ).toBeTruthy();
    expect(
      Object.prototype.hasOwnProperty.call(patlet, "solution")
    ).toBeTruthy();
    expect(Object.prototype.hasOwnProperty.call(patlet, "stars")).toBeTruthy();
    expect(Object.prototype.hasOwnProperty.call(patlet, "title")).toBeTruthy();
  });
  expect(patlets).toHaveLength(94);
});

test("Testing patlets", async () => {
  let patlet;
  for (let i = 1; i < 95; i += 1) {
    // eslint-disable-next-line
    patlet = (await axios.get(`http://localhost:3000/patlets/${i}`)).data;
    expect(Object.prototype.hasOwnProperty.call(patlet, "id")).toBeTruthy();
    expect(Object.prototype.hasOwnProperty.call(patlet, "image")).toBeTruthy();
    expect(
      Object.prototype.hasOwnProperty.call(patlet, "introduction")
    ).toBeTruthy();
    expect(
      Object.prototype.hasOwnProperty.call(patlet, "linkedPatlets")
    ).toBeTruthy();
    expect(
      Object.prototype.hasOwnProperty.call(patlet, "problem")
    ).toBeTruthy();
    expect(
      Object.prototype.hasOwnProperty.call(patlet, "solution")
    ).toBeTruthy();
    expect(Object.prototype.hasOwnProperty.call(patlet, "stars")).toBeTruthy();
    expect(Object.prototype.hasOwnProperty.call(patlet, "title")).toBeTruthy();
    expect(patlet.id).toBe(i);
  }
});

test("Testing search", async () => {
  const patlets = (
    await axios.get("http://localhost:3000/search?query=Value+Areas")
  ).data;
  const firstPatlet = patlets[0];
  expect(firstPatlet.title).toBe("Value Areas");
});

test("Testing search", async () => {
  const patlets = (
    await axios.get("http://localhost:3000/search?query=Product+Wake")
  ).data;
  const firstPatlet = patlets[0];
  expect(firstPatlet.title).toBe("Product Wake");
});

test("Testing search", async () => {
  const patlets = (
    await axios.get("http://localhost:3000/search?query=Greatest+Value")
  ).data;
  const firstPatlet = patlets[0];
  expect(firstPatlet.title).toBe("Greatest Value");
});
