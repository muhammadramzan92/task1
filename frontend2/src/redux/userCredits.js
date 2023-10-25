import { createSlice } from "@reduxjs/toolkit";

const creditsSlice = createSlice({
    name: "credits",
    initialState: {
        credits: 0
    },
    reducers: {
        storeCredits: (state, action) => {
            state.credits = action.payload.subscription.credits;
        },
    },
});

export const { storeCredits } = creditsSlice.actions;
export default creditsSlice.reducer;
