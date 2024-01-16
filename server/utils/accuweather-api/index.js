require("dotenv").config();

const currentConditionsDummyData = require("./dummyData/current-conditions.json");
const locationsDummyData = require("./dummyData/locations.json");

const dummyData = {
  currentConditions: currentConditionsDummyData,
  locations: locationsDummyData,
};

const buildApiUrl = (
  baseUrl = `${process.env.API_HOST}/${process.env.API_VERSION}`,
  path = "",
  queryParams = {}
) => {
  let url = `${baseUrl}/${path}`;

  const queryParamsString = Object.keys(queryParams)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
    )
    .join("&");

  if (queryParamsString) {
    url += `?${queryParamsString}`;
  }

  // Append API key
  const apiKeyQueryParam = `apikey=${process.env.API_KEY}`;
  if (url.includes("?")) {
    url += `&${apiKeyQueryParam}`;
  } else {
    url += `?${apiKeyQueryParam}`;
  }

  return url;
};

const buildCurrentConditionsUrl = (path = "", queryParams) =>
  buildApiUrl(
    `${process.env.API_HOST}/currentconditions/${process.env.API_VERSION}`,
    path,
    queryParams
  );

const buildLocationsUrl = (path = "", queryParams) =>
  buildApiUrl(
    `${process.env.API_HOST}/locations/${process.env.API_VERSION}`,
    path,
    queryParams
  );

module.exports = {
  dummyData,
  buildApiUrl,
  buildCurrentConditionsUrl,
  buildLocationsUrl,
};
