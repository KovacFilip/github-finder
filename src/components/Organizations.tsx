import { CircularProgress, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Organization } from "./Organization";
import { PaperWrapper } from "./PaperWrapper";

export const Organizations: React.FC = () => {
    const { t } = useTranslation("userInfo");
    const organizations = useSelector(
        (state: RootState) => state.githubUserSlice.organizations
    );

    const loading = useSelector(
        (state: RootState) => state.githubUserSlice.loading
    );

    const orgsObjs =
        organizations && !loading
            ? organizations.map((org, index) => (
                  <Organization key={index} organization={org} />
              ))
            : "";

    return (
        <>
            {!loading && orgsObjs.length > 0 && (
                <PaperWrapper title={t('organizations.organizations')}>
                    <Grid container>{orgsObjs}</Grid>
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
