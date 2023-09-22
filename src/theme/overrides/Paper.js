import { BORDER_RADIUS_MD } from "../const";

export default function Alert(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: BORDER_RADIUS_MD,
          padding: '40px',
          [theme.breakpoints.down('sm')]: {
            padding: '24px',
          },
        },
      },
    },
  };
}
