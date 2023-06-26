import { Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ProfilePicture } from "../styledMuiComponents/ProfilePicture";
import { PaperButton } from "./PaperButton";
import { PaperWrapper } from "./PaperWrapper";

export const SelectedOrganization: React.FC = () => {
    const { t } = useTranslation("organization");

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
                                        {t("visitWebsite")}
                                    </PaperButton>
                                )}

                                {organization.githubUrl && (
                                    <PaperButton
                                        onClick={() => {
                                            window.open(organization.githubUrl);
                                        }}
                                    >
                                        {t("visitGitHub")}
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
