import { Grid, Stack } from "@mui/material";

interface repoProps {
    repo: Repo;
}

export const Repo: React.FC<repoProps> = ({ repo }) => {
    return (
        <Grid item xs={6} md={12}>
            <Stack>
                <div>{repo.reponame}</div>
                <div>{repo.date}</div>
                <a href={repo.url}>{repo.url}</a>
            </Stack>
        </Grid>
    );
};
