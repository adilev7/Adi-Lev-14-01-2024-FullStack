exports.generateUniqueId = () => {
  const randomPart = Math.random().toString(36).slice(2, 11);
  const timestamp = new Date().getTime().toString(36);
  const uniqueId = randomPart + timestamp;
  return uniqueId;
};
