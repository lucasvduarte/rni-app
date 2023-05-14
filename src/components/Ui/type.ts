import { ImageSourcePropType as RNImageSourcePropType } from "react-native";
import themes from "../../themes";

type Undefined<T> = { [P in keyof T]: P extends undefined ? T[P] : never };

type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};

type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];

type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;

export type OptionalKeys<T> = Exclude<
  keyof T,
  NonNullable<keyof SubType<Undefined<T>, never>>
>;

export type ThemeProps<T> = {
  [name: string]: T;
};

type ComponentsProps<T> = Omit<
  Pick<T, OptionalKeys<T>>,
  "children" | "variant"
>;

export type VariantType<T> = ComponentsProps<T> & {
  variants?: {
    [name: string]: ComponentsProps<T>;
  };
};

export type DefaultProps<Props extends object> = {
  [K in keyof Props]?: Props[K];
};

export const borderProps = [
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor",
  "borderWidth",
  "borderTopWidth",
  "borderRightWidth",
  "borderLeftWidth",
  "borderBottomWidth",
  "borderStartWidth",
  "borderEndWidth",
  "borderStyle",
] as const;
export interface BorderPropsType {
  borderColor?: keyof typeof themes.light.colors;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderLeftWidth?: number;
  borderBottomWidth?: number;
  borderStartWidth?: number;
  borderEndWidth?: number;
  borderStyle?: "solid" | "dotted" | "dashed";
}

export const spacingProps = [
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",
  "ms",
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py",
  "ps",
] as const;

export interface SpacingPropsType {
  m?: TSpaceSize;
  mt?: TSpaceSize;
  mr?: TSpaceSize;
  mb?: TSpaceSize;
  ml?: TSpaceSize;
  mx?: TSpaceSize;
  my?: TSpaceSize;
  ms?: TSpaceSize;
  p?: TSpaceSize;
  pt?: TSpaceSize;
  pr?: TSpaceSize;
  pb?: TSpaceSize;
  pl?: TSpaceSize;
  px?: TSpaceSize;
  py?: TSpaceSize;
  ps?: TSpaceSize;
}

export const radiusProps = [
  "borderRadius",
  "radiusTopLeft",
  "radiusTopRight",
  "radiusBottomLeft",
  "radiusBottomRight",
  "radiusTop",
  "radiusLeft",
  "radiusRight",
  "radiusBottom",
] as const;
export interface RadiusPropsType {
  borderRadius?: TBorderRadiusSize;
  radiusTopLeft?: TBorderRadiusSize;
  radiusTopRight?: TBorderRadiusSize;
  radiusBottomLeft?: TBorderRadiusSize;
  radiusBottomRight?: TBorderRadiusSize;
  radiusTop?: TBorderRadiusSize[];
  radiusLeft?: TBorderRadiusSize[];
  radiusRight?: TBorderRadiusSize[];
  radiusBottom?: TBorderRadiusSize[];
}

export const shadowProps = ["shadow", "shadowColor"] as const;
export interface ShadowPropsType {
  shadow?: TShadow;
  shadowColor?: keyof typeof themes.light.colors;
}

export const dimensionProps = [
  "minH",
  "minW",
  "maxH",
  "maxW",
  "h",
  "w",
] as const;
export interface DimensionPropsType {
  minH?: number | string;
  minW?: number | string;
  maxH?: number | string;
  maxW?: number | string;
  h?: number | string;
  w?: number | string;
}

export const flexProps = [
  "row",
  "flex",
  "flexDir",
  "flexWrap",
  "justifyContent",
  "alignContent",
  "alignSelf",
  "alignItems",
  "flexGrow",
] as const;
export interface FlexPropsType {
  row?: boolean;
  flex?: number;
  flexGrow?: number;
  flexDir?: "row" | "column" | "row-reverse" | "column-reverse";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around";
}

