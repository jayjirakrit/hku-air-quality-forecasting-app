export const getColor = (input) => {
  switch (true) {
    case input >= 90:
      return "A";
    case input >= 80:
      return "B";
    case input >= 70:
      return "C";
    case input >= 60:
      return "D";
    default:
      return "F";
  }
};
