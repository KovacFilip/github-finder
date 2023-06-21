import {
    Box,
    Button,
    CircularProgress,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { dateDisplay } from "../helpers/dateDisplay";
import { RootState } from "../store";
import { ProfilePicture } from "../styledMuiComponents/ProfilePicture";
import { PaperWrapper } from "./PaperWrapper";

export const User: React.FC = () => {
    const user = useSelector((state: RootState) => state.githubUserSlice.user);
    const loading = useSelector(
        (state: RootState) => state.githubUserSlice.loading
    );

    return (
        <>
            {!loading && user && (
                <PaperWrapper title="Profile">
                    <Grid container sx={{ alignItems: "center" }}>
                        <Grid item xs={5}>
                            <ProfilePicture
                                src={user.avatarUrl}
                                alt="profilePic"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Stack>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    sx={{
                                        alignItems: "center",
                                    }}
                                >
                                    <Box sx={{ width: "80px" }}>
                                        <Typography variant="body2">
                                            Username:
                                        </Typography>
                                    </Box>
                                    <Typography variant="h6">
                                        {user.username}
                                    </Typography>
                                </Stack>

                                {user.email && (
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        sx={{ alignItems: "center" }}
                                    >
                                        <Box sx={{ width: "80px" }}>Email:</Box>
                                        <Typography variant="h6">
                                            {user.email}
                                        </Typography>
                                    </Stack>
                                )}

                                <Stack
                                    direction="row"
                                    spacing={2}
                                    sx={{ alignItems: "center" }}
                                >
                                    <Box sx={{ width: "80px" }}>
                                        <Typography variant="body2">
                                            Created:
                                        </Typography>
                                    </Box>
                                    <Typography variant="body1">
                                        {dateDisplay(user.created)}
                                    </Typography>
                                </Stack>
                                <Grid container spacing={2}>
                                    <Grid item xs="auto">
                                        <Typography variant="body2">
                                            Followers: {user.followers}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs="auto">
                                        <Typography variant="body2">
                                            Following: {user.following}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Button
                                    variant="text"
                                    onClick={() => {
                                        window.open(user.githubUrl);
                                    }}
                                    sx={{ width: "150px" }}
                                >
                                    Visit profile
                                </Button>
                            </Stack>
                        </Grid>
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
