import { Grid, Typography } from "@mui/material";

interface rowProps {
    rowName: string;
    rowValue: string;
}

export const ProfileRow: React.FC<rowProps> = ({ rowName, rowValue }) => {
    return (
        <Grid
            container
            spacing={6}
            sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
        >
            <Grid item xs={3} sm={2} md={3} lg={4}>
                <Typography variant="h6">{rowName}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {rowValue}
                </Typography>
            </Grid>
        </Grid>
    );
};
