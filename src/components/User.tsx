import { CircularProgress, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { dateDisplay } from "../helpers/dateDisplay";
import { RootState } from "../store";
import { ProfilePicture } from "../styledMuiComponents/ProfilePicture";
import { PaperButton } from "./PaperButton";
import { PaperWrapper } from "./PaperWrapper";
import { ProfileRow } from "./ProfileRow";

export const User: React.FC = () => {
    const { t } = useTranslation("userInfo");
    const user = useSelector((state: RootState) => state.githubUserSlice.user);
    const loading = useSelector(
        (state: RootState) => state.githubUserSlice.loading
    );

    return (
        <>
            {!loading && user && (
                <PaperWrapper title={t("profile.profile")}>
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
                            <Grid container>
                                <ProfileRow
                                    rowName={t("profile.username")}
                                    rowValue={user.username}
                                />

                                {user.email && (
                                    <ProfileRow
                                        rowName={t("profile.email")}
                                        rowValue={user.email}
                                    />
                                )}
                                <ProfileRow
                                    rowName={t("profile.created")}
                                    rowValue={dateDisplay(user.created)}
                                />
                                <ProfileRow
                                    rowName={t("profile.followers")}
                                    rowValue={user.followers.toString()}
                                />
                                <ProfileRow
                                    rowName={t("profile.following")}
                                    rowValue={user.following.toString()}
                                />
                                <Grid
                                    item
                                    xs={12}
                                    sx={{
                                        display: "flex",
                                    }}
                                >
                                    <PaperButton
                                        onClick={() => {
                                            window.open(user.githubUrl);
                                        }}
                                    >
                                        {t("profile.visitProfile")}
                                    </PaperButton>
                                </Grid>
                            </Grid>
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
