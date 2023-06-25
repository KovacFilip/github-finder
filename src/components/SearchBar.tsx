import {
    Button,
    FormControlLabel,
    Grid,
    Stack,
    Switch,
    TextField,
} from "@mui/material";
import { useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DARK, LIGHT } from "../constants/theme";
import { ThemeContext } from "../context/DarkModeContextProvider";
import { fetchOrganizationsAndSetStore } from "../helpers/fetchOrganizationsAndSetStore";
import { fetchReposAndSetStore } from "../helpers/fetchReposAndSetStore";
import { fetchUserAndSetStore } from "../helpers/fetchUserAndSetStore";
import { RootState } from "../store";
import { setError, startLoading, stopLoading } from "../store/githubUserSlice";
import { PaperWrapper } from "./PaperWrapper";

export const SearchBar: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const errorLoading = useSelector(
        (state: RootState) => state.githubUserSlice.error
    );

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

    return (
        <PaperWrapper>
            <Grid container>
                <Grid item xs={10} md={11}>
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
                            label="Find a user"
                            inputRef={inputRef}
                        />
                        <Button variant="contained" onClick={loadData}>
                            SEARCH
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={2} md={1}>
                    <FormControlLabel
                        control={<Switch onChange={handleUpdateTheme} />}
                        label="Dark Mode"
                    />
                </Grid>
            </Grid>
        </PaperWrapper>
    );
};
