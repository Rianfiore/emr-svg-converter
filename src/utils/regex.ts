export const regex = {
  matchByHexadecimalCode: /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g,
  matchByThemeToken: /theme\.colors\.brand\.([a-z]+)/g,
  matchBySpecialCharactersForReturnFunction: /^[^();}]*$/g,
};
