import {
    createTheme,
    MenuItem,
    MenuItemProps,
    MenuList,
    Stack,
    ThemeProvider,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { styled } from "@mui/system";
import { useMatch, useNavigate } from "react-router-dom";
import { AfterLoginRouter } from "../../router/AfterLoginRouter";
import { BeforeLoginRouter } from "../../router/BeforeLoginRouter";

const SidebarMenuItem = styled(MenuItem)<MenuItemProps>(({ selected }) => ({
    height: "80px",
    color: selected ? blue[300] : grey[800],
}));

export const Sidebar = () => {
    const navigate = useNavigate();
    const authentication = true;
    const onClickMenu = (path: string) => {
        navigate(path);
    };
    const isSelectRoute = (path: string) => {
        if (useMatch(`/${path}`)) {
            return true;
        }
        return false;
    };

    return (
        <Stack direction="row" mt="10px">
            <MenuList sx={{ width: "100%" }}>
                {authentication
                    ? AfterLoginRouter.map((router) => (
                          <SidebarMenuItem
                              key={router.path}
                              onClick={() => onClickMenu(router.path)}
                              selected={isSelectRoute(router.path)}
                          >
                              {router.name}
                          </SidebarMenuItem>
                      ))
                    : BeforeLoginRouter.map((router) => (
                          <SidebarMenuItem
                              key={router.path}
                              onClick={() => onClickMenu(router.path)}
                              selected={isSelectRoute(router.path)}
                          >
                              {router.name}
                          </SidebarMenuItem>
                      ))}
            </MenuList>
        </Stack>
    );
};
