import { getUserRepos } from "../api/api";
import { StoreDispatch } from "../store";
import { setRepos } from "../store/githubUserSlice";

export const fetchReposAndSetStore = async (
    dispatch: StoreDispatch,
    username: string
) => {
    try {
        const userReposRes = await getUserRepos(username);
        const repos: Repo[] = [];
        const reposData = userReposRes.data;

        for (let i = 0; i < reposData.length; i++) {
            const currentRepo = reposData[i];
            const repo: Repo = {
                reponame: currentRepo.name,
                date: currentRepo.created_at,
                url: currentRepo.html_url,
            };

            repos.push(repo);
        }

        dispatch(setRepos(repos));
    } catch (error) {
        throw error;
    }
};
