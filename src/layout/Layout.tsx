import { Grid, Paper, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Organizations } from "../components/Organizations";
import { Repos } from "../components/Repos";
import { SearchBar } from "../components/SearchBar";
import { User } from "../components/User";
import { WelcomeComponent } from "../components/WelcomeComponent";
import { RootState } from "../store";

export const Layout: React.FC = () => {
    const user = useSelector((state: RootState) => state.githubUserSlice.user);

    return (
        <Paper
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "flex-start",
                overflow: "scroll",
                overflowX: "hidden",
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <SearchBar />
                </Grid>
                {!user && <WelcomeComponent />}
                {user && (
                    <Grid container item spacing={3}>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={3}>
                                <User />
                                <Organizations />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Repos />
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Paper>
    );
};
