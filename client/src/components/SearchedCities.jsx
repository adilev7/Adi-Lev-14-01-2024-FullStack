import { Paper, Stack, Typography } from "@mui/material";
import "./SearchedCities.scss";

const SearchedCities = ({ cities, selectedCity, onSelect: selectHandler }) => {
  return (
    <Stack
      className="SearchedCities"
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      gap={3}
    >
      {cities.length ? (
        cities.map((city) => (
          <Paper
            key={city.key}
            square
            sx={{
              padding: "1rem 2rem",
              textAlign: "center",
              cursor: "pointer",
            }}
            className={`CityCard ${
              city.key === selectedCity ? "isSelected" : ""
            }`}
            elevation={city.key === selectedCity ? 4 : 2}
            onClick={() => selectHandler(city)}
          >
            <Typography>{city.name}</Typography>
          </Paper>
        ))
      ) : (
        <Typography textAlign="center">No cities match your search.</Typography>
      )}
    </Stack>
  );
};

export default SearchedCities;
