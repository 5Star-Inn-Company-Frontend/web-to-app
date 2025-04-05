import { IAppState } from "@/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAppState = {
    id: null,
    name: "",
    url: "",
    description: "",
    plan: "",
    last_saved: "",
    member_count: 0,
    private_link: "",
    public_link: "",
};

const appState = createSlice({
    name: "appState",
    initialState,
    reducers: {
        updateAppState: (state: IAppState, action: PayloadAction<IAppState>) => {
            return { ...state, ...action.payload };
        },

        updateName: (state: IAppState, action: PayloadAction<string>) => {
            state.name = action.payload;
        },

        updateDescription: (state: IAppState, action: PayloadAction<string>) => {
            state.description = action.payload;
        },

        updatePlan: (state: IAppState, action: PayloadAction<string>) => {
            state.plan = action.payload;
        },

        updateUrl: (state: IAppState, action: PayloadAction<string>) => {
            state.url = action.payload;
        },
    },
});

export const { updateAppState, updateDescription, updateName, updatePlan, updateUrl } =
    appState.actions;

export default appState.reducer;

export { initialState as defaultAppState };
