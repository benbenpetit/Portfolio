export const getRandomNumber = (limit, isNegative = false) => {
  return isNegative
          ? (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * (limit))
          : Math.floor(Math.random() * (limit))
}