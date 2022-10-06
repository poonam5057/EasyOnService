/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface ThemeState {
    isDark: boolean;
}

const initialState: ThemeState = {
    isDark: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setIsDarkTheme: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                isDark: action.payload,
            };
        },
    },
});

export const { setIsDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;
