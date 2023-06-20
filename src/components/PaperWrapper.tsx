import { Typography } from "@mui/material";
import { SectionPaper } from "../styledMuiComponents/SectionPaper";

interface paperWrapperProps {
    title?: string;
    children: React.ReactNode;
}

export const PaperWrapper: React.FC<paperWrapperProps> = ({
    title,
    children,
}) => {
    return (
        <SectionPaper elevation={16}>
            {title && (
                <Typography variant="h4" sx={{ marginBottom: "10px" }}>
                    {title}
                </Typography>
            )}
            {children}
        </SectionPaper>
    );
};
