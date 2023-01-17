import { MenuItem, MenuList, Stack } from "@mui/material";
import { AfterLoginRouter } from "../../router/AfterLoginRouter";
import { BeforeLoginRouter } from "../../router/BeforeLoginRouter";

export const Sidebar = () => {
    const authentication = true;
    return (
        <Stack direction="row" mt="10px">
            <MenuList sx={{ width: "100%" }}>
                {authentication
                    ? AfterLoginRouter.map((router) => (
                          <MenuItem key={router.path} sx={{ height: "100px" }}>
                              {router.name}
                          </MenuItem>
                      ))
                    : BeforeLoginRouter.map((router) => (
                          <MenuItem key={router.path} sx={{ height: "100px" }}>
                              {router.name}
                          </MenuItem>
                      ))}
            </MenuList>
        </Stack>
    );
};
