const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com";

describe("JSONPlaceholder API", () => {

    test("GET /posts/1", async () => {
        const response = await axios.get(`${BASE_URL}/posts/1`);

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data.userId).toBe(1);
        expect(response.data).toHaveProperty("title");
        expect(response.data).toHaveProperty("body");
    });

    test("GET /users/1", async () => {
        const response = await axios.get(`${BASE_URL}/users/1`);

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data.name).toBe("Leanne Graham");
        expect(response.data.email).toBe("Sincere@april.biz");
    });

    test("GET /comments/1", async () => {
        const response = await axios.get(`${BASE_URL}/comments/1`);

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data.postId).toBe(1);
        expect(response.data).toHaveProperty("email");
    });

    test("GET /albums/1", async () => {
        const response = await axios.get(`${BASE_URL}/albums/1`);

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data.userId).toBe(1);
        expect(response.data.title).toBeTruthy();
    });

    test("GET /todos/1", async () => {
        const response = await axios.get(`${BASE_URL}/todos/1`);

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data.userId).toBe(1);
        expect(response.data.completed).toBe(false);
    });

});