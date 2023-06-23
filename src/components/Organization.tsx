import { Grid, Paper, Tooltip } from "@mui/material";

interface orgProps {
    organization: Organization;
}

export const Organization: React.FC<orgProps> = ({ organization }) => {
    return (
        <Grid item xs={4} sm={3} md={2} lg={3} xl={2}>
            <Tooltip title={organization.name}>
                <Paper
                    elevation={4}
                    sx={{
                        width: 100,
                        height: 100,
                        borderRadius: "100%",
                        "&:hover": {
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
