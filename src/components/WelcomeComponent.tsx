import { Grid, Typography } from "@mui/material";

export const WelcomeComponent: React.FC = () => {
    return (
        <Grid
            item
            sx={{
                height: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80vw",
                margin: "auto",
            }}
            container
            direction="column"
            spacing={2}
        >
            <Grid item>
                <Typography variant="h2" align="center">
                    GitHub Finder
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" align="center">
                    GitHub Finder is a powerful tool that allows you to discover
                    and explore GitHub users effortlessly. Whether you're
                    looking for developers, open-source contributors, or simply
                    want to explore the coding world, this website provides you
                    with the ability to find any GitHub user and view their
                    public repositories and organizations.
                </Typography>
            </Grid>
        </Grid>
    );
};
