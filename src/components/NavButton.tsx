import { Button } from "@mui/material";

interface navButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

export const NavButton: React.FC<navButtonProps> = ({ onClick, children }) => {
    return (
        <Button onClick={onClick} variant="contained" sx={{ height: "55px" }}>
            {children}
        </Button>
    );
};
