import { Selector } from "testcafe";

fixture`Homepage`.page`http://127.0.0.1:8080/guide/`;

//then create a test and place your code there
test("Smoke Test", async t => {
  await t
    .expect(Selector("h2").innerText)
    .eql("About the ER Frontend Design System");
});
