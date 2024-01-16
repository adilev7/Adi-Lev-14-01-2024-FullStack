import { API_KEY, API_HOST, API_VERSION } from "./constants";

export const buildApiUrl = (
  baseUrl = `${API_HOST}/${API_VERSION}`,
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
  if (url.includes("?")) {
    url += `&apikey=${API_KEY}`;
  } else {
    url += `?apikey=${API_KEY}`;
  }

  return url;
};
