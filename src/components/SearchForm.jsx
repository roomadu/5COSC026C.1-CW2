import { useState } from "react";
import "./SearchForm.css";
import {
  TextField,
  MenuItem,
  Button,
  Box,
  InputAdornment,
  Card,
  CardContent
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KingBedIcon from "@mui/icons-material/KingBed";

function SearchForm({ onSearch }) {
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch({ type, minPrice, maxPrice, minBeds });
  }

  return (
    <Card sx={{ mb: 4, p: 3, boxShadow: 4, borderRadius: 3 }}>
      <CardContent>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2
          }}
        >
          <TextField
            select
            label="Property Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon color="primary" />
                </InputAdornment>
              )
            }}
          >
            <MenuItem value="">Any</MenuItem>
            <MenuItem value="House">House</MenuItem>
            <MenuItem value="Flat">Flat</MenuItem>
          </TextField>

          <TextField
            label="Min Price"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon color="primary" />
                </InputAdornment>
              )
            }}
          />

          <TextField
            label="Max Price"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon color="primary" />
                </InputAdornment>
              )
            }}
          />

          <TextField
            label="Min Bedrooms"
            type="number"
            value={minBeds}
            onChange={(e) => setMinBeds(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KingBedIcon color="primary" />
                </InputAdornment>
              )
            }}
          />

          {/* Submit button spans full width */}
          <Box sx={{ gridColumn: { xs: "1 / -1", sm: "1 / -1" }, mt: 1 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                padding: 1.5,
                fontSize: "16px",
                fontWeight: "bold",
                ":hover": { backgroundColor: "#084298" }
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default SearchForm;
