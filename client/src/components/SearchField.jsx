import { useCallback, useState } from "react";
import { TextField } from "@mui/material";

const SearchField = ({ onChange: citiesChangeHandler }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchChangeHandler = useCallback((e) => {
    setSearchValue(e.target.value);
    citiesChangeHandler(e.target.value);
  });

  return (
    <TextField
      value={searchValue}
      onChange={searchChangeHandler}
      sx={{ minWidth: 300, margin: "0 auto" }}
      placeholder="Type a city"
    />
  );
};

export default SearchField;
