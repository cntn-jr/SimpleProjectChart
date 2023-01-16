import { Box, createTheme, ThemeProvider } from "@mui/material";
import { HeaderLayout } from "./HeaderLayout";
import { MainLayout } from "./MainLayout";

export const AppLayout = () => {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <Box display="flex">
                <HeaderLayout />
                <MainLayout />
            </Box>
        </ThemeProvider>
    );
};
