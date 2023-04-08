import { TextProps } from "../../components/Text/type";
import { defaultTheme } from "./Theme";
import { ThemeType } from "./type";

const getThemeProperty = (
  theme:
    | ThemeType["borderRadius"]
    | ThemeType["fontSize"]
    | ThemeType["shadow"]
    | ThemeType["spacing"]
    | undefined,
  value: any,
  isMakeStyles?: boolean
) => {
  if (theme) {
    if (typeof theme[value] !== "undefined") {
      return isMakeStyles
        ? Number(String(theme[value]).replace(/\D/g, "")) || 0
        : theme[value];
    }
  }

  return value;
};

const makeStyles = (value: string | string[], isMakeStyles?: boolean) => {
  if (typeof value !== "string" && isMakeStyles) {
    return value.forEach((item) => {
      const listValues = item.split("-");
      const shift = listValues.shift();
      return `${shift}${listValues
        .map((itemSub) => {
          return itemSub[0].toUpperCase() + itemSub.substring(1);
        })
        .join(" ")}`;
    });
  }
  if (typeof value === "string" && isMakeStyles) {
    const listValues = value.split("-");
    const shift = listValues.shift();
    return `${shift}${listValues
      .map((item) => {
        return item[0].toUpperCase() + item.substring(1);
      })
      .join(" ")}`;
  }
  return value;
};

export const createSpacing = (props: any, isMakeStyles?: boolean) => {
  let propKeys: any;
  propKeys = {
    p: "padding",
    pt: "padding-top",
    pr: "padding-right",
    pb: "padding-bottom",
    pl: "padding-left",
    px: "padding-horizontal",
    py: "padding-vertical",
    ps: "padding-start",
    m: "margin",
    mt: "margin-top",
    mr: "margin-right",
    mb: "margin-bottom",
    ml: "margin-left",
    mx: "margin-horizontal",
    my: "margin-vertical",
    ms: "margin-start",
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = makeStyles(propKeys[propKey], isMakeStyles) as string;

    if (propKey in props) {
      computedStyle[styleProperty] = getThemeProperty(
        defaultTheme.spacing,
        props[propKey],
        isMakeStyles
      );
    }
  });

  return computedStyle;
};

export const getFontWeight = (
  themeFontFamily: ThemeType["fontFamily"],
  fontFamily: TextProps["fontFamily"],
  fontWeight: TextProps["fontWeight"]
) => {
  if (fontFamily === "" || !fontWeight) {
    return fontWeight;
  }

  if (themeFontFamily) {
    if (typeof themeFontFamily[fontWeight] !== "undefined") {
      return "normal";
    }
  }

  if (!fontFamily) {
    return fontWeight;
  }

  return "normal";
};

export const getFontSize = (fontSize: TextProps["fontSize"] | any) => {
  return getThemeProperty(defaultTheme.spacing, fontSize);
};

export const getThemeFontFamily = (
  themeFontFamily: ThemeType["fontFamily"],
  fontWeight: TextProps["fontWeight"] = "normal"
): string | undefined => {
  if (themeFontFamily) {
    if (typeof themeFontFamily[fontWeight] !== "undefined") {
      return themeFontFamily[fontWeight];
    }
  }

  return undefined;
};

export const createBorderRadius = (props: any, isMakeStyles?: boolean) => {
  let propKeys: any;

  propKeys = {
    borderRadius: "border-radius",
    borderTopLeft: "border-top-left-radius",
    borderTopRight: "border-top-right-radius",
    borderBottomLeft: "border-bottom-left-radius",
    borderBottomRight: "border-bottom-right-radius",
    borderTop: ["border-top-left-radius", "border-top-right-radius"],
    borderLeft: ["border-top-left-radius", "border-bottom-left-radius"],
    borderRight: ["border-top-right-radius", "border-bottom-right-radius"],
    borderBottom: ["border-bottom-left-radius", "border-bottom-right-radius"],
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = makeStyles(propKeys[propKey], isMakeStyles);

    if (propKey in props) {
      if (styleProperty instanceof Array) {
        styleProperty.forEach((property) => {
          computedStyle[property] = getThemeProperty(
            defaultTheme.borderRadius,
            props[propKey],
            isMakeStyles
          );
        });
      } else {
        computedStyle[styleProperty as string] = getThemeProperty(
          defaultTheme.borderRadius,
          props[propKey],
          isMakeStyles
        );
      }
    }
  });

  return computedStyle;
};

export const createFlex = (props: any, isMakeStyles?: boolean) => {
  let propKeys: any;

  propKeys = {
    row: "row",
    flex: "flex",
    display: "display",
    zIndex: "z-index",
    flexDir: "flex-direction",
    justifyContent: "justify-content",
    alignItems: "align-items",
    alignContent: "align-content",
    flexWrap: "flex-wrap",
    alignSelf: "align-self",
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = makeStyles(propKeys[propKey], isMakeStyles) as string;

    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  });

  return computedStyle;
};

export const createBorderWidth = (props: any, isMakeStyles?: boolean) => {
  let propKeys: any;

  propKeys = {
    borderWidth: "border-width",
    borderStartWidth: "border-start-width",
    borderEndWidth: "border-end-width",
    borderTopWidth: "border-top-width",
    borderLeftWidth: "border-left-width",
    borderRightWidth: "border-right-width",
    borderBottomWidth: "border-bottom-width",
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = makeStyles(propKeys[propKey], isMakeStyles) as string;

    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  });

  return computedStyle;
};

export const createBorderColor = (props: any, isMakeStyles?: boolean) => {
  let propKeys: any;

  propKeys = {
    borderColor: "border-color",
    borderTopColor: "border-top-color",
    borderRightColor: "border-right-color",
    borderLeftColor: "border-left-color",
    borderBottomColor: "border-bottom-color",
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = makeStyles(propKeys[propKey], isMakeStyles) as string;

    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  });

  return computedStyle;
};

export const createShadow = (props: any) => {
  let computedStyle: any = {};
  if (props.shadow) {
    computedStyle = {
      ...getThemeProperty(defaultTheme.shadow, props.shadow),
      shadowColor: props.shadowColor || "black",
    };
  }

  return computedStyle;
};

export const createPosition = (props: any) => {
  let propKeys: any;

  propKeys = {
    position: "position",
    top: "top",
    left: "left",
    right: "right",
    bottom: "bottom",
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  });

  return computedStyle;
};

export const createText = (props: any, isMakeStyles?: boolean) => {
  let propKeys: any;

  propKeys = {
    color: "color",
    fontSize: "font-size",
    textDecorLine: "text-decor-line",
    textDecorStyle: "text-decor-style",
    fontStyle: "font-style",
    textDecorColor: "text-decor-color",
    fontWeight: "font-weight",
    fontFamily: "font-family",
    lineHeight: "line-height",
    textAlign: "text-align",
    textTransform: "text-transform",
    letterSpacing: "letter-spacing",
    textAlignVertical: "text-align-vertical",
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = makeStyles(propKeys[propKey], isMakeStyles) as string;

    if (propKey in props) {
      computedStyle[styleProperty] = getThemeProperty(
        defaultTheme.fontSize,
        props[propKey]
      );
    }
  });

  return computedStyle;
};

export const createDimension = (props: any, isMakeStyles?: boolean) => {
  let propKeys: any;

  propKeys = {
    w: "width",
    h: "height",
    minW: "min-width",
    maxW: "max-width",
    minH: "min-height",
    maxH: "max-height",
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = makeStyles(propKeys[propKey], isMakeStyles) as string;

    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  });

  return computedStyle;
};
