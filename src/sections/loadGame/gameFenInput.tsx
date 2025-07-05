import { FormControl, TextField } from "@mui/material";
import React from "react";

interface Props {
  fen: string;
  setFen: (fen: string) => void;
}

export default function GameFenInput({ fen, setFen }: Props) {
  return (
    <FormControl fullWidth>
      <TextField
        label="Enter FEN here..."
        variant="outlined"
        multiline
        value={fen}
        onChange={(e) => setFen(e.target.value)}
        rows={2}
        sx={{ mb: 2 }}
      />
    </FormControl>
  );
}
