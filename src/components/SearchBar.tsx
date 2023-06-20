import { Button, Stack, TextField } from "@mui/material";
import { SectionPaper } from "../styledMuiComponents/SectionPaper";

export const SearchBar: React.FC = () => {
    return (
        <SectionPaper elevation={16}>
            <Stack
                direction="row"
                spacing={3}
                sx={{
                    justifyContent: "center",
                }}
            >
                <TextField variant="outlined" label="Find a user" />
                <Button variant="contained">SEARCH</Button>
            </Stack>
        </SectionPaper>
    );
};
