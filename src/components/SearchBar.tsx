import { Button, Stack, TextField } from "@mui/material";
import { PaperWrapper } from "./PaperWrapper";

export const SearchBar: React.FC = () => {
    return (
        <PaperWrapper>
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
        </PaperWrapper>
    );
};
