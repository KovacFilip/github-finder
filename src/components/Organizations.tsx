import { CircularProgress, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Organization } from "./Organization";
import { PaperWrapper } from "./PaperWrapper";

export const Organizations: React.FC = () => {
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
                <PaperWrapper title="Organizations">
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
