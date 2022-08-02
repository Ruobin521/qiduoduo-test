import { createApp, close, createHttpRequest } from "@midwayjs/mock";
import { Framework } from "@midwayjs/web";
import { Application } from "egg";
import * as assert from 'assert';

describe("test/controller/user.test.ts", () => {
  let app: Application;

  beforeAll(async () => {
    // create app
    app = await createApp<Framework>();
  });

  afterAll(async () => {
    await close(app);
  });

  it("should POST /api/user/login", async () => {
    // make request
    const result = await createHttpRequest(app)
      .post("/api/user/login")
      .query({ username: '123',password:'21321' })
      .set('x-timeout', '1000');

    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.body.message).toBe("success");


    // or use assert
    assert.deepStrictEqual(result.status, 200);
    assert.deepStrictEqual(result.body.message, 'success');

  });
});
