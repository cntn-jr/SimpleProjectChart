import {
    MenuItem,
    MenuItemProps,
    MenuList,
    Stack,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { styled } from "@mui/system";
import { useMatch, useNavigate } from "react-router-dom";
import { MainRouters } from "../../router/MainRouters";

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
        if (useMatch(path)) {
            return true;
        }
        return false;
    };

    return (
        <Stack direction="row" mt="10px">
            <MenuList sx={{ width: "100%" }}>
                {Object.values(MainRouters).map((route) =>
                    route.authenticate === authentication ? (
                        <SidebarMenuItem
                            key={route.path}
                            onClick={() => onClickMenu(route.path)}
                            selected={isSelectRoute(route.path)}
                        >
                            {route.name}
                        </SidebarMenuItem>
                    ) : null
                )}
            </MenuList>
        </Stack>
    );
};
