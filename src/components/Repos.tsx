import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserRepos } from "../api/api";
import { SectionPaper } from "../styledMuiComponents/SectionPaper";
import { Repo } from "./Repo";

export const Repos: React.FC = () => {
    const [repos, setRepos] = useState<Repo[] | undefined>(undefined);

    useEffect(() => {
        getUserRepos("KovacFilip").then((res) => {
            const newRepos = res.data.map((repo: any) => {
                const newRepo: Repo = {
                    reponame: repo.name,
                    date: repo.created_at,
                    url: repo.url,
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
        <SectionPaper elevation={16}>
            <Grid container>{reposObjects}</Grid>
        </SectionPaper>
    );
};
