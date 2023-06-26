import { Grid, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ProfilePicture } from "../styledMuiComponents/ProfilePicture";
import { PaperButton } from "./PaperButton";
import { PaperWrapper } from "./PaperWrapper";

export const SelectedOrganization: React.FC = () => {
    const organization = useSelector(
        (state: RootState) => state.selectedOrganizationSlice.organization
    );

    return (
        <>
            {organization && (
                <PaperWrapper title={organization.name}>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <ProfilePicture
                                src={organization.img_url}
                                alt="organizationImg"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={8}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Stack>
                                {organization.description &&
                                    organization.description !== "" && (
                                        <Typography variant="body1">
                                            {organization.description}
                                        </Typography>
                                    )}

                                {organization.websiteUrl && (
                                    <PaperButton
                                        onClick={() => {
                                            window.open(
                                                organization.websiteUrl
                                            );
                                        }}
                                    >
                                        Visit Website
                                    </PaperButton>
                                )}

                                {organization.githubUrl && (
                                    <PaperButton
                                        onClick={() => {
                                            window.open(organization.githubUrl);
                                        }}
                                    >
                                        Visit GitHub
                                    </PaperButton>
                                )}
                            </Stack>
                        </Grid>
                    </Grid>
                </PaperWrapper>
            )}
        </>
    );
};
