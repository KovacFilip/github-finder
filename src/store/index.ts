import { configureStore } from "@reduxjs/toolkit";
import { githubUserSlice } from "./githubUserSlice";
import { selectedOrganizationSlice } from "./selectedOrganizationSlice";

export const store = configureStore({
    reducer: {
        githubUserSlice: githubUserSlice.reducer,
        selectedOrganizationSlice: selectedOrganizationSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type StoreDispatch = typeof store.dispatch;
