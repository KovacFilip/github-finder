import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const WelcomeComponent: React.FC = () => {
    const { t } = useTranslation("welcomePage");

    return (
        <Grid
            item
            sx={{
                height: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80vw",
                margin: "auto",
            }}
            container
            direction="column"
            spacing={2}
        >
            <Grid item>
                <Typography variant="h2" align="center">
                    GitHub Finder
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" align="center">
                    {t("appDescription")}
                </Typography>
            </Grid>
        </Grid>
    );
};
