import { ThemeType } from "../type";

export const defaultTheme: ThemeType = {
  name: "default",

  fontSize: {
    xs: 11,
    sm: 12,
    md: 13,
    lg: 14,
    xl: 15,
    "2xl": 16,
    "3xl": 17,
    "4xl": 19,
    "5xl": 21,
    "6xl": 24,
    "7xl": 27,
    "8xl": 32,
  },

  shadow: {
    none: {},
    xs: {
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,

      elevation: 1,
    },
    sm: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    md: {
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,

      elevation: 8,
    },
    lg: {
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,

      elevation: 12,
    },
    xl: {
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,

      elevation: 16,
    },
    "2xl": {
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,

      elevation: 20,
    },
  },

  borderRadius: {
    none: "0px",
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "10px",
    "2md": "10px",
    "2lg": "16px",
    circle: "99999px",
  },

  spacing: {
    none: "0px",
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2lg": "24px",
    "2xl": "32px",
    "3xl": "48px",
    "4xl": "64px",
    "-xs": "-4px",
    "-sm": "-6px",
    "-md": "-8px",
    "-lg": "-12px",
    "-xl": "-16px",
    "-2lg": "-24px",
    "-2xl": "-32px",
  },
};
