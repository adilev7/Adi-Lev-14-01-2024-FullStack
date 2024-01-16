import { useCallback, useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import CityWeather from "@/components/CityWeather";
import favoritesService from "@/services/favorites";

const FavoritesView = () => {
  const [favorites, setFavorites] = useState([]);

  const getFavCitiesWithWeather = useCallback(async () => {
    try {
      console.log("Fetching favorite cities with weather...");
      const favCities = await favoritesService.getFavoriteCities();
      setFavorites(favCities);
      console.log("Favorite cities with weather fetched successfully.");
    } catch (err) {
      console.log("Error fetching favorite cities with weather:", err);
    }
  }, []);

  useEffect(() => {
    getFavCitiesWithWeather();
  }, [getFavCitiesWithWeather]);

  return (
    <>
      <Typography variant="h2" textAlign="center" marginBottom={4}>
        Favorite Locations
      </Typography>
      <Stack
        flexWrap="wrap"
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={5}
      >
        {favorites.map((city) => (
          <CityWeather city={city} key={city.key} />
        ))}
      </Stack>
    </>
  );
};

export default FavoritesView;
