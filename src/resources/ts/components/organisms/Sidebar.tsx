import { MenuItem, MenuList, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AfterLoginRouter } from "../../router/AfterLoginRouter";
import { BeforeLoginRouter } from "../../router/BeforeLoginRouter";

export const Sidebar = () => {
    const navigate = useNavigate();
    const authentication = true;
    const onClickMenu = (path: string) => {
        navigate(path);
    };
    return (
        <Stack direction="row" mt="10px">
            <MenuList sx={{ width: "100%" }}>
                {authentication
                    ? AfterLoginRouter.map((router) => (
                          <MenuItem
                              key={router.path}
                              sx={{ height: "100px" }}
                              onClick={() => onClickMenu(router.path)}
                          >
                              {router.name}
                          </MenuItem>
                      ))
                    : BeforeLoginRouter.map((router) => (
                          <MenuItem
                              key={router.path}
                              sx={{ height: "100px" }}
                              onClick={() => onClickMenu(router.path)}
                          >
                              {router.name}
                          </MenuItem>
                      ))}
            </MenuList>
        </Stack>
    );
};
