import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface githubUserState {
    user: User | undefined;
    organizations: Organization[] | undefined;
    repos: Repo[] | undefined;
    loading: boolean;
    error: boolean;
}

const initialState: githubUserState = {
    user: undefined,
    organizations: undefined,
    repos: undefined,
    loading: false,
    error: false,
};

export const githubUserSlice = createSlice({
    name: "githubUserSlice",
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        setOrganizations: (state, action: PayloadAction<Organization[]>) => {
            state.organizations = action.payload;
        },
        setRepos: (state, action: PayloadAction<Repo[]>) => {
            state.repos = action.payload;
        },
        startLoading: (state) => {
            state.loading = true;
        },
        stopLoading: (state) => {
            state.loading = false;
        },
        setError: (state, action: PayloadAction<boolean>) => {
            state.error = action.payload;
        },
        removeCurrentUser: (state) => {
            state.user = undefined;
            state.organizations = undefined;
            state.repos = undefined;
        },
    },
});

export const {
    setUser,
    setOrganizations,
    setRepos,
    startLoading,
    stopLoading,
    setError,
    removeCurrentUser,
} = githubUserSlice.actions;
