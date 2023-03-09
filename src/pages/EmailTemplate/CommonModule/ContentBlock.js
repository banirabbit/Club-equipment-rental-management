import { Box } from '@mui/material';

function ContentBlock(props) {
  const { title, margin, sx, ...others } = props;
  const CssContainer = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: "10px",
  };
  const CssTitle = {
    width: '135px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#000',
    wordWrap: 'break-word',
    marginRight: '16px',
  };
  const CssContent = {
    width: 'calc(100% - 151px)',
  };
  return (
    <Box sx={{ ...CssContainer, ...sx }} {...others}>
      <Box sx={CssTitle}>{title}</Box>
      <Box sx={CssContent}>{props.children}</Box>
    </Box>
  );
}
export default ContentBlock;
