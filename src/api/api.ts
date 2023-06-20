import axios from "axios";

const client = axios.create({
    baseURL: "https://api.github.com",
});

export const getUser = (username: string) => {
    return client.get(`/users/${username}`);
};
