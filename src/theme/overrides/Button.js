import { MAIN_TEXT } from "../colors";
import { BORDER_RADIUS_SM } from "../const";

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: BORDER_RADIUS_SM,
          boxShadow: 'none',
          '&:hover, &:active': {
            boxShadow: 'none',
          }, 
        },
        containedSizeLarge: {
          padding: '8px 24px',
          lineHeight: '40px',
          textTransform: 'inherit',
          fontSize: theme.typography.button.fontSize,
        },
      },
    },
  };
}
