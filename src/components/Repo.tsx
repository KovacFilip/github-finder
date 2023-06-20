import { Grid, Paper, Stack } from "@mui/material";
import { dateDisplay } from "../helpers/dateDisplay";

interface repoProps {
    repo: Repo;
}

export const Repo: React.FC<repoProps> = ({ repo }) => {
    return (
        <Grid item xs={6}>
            <Paper
                onClick={() => {
                    console.log("hello");
                    window.open(repo.url);
                }}
                elevation={4}
                sx={{
                    borderRadius: "16px",
                    padding: "10px",
                    "&:hover": {
                        cursor: "pointer",
                        boxShadow: 20,
                    },
                }}
            >
                <Stack>
                    <div>{repo.reponame}</div>
                    <div>{dateDisplay(repo.date)}</div>
                </Stack>
            </Paper>
        </Grid>
    );
};
