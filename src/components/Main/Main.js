import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';


const Main = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open ,drawerWidth }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: '0px',
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth ? drawerWidth : "240px",
      }),
      marginTop: '50px',
    }),
  );

export const NewDesignedMain = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, drawerWidth, filterOpen, filterDrawerWidth }) => ({
  flexGrow: 1,
  paddingTop: 3,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: "150px",
  ...(filterOpen && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: filterDrawerWidth ? filterDrawerWidth : "150px",
  }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth ? drawerWidth : "240px",
  }),
  marginTop: "25px",
}));

  export default Main