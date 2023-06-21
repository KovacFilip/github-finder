import { Grid, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Organizations } from "../components/Organizations";
import { Repos } from "../components/Repos";
import { SearchBar } from "../components/SearchBar";
import { User } from "../components/User";
import { RootState } from "../store";

export const Layout: React.FC = () => {
    const user = useSelector((state: RootState) => state.githubUserSlice.user);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <SearchBar />
            </Grid>
            {user && (
                <Grid container item xs={12} spacing={3}>
                    <Grid item md={12} lg={6}>
                        <Stack spacing={3}>
                            <User />
                            <Organizations />
                        </Stack>
                    </Grid>
                    <Grid item md={12} lg={6}>
                        <Repos />
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
};
