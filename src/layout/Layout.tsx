import { Grid } from "@mui/material";
import { Repos } from "../components/Repos";
import { SearchBar } from "../components/SearchBar";
import { User } from "../components/User";

interface LayoutProps {
    user: User;
}

export const Layout: React.FC<LayoutProps> = ({ user }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <SearchBar />
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <Grid item md={12} lg={6}>
                    <User user={user} />
                </Grid>
                <Grid item md={12} lg={6}>
                    <Repos />
                </Grid>
            </Grid>
        </Grid>
    );
};