export const positionProps = [
  "position",
  "top",
  "right",
  "bottom",
  "left",
] as const;
export interface PositionPropsType {
  position?: "absolute" | "relative";
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export const backgroundProps = ["bg", "bgImg", "bgMode"] as const;
export interface BackgroundPropsType {
  bg?: keyof typeof themes.light.colors;
  bgImg?: RNImageSourcePropType;
  bgMode?: "contain" | "cover" | "stretch" | "repeat";
}

export const textProps = [
  "color",
  "fontSize",
  "textDecorLine",
  "textDecorStyle",
  "fontStyle",
  "textDecorColor",
  "fontWeight",
  "fontFamily",
  "lineHeight",
  "textAlign",
  "textTransform",
  "letterSpacing",
  "textAlignVertical",
] as const;
export interface TextPropsType {
  color?: keyof typeof themes.light.colors;
  fontSize?: TFontSize;
  textDecorLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  textDecorStyle?: "solid" | "double" | "dotted" | "dashed";
  fontStyle?: "normal" | "italic";
  textDecorColor?: string;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  fontFamily?: string;
  lineHeight?: number;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  textTransform?: "none" | "uppercase" | "lowercase" | "capitalize";
  letterSpacing?: number;
  textAlignVertical?: "auto" | "top" | "bottom" | "center";
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  textDecorationStyle?: "solid" | "double" | "dotted" | "dashed";
  textDecorationColor?: string;
  textShadowColor?: string;
  textShadowOffset?: { width: number; height: number };
  textShadowRadius?: number;
}

export const opacityProps = ["opacity"] as const;
export interface OpacityPropsType {
  opacity?: number;
}

export const overflowProps = ["overflow"] as const;
export interface OverflowPropsType {
  overflow?: "hidden" | "visible" | "scroll";
}

export const zIndexProps = ["zIndex"] as const;
export interface ZIndexPropsType {
  zIndex?: number;
}

export const loadingProps = ["loading", "loaderSize", "loaderColor"] as const;
export interface LoadingPropsType {
  loading?: boolean;
  loaderSize?: number | string;
  loaderColor?: string;
}

export const preffixSuffixProps = ["preffix", "suffix"] as const;
export interface PrefixSuffixPropsType {
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}

export const inputProps = ["focusBorderColor"] as const;
export interface InputPropsType {
  focusBorderColor?: string;
}

export const disabledProps = ["disabled"] as const;
export interface DisabledPropsType {
  disabled?: null | boolean;
}

export const buttonProps = [
  "underlayColor",
  "block",
  "borderless",
  "rippleColor",
  "ripple",
] as const;
export interface ButtonPropsType {
  underlayColor?: string;
  block?: boolean;
  borderless?: boolean;
  rippleColor?: string;
  ripple?: boolean;
}

export const overlayProps = ["overlayColor", "overlayOpacity"] as const;
export interface OverlayPropsType {
  overlayColor?: string;
  overlayOpacity?: number;
}

export const variantProps = ["variant"] as const;
export interface VariantPropsType {
  variant?: string;
}

export interface ThemeType {
  fontFamily?: {
    normal?: string;
    bold?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  };

