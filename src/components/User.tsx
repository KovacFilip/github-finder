import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { dateDisplay } from "../helpers/dateDisplay";
import { ProfilePicture } from "../styledMuiComponents/ProfilePicture";
import { PaperWrapper } from "./PaperWrapper";

interface userProps {
    user: User;
}

export const User: React.FC<userProps> = ({ user }) => {
    const {
        email,
        bio,
        username,
        avatarUrl,
        created,
        followers,
        following,
        githubUrl,
    } = user;

    return (
		<PaperWrapper title="Profile">

            <Grid container sx={{ alignItems: "center" }}>
                <Grid item xs={5}>
                    <ProfilePicture src={avatarUrl} alt="profilePic" />
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
                            <Typography variant="h6">{username}</Typography>
                        </Stack>

                        {email && (
                            <Stack
                                direction="row"
                                spacing={2}
                                sx={{ alignItems: "center" }}
                            >
                                <Box sx={{ width: "80px" }}>Email:</Box>
                                <Typography variant="h6">{email}</Typography>
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
                                {dateDisplay(created)}
                            </Typography>
                        </Stack>
                        <Grid container spacing={2}>
                            <Grid item xs="auto">
                                <Typography variant="body2">
                                    Followers: {followers}
                                </Typography>
                            </Grid>
                            <Grid item xs="auto">
                                <Typography variant="body2">
                                    Following: {following}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Button
                            variant="text"
                            onClick={() => {
								window.open(githubUrl);
                            }}
                            sx={{ width: "150px" }}
							>
                            Visit profile
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
							</PaperWrapper>
    );
};
