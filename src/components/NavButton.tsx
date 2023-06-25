import { Button } from "@mui/material";

interface navButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    variant?: "contained" | "outlined" | "text";
}

export const NavButton: React.FC<navButtonProps> = ({
    onClick,
    variant,
    children,
}) => {
    return (
        <Button
            onClick={onClick}
            variant={variant ? variant : "contained"}
            sx={{ height: "55px" }}
        >
            {children}
        </Button>
    );
};
