import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMobileAppOpen: false,
    isSimulatorOpen: false,
};

const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        openMobileNav: (state) => {
            state.isMobileAppOpen = true;
        },

        closeMobileNav: (state) => {
            state.isMobileAppOpen = false;
        },
        openMobileSimulator: (state) => {
            console.log("clicked");
            state.isSimulatorOpen = true;
        },

        closeMobileSimulator: (state) => {
            state.isSimulatorOpen = false;
        },
    },
});

export const { openMobileNav, closeMobileNav, openMobileSimulator, closeMobileSimulator } =
    navSlice.actions;
export default navSlice.reducer;
