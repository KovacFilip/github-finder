import axios from "axios";

const client = axios.create({
    baseURL: "https://api.github.com",
});

// 404 - resource not found
export const getUser = (username: string) => {
    return client.get(`/users/${username}`);
};

// No error status
export const getUserRepos = (username: string) => {
    return client.get(`/users/${username}/repos`);
};

// No error status
export const getUserOrganizations = (username: string) => {
    return client.get(`/users/${username}/orgs`);
};
