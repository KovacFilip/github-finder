import { CircularProgress, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { PaperWrapper } from "./PaperWrapper";
import { Repo } from "./Repo";

export const Repos: React.FC = () => {
    const { t } = useTranslation("userInfo");

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
                <PaperWrapper title={t("repos.repos")}>
                    <Typography variant="body1">
						{t('repos.noRepos')}
                    </Typography>
                </PaperWrapper>
            )}
            {reposObjects.length > 0 && !loading && (
                <PaperWrapper title={t("repos.repos")}>
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
