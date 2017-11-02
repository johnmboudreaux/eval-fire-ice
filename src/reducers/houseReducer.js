export const houseReducer = (state=[], action) => {
  switch (action.type) {
  case 'HOUSES_TO_STORE':
    return action.houses;
  default:
    return state;
  }
};
