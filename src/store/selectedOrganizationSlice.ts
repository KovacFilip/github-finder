import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface selectedOrganizationState {
    organization: Organization | undefined;
}

const initialState: selectedOrganizationState = {
    organization: undefined,
};

export const selectedOrganizationSlice = createSlice({
    name: "selectedOrganizationSlice",
    initialState: initialState,
    reducers: {
        setOrganization: (state, action: PayloadAction<Organization>) => {
            state.organization = action.payload;
        },
        removeOrganization: (state) => {
            state.organization = undefined;
        },
    },
});

export const { setOrganization, removeOrganization } =
    selectedOrganizationSlice.actions;
