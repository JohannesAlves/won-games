import fetch, { Headers, Request, Response } from "node-fetch";

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
    globalThis.Headers = Headers;
    globalThis.Request = Request;
    globalThis.Response = Response;
}
import { server } from "../src/utils/mockServer/server";

beforeAll(() => {
    // listen all calls on tests
    server.listen();
});

afterEach(() => {
    // reset all handlers if they are called
    server.resetHandlers();
});

afterAll(() => {
    // close server and clean tests
    server.close();
});
