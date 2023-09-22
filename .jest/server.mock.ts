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
