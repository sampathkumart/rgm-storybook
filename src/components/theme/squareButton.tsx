import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const extendStyle = {
  _hover: {
    backgroundColor: mode("#FAF089", "brand.300"),
    color: mode("#000000", "gray.800"),
  },
  _focus: {
    backgroundColor: mode("#FAF089", "brand.400"),
    color: mode("#000000", "gray.800"),
    outline: "0.1em solid #CBD5E0",
  },
};

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        primary: (props: any) => ({
          borderRadius: "30px",
          //   ...brandRing,
          color: mode("#FAF089", "gray.800")(props),
          backgroundColor: mode("#000000", "brand.200")(props),
          ...extendStyle,
        }),

        secondary: (props: any) => ({
          borderRadius: "30px",
          //   ...brandRing,
          color: mode("#000000", "gray.800")(props),
          backgroundColor: mode("#F7FAFC", "brand.200")(props),
          ...extendStyle,
        }),
      },
    },
  },
});

export default theme;
