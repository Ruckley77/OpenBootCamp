import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { HomeIcon, SettingsIcon} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';


const getIcon = (icon) => {
  switch (icon) {
    case 'HOME':
        return(<HomeIcon/>)
    case 'TASKS':
        return(<HomeIcon/>)
    case 'SETTINGS':
        return(<SettingsIcon/>)
    default:
      return(<HomeIcon/>)
  }
}

const MenuListItems = ({list}) => {
  const navigate = useNavigate()

  const goTo = (path) => {
    navigate(path, { replace: true})
  }

  return (
    <List>
      {list.map(({text, path, icon}, index) => (

        <ListItem key={index} button onClick={goTo(path)}> 
          <ListItemIcon>
            {getIcon(icon)}
          </ListItemIcon>
          <ListItemText
            primary={text}
          />
        </ListItem>
      ))}

    </List>
  )
}

export default MenuListItems