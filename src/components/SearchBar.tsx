import { Button, Stack, TextField } from "@mui/material";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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
            <Stack
                direction="row"
                spacing={3}
                sx={{
                    justifyContent: "center",
                }}
            >
                <TextField
                    error={errorLoading}
                    helperText={errorLoading ? "Unable to find the user" : ""}
                    variant="outlined"
                    label="Find a user"
                    inputRef={inputRef}
                />
                <Button variant="contained" onClick={loadData}>
                    SEARCH
                </Button>
            </Stack>
        </PaperWrapper>
    );
};
