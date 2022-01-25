import { Selector, ClientFunction } from "testcafe";

fixture`Getting Started`.page`http://localhost:3000/`;

test("Click on about", async (t) => {
  await t
    .click("[data-testid=about_button]")
    .expect(Selector("h1").innerText)
    .eql("About");
});

test("Click on bookmarks", async (t) => {
  await t
    .click(Selector("[data-testid=bookmarks_button]"))
    .expect(Selector("h1").innerText)
    .eql("Bookmarks");
});

test("Click on first pattern", async (t) => {
  const name = await Selector(".card-title").innerText;
  console.log(name);

  await t.click(Selector(".card")).expect(Selector("h1").innerText).eql(name);
});

const localStorageGet = ClientFunction((key) => localStorage.getItem(key));

test("Click on first pattern favorite button and verify localStorage", async (t) => {
  await t.click(Selector(".card [role=button]"));
  t.expect(await localStorageGet("favorites")["1"]);

  await t.click(Selector(".card [role=button]"));
  t.expect(Object.keys(await localStorageGet("favorites")).length == 0);
});

test("Click on first pattern bookmark button and verify localStorage", async (t) => {
  await t.click(Selector(".card [role=button]:not(:first-of-type)"));
  t.expect(await localStorageGet("bookmarks")["1"]);

  await t.click(Selector(".card [role=button]:not(:first-of-type)"));
  t.expect(Object.keys(await localStorageGet("bookmarks")).length == 0);
});

test("Search test", async (t) => {
  const patternTitle = "High Value First";
  await t
    .typeText("[data-testid=search-input]", patternTitle)
    .pressKey("enter");

  await t.expect(Selector(".card-title").innerText).eql(patternTitle);
});
