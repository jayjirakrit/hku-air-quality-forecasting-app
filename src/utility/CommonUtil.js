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

export const defineAQHIColor = (aqi) => {
  switch (true) {
    case 0 < aqi && aqi <= 3:
      return "#B8E052";
    case 3 < aqi && aqi <= 6:
      return "#FBDD4B";
    case 6 < aqi && aqi <= 10:
      return "#FB9C05";
    case 10 < aqi:
      return "#FD5C01";
    default:
      return "#FFFFFF";
  }
};

export const defineAQHIColorCSS = (aqi) => {
  switch (true) {
    case 0 < aqi && aqi <= 3:
      return "bg-good";
    case 3 < aqi && aqi <= 6:
      return "bg-moderate";
    case 6 < aqi && aqi <= 10:
      return "bg-unhealthy";
    case 10 < aqi:
      return "bg-very-unhealthy";
    default:
      return "bg-default";
  }
};
