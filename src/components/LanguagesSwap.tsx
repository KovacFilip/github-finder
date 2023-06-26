import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const LanguagesSwap: React.FC = () => {
    const { i18n } = useTranslation();

    const changeToCzHandler = () => {
        i18n.changeLanguage("cs");
    };

    const changeToEnHandler = () => {
        i18n.changeLanguage("en");
    };

    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                display: "flex",
                height: "55px",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    typography: "body1",
                    color: i18n.language === "cs" ? "primary.main" : "",
                    fontWeight: "bold",
                    "&:hover": {
                        cursor: "pointer",
                    },
                }}
                onClick={changeToCzHandler}
            >
                CZ
            </Box>
            <Typography variant="body1">|</Typography>
            <Box
                sx={{
                    typography: "body1",
                    color: i18n.language === "en" ? "primary.main" : "",
                    fontWeight: "bold",
                    "&:hover": {
                        cursor: "pointer",
                    },
                }}
                onClick={changeToEnHandler}
            >
                EN
            </Box>
        </Stack>
    );
};
