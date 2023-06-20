import axios from "axios";

const client = axios.create({
    baseURL: "https://api.github.com",
});

export const getUser = (username: string) => {
    return client.get(`/users/${username}`);
};

export const getUserRepos = (username: string) => {
    return client.get(`/users/${username}/repos`);
};

export const getUserOrganizations = (username: string) => {
    return client.get(`/users/${username}/orgs`);
};
