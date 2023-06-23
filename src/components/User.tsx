import { Button, CircularProgress, Grid, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { dateDisplay } from "../helpers/dateDisplay";
import { RootState } from "../store";
import { ProfilePicture } from "../styledMuiComponents/ProfilePicture";
import { PaperWrapper } from "./PaperWrapper";
import { ProfileRow } from "./ProfileRow";

export const User: React.FC = () => {
    const user = useSelector((state: RootState) => state.githubUserSlice.user);
    const loading = useSelector(
        (state: RootState) => state.githubUserSlice.loading
    );

    return (
        <>
            {!loading && user && (
                <PaperWrapper title="Profile">
                    <Grid
                        container
                        sx={{
                            alignItems: "center",
                        }}
                    >
                        <Grid item xs={12} md={5} sx={{}}>
                            <ProfilePicture
                                src={user.avatarUrl}
                                alt="profilePic"
                            />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Stack>
                                <ProfileRow
                                    rowName="Username:"
                                    rowValue={user.username}
                                />

                                {user.email && (
                                    <ProfileRow
                                        rowName="Email:"
                                        rowValue={user.email}
                                    />
                                )}
                                <ProfileRow
                                    rowName="Created:"
                                    rowValue={dateDisplay(user.created)}
                                />
                                <ProfileRow
                                    rowName="Followers:"
                                    rowValue={user.followers.toString()}
                                />
                                <ProfileRow
                                    rowName="Following:"
                                    rowValue={user.following.toString()}
                                />
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            window.open(user.githubUrl);
                                        }}
                                        sx={{
                                            width: "150px",
                                            marginTop: "20px",
                                            mx: "auto",
                                            display: {
                                                xs: "block",
                                                sm: "inline-block",
                                            },
                                        }}
                                    >
                                        Visit profile
                                    </Button>
                                </Grid>
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
