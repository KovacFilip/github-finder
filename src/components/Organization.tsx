import { Grid, Paper, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
    removeOrganization,
    setOrganization,
} from "../store/selectedOrganizationSlice";

interface orgProps {
    organization: Organization;
}

export const Organization: React.FC<orgProps> = ({ organization }) => {
    const selectedOrg = useSelector(
        (state: RootState) => state.selectedOrganizationSlice.organization
    );
    const dispatch = useDispatch();

    const selectOrganizationHandler = () => {
        if (selectedOrg && selectedOrg.name === organization.name) {
            dispatch(removeOrganization());
        } else {
            dispatch(setOrganization(organization));
        }
    };

    return (
        <Grid
            item
            xs={4}
            sm={3}
            md={2}
            lg={3}
            xl={2}
            onClick={selectOrganizationHandler}
        >
            <Tooltip title={organization.name}>
                <Paper
                    elevation={4}
                    sx={{
                        width: 100,
                        height: 100,
                        borderRadius: "100%",
                        boxShadow:
                            selectedOrg &&
                            selectedOrg?.name === organization.name
                                ? 20
                                : 0,
                        "&:hover": {
                            cursor: "pointer",
                            boxShadow: 20,
                        },
                    }}
                >
                    <img
                        src={organization.img_url}
                        alt="organization"
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: "100%",
                        }}
                    />
                </Paper>
            </Tooltip>
        </Grid>
    );
};
