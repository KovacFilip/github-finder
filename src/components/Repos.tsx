import { CircularProgress, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { PaperWrapper } from "./PaperWrapper";
import { Repo } from "./Repo";

export const Repos: React.FC = () => {
    const repos = useSelector(
        (state: RootState) => state.githubUserSlice.repos
    );

    const loading = useSelector(
        (state: RootState) => state.githubUserSlice.loading
    );

    const reposObjects =
        repos && !loading
            ? repos.map((repo: Repo, index: number) => {
                  return <Repo key={index} repo={repo} />;
              })
            : "";

    return (
        <>
            {reposObjects.length === 0 && !loading && (
                <PaperWrapper title="Repositories">
                    <Typography variant="body1">
                        User does not have any public repositories
                    </Typography>
                </PaperWrapper>
            )}
            {reposObjects.length > 0 && !loading && (
                <PaperWrapper title="Repositories">
                    <Grid container spacing={4}>
                        {reposObjects}
                    </Grid>
                </PaperWrapper>
            )}
            {loading && (
                <PaperWrapper>
                    <CircularProgress />
                </PaperWrapper>
            )}
        </>
    );
};
