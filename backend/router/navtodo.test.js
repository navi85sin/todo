const request = require("supertest");
const mongoose = require("mongoose")

// we also need our app for the correct routes!
const app = require('../app');

// demo test to check if Jest is working
test("arithmetic", function() {
  expect(4 + 4).toBeGreaterThan(7);
  expect(4 + 4).toBeLessThan(9);
});

// API testing on Get
describe("GET /navtodo/ ", () => {
  beforeAll( async () => {
     await mongoose.connect('mongodb://localhost/nav-todo', {
      useNewUrlParser: true,
    });
  });
  
  afterAll(async () => {
    await mongoose.connection.close();
  });

  // to test if api is returning anything
  test("Get list of todo from the url", async () => {
    const response = await request(app).get("/navtodo/");
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.statusCode).toBe(200);
  });
  // to create a snap shot
  it('Create a snapshot', async () => {
    const response = await request(app).get("/navtodo/");
     expect(response.body).toMatchSnapshot();
  });

});

