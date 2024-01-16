import { useCallback, useEffect, useState } from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import citiesService from "@/services/cities";
import favoritesService from "@/services/favorites";

const CityWeather = ({ city }) => {
  const [cityWithWeather, setCityWithWeather] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const getCityWithWeather = useCallback(async () => {
    try {
      if (!city) return;
      const c = await citiesService.getCityWithWeather(city);
      setCityWithWeather(c);
    } catch (err) {
      console.log(err);
    }
  }, [city]);

  const getIsFavorite = useCallback(async () => {
    try {
      const isFav = await favoritesService.isFavoriteCity(city?.key);
      setIsFavorite(isFav);
    } catch (err) {
      console.log(err);
    }
  }, [city]);

  const toggleFavorite = useCallback(async () => {
    if (isFavorite) {
      setIsFavorite(false);
      await favoritesService.deleteFavorite(city?.key);
      return;
    }
    setIsFavorite(true);
    await favoritesService.addToFavorites(city?.key);
  }, [isFavorite, city]);

  useEffect(() => {
    const fetchData = async () => {
      await getCityWithWeather();
      await getIsFavorite();
    };

    fetchData();
  }, [getCityWithWeather, getIsFavorite]);

  const favBtnText = isFavorite
    ? "Remove city from favorites"
    : "Add city to favorites";
  const favBtnIcon = isFavorite ? (
    <Star color="blue" />
  ) : (
    <StarBorder color="blue" />
  );

  const cityObj =
    city && city?.temperature && city?.text ? city : cityWithWeather;

  return (
    <div style={{ textAlign: "center" }}>
      {cityObj ? (
        <Paper
          square
          elevation={2}
          sx={{ position: "relative", width: "fit-content", padding: "2rem" }}
        >
          <Button
            title={favBtnText}
            onClick={toggleFavorite}
            color="blue"
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              borderRadius: "0 0 0 100%",
              height: 50,
              width: 50,
              padding: "0.5rem 0.5rem 1.5rem 1.5rem",
            }}
          >
            {favBtnIcon}
          </Button>
          <Stack>
            <Typography variant="h3">{cityObj.name}</Typography>
            <Typography variant="h1">{cityObj.temperature}</Typography>
            <Typography variant="h4">{cityObj.text}</Typography>
          </Stack>
        </Paper>
      ) : (
        <Typography>Select a city</Typography>
      )}
    </div>
  );
};

export default CityWeather;
