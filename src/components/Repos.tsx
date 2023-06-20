import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserRepos } from "../api/api";
import { PaperWrapper } from "./PaperWrapper";
import { Repo } from "./Repo";

export const Repos: React.FC = () => {
    const [repos, setRepos] = useState<Repo[] | undefined>(undefined);

    useEffect(() => {
        getUserRepos("Kiwi").then((res) => {
            const newRepos = res.data.map((repo: any) => {
                const newRepo: Repo = {
                    reponame: repo.name,
                    date: repo.created_at,
                    url: repo.svn_url,
                };

                return newRepo;
            });
            setRepos(newRepos);
        });
    }, []);

    const reposObjects = repos ? (
        repos.map((repo: Repo, index: number) => {
            return <Repo key={index} repo={repo} />;
        })
    ) : (
        <div></div>
    );

    return (
        <PaperWrapper title="Repositories">
            <Grid container spacing={4}>
                {reposObjects}
            </Grid>
        </PaperWrapper>
    );
};