  colors?: ThemeProps<keyof typeof themes.light.colors>;
  fontSize?: ThemeProps<TFontSize>;
  borderRadius?: {
    none: "0px";
    circle: "99999px";
  } & ThemeProps<TBorderRadiusSize>;
  spacing?: { none: "0px" } & ThemeProps<TSpaceSize>;
  shadowColor?: keyof typeof themes.light.colors;
  shadow?: ThemeProps<{
    shadowOffset?: {
      width: number | string;
      height: number | string;
    };
    shadowOpacity?: number | string;
    shadowRadius?: number | string;
    elevation?: number | string;
  }>;
  name?: string;
}

type TSizesNumber = number;

export type TShadow = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type TFontSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | number;

export type TSpaceSize =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2lg"
  | "2xl"
  | "3xl"
  | "4xl"
  | "-xs"
  | "-sm"
  | "-md"
  | "-lg"
  | "-xl"
  | "-2lg"
  | "-2xl"
  | number
  | `${TSizesNumber}%`
  | `${TSizesNumber}px`;

export type TBorderRadiusSize =
  | "none"
  | "circle"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2md"
  | "2lg"
  | number
  | `${TSizesNumber}px`;

export type SizePropsType = {
  small: number;
  medium: number;
  large: number;
};

export type SizeProps = "small" | "medium" | "large";
export type EasingFunction = { (t: number): number };
export type Easing =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "ease-in-cubic"
  | "ease-out-cubic"
  | "ease-in-out-cubic"
  | "ease-in-circ"
  | "ease-out-circ"
  | "ease-in-out-circ"
  | "ease-in-expo"
  | "ease-out-expo"
  | "ease-in-out-expo"
  | "ease-in-quad"
  | "ease-out-quad"
  | "ease-in-out-quad"
  | "ease-in-quart"
  | "ease-out-quart"
  | "ease-in-out-quart"
  | "ease-in-quint"
  | "ease-out-quint"
  | "ease-in-out-quint"
  | "ease-in-sine"
  | "ease-out-sine"
  | "ease-in-out-sine"
  | "ease-in-back"
  | "ease-out-back"
  | "ease-in-out-back"
  | EasingFunction;

export type Animation =
  | "bounce"
  | "flash"
  | "jello"
  | "pulse"
  | "rotate"
  | "rubberBand"
  | "shake"
  | "swing"
  | "tada"
  | "wobble"
  | "bounceIn"
  | "bounceInDown"
  | "bounceInUp"
  | "bounceInLeft"
  | "bounceInRight"
  | "bounceOut"
  | "bounceOutDown"
  | "bounceOutUp"
  | "bounceOutLeft"
  | "bounceOutRight"
  | "fadeIn"
  | "fadeInDown"
  | "fadeInDownBig"
  | "fadeInUp"
  | "fadeInUpBig"
  | "fadeInLeft"
  | "fadeInLeftBig"
  | "fadeInRight"
  | "fadeInRightBig"
  | "fadeOut"
  | "fadeOutDown"
  | "fadeOutDownBig"
  | "fadeOutUp"
  | "fadeOutUpBig"
  | "fadeOutLeft"
  | "fadeOutLeftBig"
  | "fadeOutRight"
  | "fadeOutRightBig"
  | "flipInX"
  | "flipInY"
  | "flipOutX"
  | "flipOutY"
  | "lightSpeedIn"
  | "lightSpeedOut"
  | "slideInDown"
  | "slideInUp"
  | "slideInLeft"
  | "slideInRight"
  | "slideOutDown"
  | "slideOutUp"
  | "slideOutLeft"
  | "slideOutRight"
  | "zoomIn"
  | "zoomInDown"
  | "zoomInUp"
  | "zoomInLeft"
  | "zoomInRight"
  | "zoomOut"
  | "zoomOutDown"
  | "zoomOutUp"
  | "zoomOutLeft"
  | "zoomOutRight";

export type Direction =
  | "normal"
  | "reverse"
  | "alternate"
  | "alternate-reverse";

export interface AnimatableProperties<S extends {}> {
  animation?: Animation;
  duration?: number;
  delay?: number;
  direction?: Direction;
  easing?: Easing;
  iterationCount?: number | "infinite";
  iterationDelay?: number;
  transition?: keyof S | ReadonlyArray<keyof S>;
  useNativeDriver?: boolean;
  onAnimationBegin?: Function;
  onAnimationEnd?: Function;
  onTransitionBegin?: (property: string) => void;
  onTransitionEnd?: (property: string) => void;
}

export type IconType =
  | "material"
  | "material-community"
  | "simple-line-icon"
  | "zocial"
  | "font-awesome"
  | "octicon"
  | "ionicon"
  | "foundation"
  | "evilicon"
  | "entypo"
  | "antdesign"
  | "font-awesome-5";

export interface IconProps {
  iconType?: IconType;
  iconSize?: number;
  iconName?: string;
  iconColor?: keyof typeof themes.light.colors;
}
