import {
    FormControlLabel,
    Grid,
    Stack,
    Switch,
    TextField,
} from "@mui/material";
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
            <Grid container spacing={1}>
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
                            {t("home")}
                        </NavButton>
                    )}
                </Grid>
                <Grid item xs={6} md={10}>
                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{
                            justifyContent: "center",
                        }}
                    >
                        <TextField
                            error={errorLoading}
                            helperText={
                                errorLoading ? "Unable to find the user" : ""
                            }
                            variant="outlined"
                            label={t("findUser")}
                            inputRef={inputRef}
                        />
                        <NavButton onClick={loadData}>{t("search")}</NavButton>
                    </Stack>
                </Grid>
                <Grid item xs={3} md={1}>
                    <FormControlLabel
                        control={<Switch onChange={handleUpdateTheme} />}
                        label={t("darkMode")}
                    />
                </Grid>
            </Grid>
        </PaperWrapper>
    );
};
