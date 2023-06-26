import { Button } from "@mui/material";

interface paperButtonProps {
    variant?: "contained" | "outlined" | "text";
    children: React.ReactNode;
    onClick: () => void;
}

export const PaperButton: React.FC<paperButtonProps> = ({
    variant,
    onClick,
    children,
}) => {
    return (
        <Button
            variant={variant ? variant : "contained"}
            onClick={onClick}
            sx={{
                marginTop: "20px",
                mx: "auto",
                display: { xs: "block", md: "inline-block" },
            }}
        >
            {children}
        </Button>
    );
};
