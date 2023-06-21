import { Button, Stack, TextField } from "@mui/material";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { getUser, getUserOrganizations, getUserRepos } from "../api/api";
import {
    setError,
    setOrganizations,
    setRepos,
    setUser,
    startLoading,
    stopLoading,
} from "../store/githubUserSlice";
import { PaperWrapper } from "./PaperWrapper";

export const SearchBar: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const showRef = async () => {
        dispatch(startLoading());
        const username = inputRef.current!.value;

        const userRes = await getUser(username);
        const userReposRes = await getUserRepos(username);
        const userOrgs = await getUserOrganizations(username);

        const userData = userRes.data;
        const user: User = {
            username: userData.login,
            avatarUrl: userData.avatar_url,
            bio: userData.bio,
            email: userData.email,
            created: userData.created_at,
            followers: userData.followers,
            following: userData.following,
            githubUrl: userData.html_url,
        };

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

        const organizations: Organization[] = [];
        const orgsData = userOrgs.data;

        for (let i = 0; i < orgsData.length; i++) {
            const currentOrg = orgsData[i];
            const org: Organization = {
                name: currentOrg.login,
                img_url: currentOrg.avatar_url,
                description: currentOrg.description,
            };
            organizations.push(org);
        }

        dispatch(setUser(user));
        dispatch(setRepos(repos));
        dispatch(setOrganizations(organizations));

        dispatch(stopLoading());
        try {
        } catch (error) {
            console.log("error", error);
            dispatch(setError(true));
        }
    };

    return (
        <PaperWrapper>
            <Stack
                direction="row"
                spacing={3}
                sx={{
                    justifyContent: "center",
                }}
            >
                <TextField
                    variant="outlined"
                    label="Find a user"
                    inputRef={inputRef}
                />
                <Button variant="contained" onClick={showRef}>
                    SEARCH
                </Button>
            </Stack>
        </PaperWrapper>
    );
};
