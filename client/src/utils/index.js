export const getUserId = () =>
  JSON.parse(window.localStorage.getItem("userId"));
export const setUserId = (userId) =>
  window.localStorage.setItem("userId", JSON.stringify(userId));
