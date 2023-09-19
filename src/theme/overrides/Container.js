import { CONTAINER_WIDTH_MD } from "../const";

export default function Container(theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        maxWidthMd: {
          maxWidth: CONTAINER_WIDTH_MD,
          [theme.breakpoints.up('md')]: {
            maxWidth: CONTAINER_WIDTH_MD,
          },
        },
      },
    },
  };
}
