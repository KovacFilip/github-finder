import { styled } from "@mui/material";

export const ProfilePicture = styled("img")(() => ({
    borderRadius: "50%",
    height: "200px",
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    "@media (min-width: 900px)": {
        display: "inline-block",
    },
}));
