import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
const useStyles = makeStyles({
  root: {
   
    margin : 'auto'
  },
});

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
     
      <BottomNavigationAction label="About us" value="about" icon={<PeopleAltIcon />} />
      <BottomNavigationAction label="" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Contact" value="contact" icon={<PhoneForwardedIcon />} />
    </BottomNavigation>
  );
}