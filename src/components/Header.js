import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const useStyles = makeStyles({
  header: {
    marginLeft: '367px',
    marginTop: '35px',
    alignItems: 'center',
  },
  item: {
    marginRight: '30px',
    fontSize: '17px',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontFamily:'Poppins'
  },
  selectLanguage: {
    fontSize: '17px',
    marginLeft: '209px',
    minWidth: '160px', 
  },
  blue: {
    color: 'blue',
  },
});

const Header = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [languageMenuWidth, setLanguageMenuWidth] = useState('160px'); 
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const handleLanguageMenuWidth = () => {
    const englishTextWidth = getTextWidth(t('header.english'));
    const germanTextWidth = getTextWidth(t('header.german'));
    const maxWidth = Math.max(englishTextWidth, germanTextWidth) + 40; 
    setLanguageMenuWidth(`${maxWidth}px`);
  };

  const getTextWidth = (text) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = '17px Poppins'; 
    const maxWidth = 140; 
    const width = context.measureText(text).width;
    return width > maxWidth ? maxWidth : width;
  };

  return (
    <Stack direction="row" className={classes.header}>
      <NavLink exact to="/" className={`${classes.item} ${window.location.pathname === '/' && classes.blue}`}>
        {t('header.dashboard')}
      </NavLink>
      <NavLink to="/release" className={`${classes.item} ${window.location.pathname === '/release' && classes.blue}`} activeClassName={classes.blue}>
        {t('header.release')}
      </NavLink>
      <NavLink to="/components" className={classes.item}>
        {t('header.components')}
      </NavLink>

      <div className={classes.selectLanguage}>
        <FormControl size="small">
          <Select
            labelId="language-select-label"
            id="language-select"
            value={i18n.language}
            onChange={(event) => {
              handleLanguageChange(event);
              handleLanguageMenuWidth();
            }}
            sx={{ minWidth: languageMenuWidth,fontFamily:'Poppins' }}
          >
            <MenuItem value="en" sx={{fontFamily:'Poppins'}}>{t('header.english')}</MenuItem>
            <MenuItem value="de"sx={{fontFamily:'Poppins'}}>{t('header.german')}</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Stack>
  );
};

export default Header;
