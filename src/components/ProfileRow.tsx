import { Grid, Typography } from "@mui/material";

interface rowProps {
    rowName: string;
    rowValue: string;
}

export const ProfileRow: React.FC<rowProps> = ({ rowName, rowValue }) => {
    return (
        <Grid
            container
            item
            xs={12}
            spacing={2}
            sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
        >
            <Grid
                item
                xs={6}
                lg={7}
                xl={6}
                sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                }}
            >
                <Typography variant="h6">{rowName}</Typography>
            </Grid>
            <Grid
                item
                xs={6}
                lg={5}
                xl={6}
                sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {rowValue}
                </Typography>
            </Grid>
        </Grid>
    );
};
