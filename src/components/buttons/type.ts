export const ButtonType = {
  primary: "primary",
  primary_green: "primary_green",
  secondary_light_green: "secondary_light_green",
  secondary_forest: "secondary_forest",
  white: "white",
  void: "void",
};

export type ButtonType = keyof typeof ButtonType;

export enum ButtonFill {
  primary = "bg-primary text-black",
  primary_green = "bg-primary-green text-white",
  secondary_light_green = "bg-secondary-light-green text-black",
  secondary_forest = "bg-secondary-forest text-white",
  white = "bg-white text-black",
  void = "",
}

export enum ButtonOutline {
  primary = "outline outline-primary text-primary bg-transparent",
  primary_green = "outline outline-primary-green text-primary-green bg-transparent",
  secondary_light_green = "outline outline-secondary-light-green text-secondary-light-green bg-transparent",
  secondary_forest = "outline outline-secondary-forest text-secondary-forest bg-transparent",
  white = "outline outline-white text-black bg-transparent",
  void = "",
}
