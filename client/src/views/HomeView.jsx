import { useCallback, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";

import SearchField from "@/components/SearchField";
import CityWeather from "@/components/CityWeather";
import SearchedCities from "@/components/SearchedCities";
import citiesService from "@/services/cities";

const HomeView = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const searchChangeHandler = useCallback(async (input) => {
    const newCities = await citiesService.getCitiesByQuery(input);
    setCities(newCities);
  });

  const selectCityHandler = useCallback((city) => {
    setSelectedCity(city);
  });

  const AppHeading = ({ selectedCity }) => (
    <Typography variant="h2" textAlign="center">
      What's the weather like in
      {selectedCity ? ` ${selectedCity.name}?` : " ..."}
    </Typography>
  );
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        rowGap={2}
        marginBottom={6}
      >
        <AppHeading selectedCity={selectedCity} />
        <SearchField onChange={searchChangeHandler} />
      </Stack>
      <Grid container gap={10} justifyContent="center" alignItems="center">
        <Grid item md={5}>
          <CityWeather city={selectedCity} />
        </Grid>
        <Grid item md={5}>
          <SearchedCities
            cities={cities}
            selectedCity={selectedCity?.key}
            onSelect={selectCityHandler}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HomeView;
