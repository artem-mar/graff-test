import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const BoxWithGradientBorder = styled(Box)({
  position: 'relative',
  borderRadius: 4,

  '&:has(:focus)::before': {
    content: '""',
    position: 'absolute',
    top: '-1px',
    bottom: '-1px',
    left: '-1px',
    right: '-1px',
    backgroundImage: 'linear-gradient(#BC75FF, #798FFF)',
    borderRadius: '5px',
    zIndex: 1,
  },
});

export default BoxWithGradientBorder;
