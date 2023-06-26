import SearchIcon from "@mui/icons-material/Search";
import { Box, Grid, Stack, TextField, Tooltip } from "@mui/material";
import { useContext, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { DARK, LIGHT } from "../constants/theme";
import { ThemeContext } from "../context/DarkModeContextProvider";
import { fetchOrganizationsAndSetStore } from "../helpers/fetchOrganizationsAndSetStore";
import { fetchReposAndSetStore } from "../helpers/fetchReposAndSetStore";
import { fetchUserAndSetStore } from "../helpers/fetchUserAndSetStore";
import { RootState } from "../store";
import {
    removeCurrentUser,
    setError,
    startLoading,
    stopLoading,
} from "../store/githubUserSlice";
import { removeOrganization } from "../store/selectedOrganizationSlice";
import { DarkModeSwitch } from "../styledMuiComponents/darkModeSwitch";
import { LanguagesSwap } from "./LanguagesSwap";
import { NavButton } from "./NavButton";
import { PaperWrapper } from "./PaperWrapper";

export const SearchBar: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { t } = useTranslation("searchBar");
    const dispatch = useDispatch();
    const errorLoading = useSelector(
        (state: RootState) => state.githubUserSlice.error
    );
    const user = useSelector((state: RootState) => state.githubUserSlice.user);

    const themeCtx = useContext(ThemeContext);

    const handleUpdateTheme = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (ev.target.checked) {
            themeCtx.setTheme(DARK);
        } else {
            themeCtx.setTheme(LIGHT);
        }
    };

    const loadData = async () => {
        try {
            dispatch(startLoading());
            dispatch(removeOrganization());

            const username = inputRef.current!.value;
            await fetchUserAndSetStore(dispatch, username);
            await fetchReposAndSetStore(dispatch, username);
            await fetchOrganizationsAndSetStore(dispatch, username);

            inputRef.current!.value = "";
            dispatch(setError(false));
        } catch (error) {
            dispatch(setError(true));
        } finally {
            dispatch(stopLoading());
        }
    };

    const goHomeHandler = () => {
        dispatch(removeCurrentUser());
    };

    return (
        <PaperWrapper>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={3}
                    md={1}
                    justifyContent="center"
                    alignItems="center"
                >
                    {!user && <LanguagesSwap />}
                    {user && (
                        <NavButton onClick={goHomeHandler} variant="text">
                            <Box sx={{ fontWeight: "bold" }}>{t("home")}</Box>
                        </NavButton>
                    )}
                </Grid>
                <Grid item xs={7} md={10}>
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                            justifyContent: "center",
                        }}
                    >
                        <TextField
                            error={errorLoading}
                            helperText={errorLoading ? t("error") : ""}
                            variant="outlined"
                            label={t("findUser")}
                            inputRef={inputRef}
                            onKeyDown={(
                                event: React.KeyboardEvent<HTMLInputElement>
                            ) => {
                                if (event.key === "Enter") {
                                    loadData();
                                }
                            }}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                "&:hover": {
                                    cursor: "pointer",
                                    color: "primary.main",
                                },
                            }}
                            onClick={loadData}
                        >
                            <Tooltip title={t("search")}>
                                <SearchIcon fontSize="large" />
                            </Tooltip>
                        </Box>
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={2}
                    md={1}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <DarkModeSwitch onChange={handleUpdateTheme} />
                </Grid>
            </Grid>
        </PaperWrapper>
    );
};
