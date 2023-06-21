interface User {
    username: string;
    bio: string;
    avatarUrl: string;
    githubUrl: string;
    email: string;
    followers: number;
    following: number;
    created: string;
}

interface Repo {
    reponame: string;
    date: string;
    url: string;
}

interface Organization {
    name: string;
    img_url: string;
    description: string;
}
