import React from 'react';
import { Box, Stack, ThemeProvider } from '@mui/material';
import { styled } from '@mui/system';
import { FaCheckCircle } from 'react-icons/fa';
import { Settings, Help, Logout } from '@mui/icons-material';
import { Edit, Code, Description } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { createTheme } from '@mui/material/styles';

import BarAnimation from './BarAnimation';
import Component from './Target';
import TableComponent from './Table';

const StyledCard = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '20px',
  backgroundColor: 'white',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
}));

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
  spacing: {
    marginBottom:'2rem',
    margin:'auto',
  }, 
});

const Body = () => {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <StyledCard
          sx={{
            position: 'fixed',
            left: '35px',
            top: '35px',
            width: '300px',
            height: '483px', 
          }}
        >
          <h4 style={{ display: 'flex', alignItems: 'center', marginLeft: '17px',fontFamily:'Poppins' }}>
            <img
              style={{ width: '45px', marginRight: '10px', padding: '3px', height: '35px' }}
              src="https://www.pngarts.com/files/3/Mercedes-Benz-Logo-Transparent-Images.png"
              alt="Logo"
            />
            XD HUB
          </h4>
          <Box
            sx={{
              backgroundColor: 'whitesmoke',
              width: '250px',
              height: '290px',
              marginLeft: '24px',
            }}
          >
            <h5 style={{ display: 'flex', alignItems: 'center', marginLeft: '13px', fontSize: '14px',fontFamily:'Poppins' }}>
              <img
                style={{ width: '85px', height: '95px', marginRight: '10px', marginTop: '21px' }}
                src="https://vectorified.com/images/female-avatar-icon-3.png"
                alt="Logo"
              />
              SHYLAJA DS <FaCheckCircle style={{ color: 'blue', fontSize: '1rem' }} />
              <span style={{ fontSize: '10px', marginLeft: '-80px', marginTop: '20px', paddingTop: '10px' }}>
                Integrator
              </span>
              <span style={{ fontSize: '7px', marginLeft: '-73px', marginTop: '45px', paddingTop: '15px' }}>
                Last login was 12 mins ago
              </span>
            </h5>
            <Stack direction="column" spacing={1} sx={{ marginLeft: '13px',fontFamily:'Poppins' }}>
              <h6 style={{ marginLeft: '15px', marginBottom: '5px', fontSize: '12px', alignItems: 'center', display: 'flex' }}>
                <Edit style={{ marginRight: '5px', color: 'red' }} />
                <span>Edit Release Labels</span>
              </h6>
              <h6 style={{ marginLeft: '15px', marginBottom: '5px', fontSize: '12px', alignItems: 'center', display: 'flex' }}>
                <Code style={{ marginRight: '5px', color: 'red' }} />
                <span>View XML</span>
              </h6>
              <h6 style={{ marginLeft: '15px', marginBottom: '5px', fontSize: '12px', alignItems: 'center', display: 'flex' }}>
                <Description style={{ marginRight: '5px', color: 'red' }} />
                <span>View Documentation</span>
              </h6>
            </Stack>
          </Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              bottom: '20px',
              left: '30px',
              marginLeft: '72px',
              marginRight: '72px',
              justifyContent: 'space-between',
              padding: '3px',
              marginTop: '50px',
            }}
          >
            <Settings />
            <Help />
            <Logout />
          </Stack>
        </StyledCard>

        {/* Second Card */}
        <StyledCard
          sx={{
            left: '365px',
            top: '121px',
            width: '200px',
            height: '351px',
            backgroundColor: '#F8DE7E',
          }}
        >
          <h2 style={{ fontSize: '15px', marginTop: '23px', marginLeft: '20px',fontFamily:'Poppins' }}>
            {t('body.overview')}
          </h2>
          <Stack direction="column" spacing={1} sx={{ marginLeft: '20px' ,fontFamily:'Poppins'}}>
            <p style={{ fontSize: '13px', marginBottom: '10px' }}>
              {t('body.activeComponents')}
              <br />
              3,00,000
            </p>
            <p style={{ fontSize: '13px', marginBottom: '10px' }}>
              {t('body.activeDevices')}
              <br />
              27
            </p>
            <p style={{ fontSize: '13px', marginBottom: '10px' }}>
              {t('body.activeComponents')}
              <br />
              3,00,000
            </p>
          </Stack>
        </StyledCard>

        {/* Third, Fourth, Fifth cards go here */}

        {/* Third Card */}
        <StyledCard
          sx={{
            left: '595px',
            top: '121px',
            width: '511px',
            height: '351px',
            fontFamily:'Poppins'
          }}
        >
          {/* Third Card Content */}
          <h4 style={{ marginLeft: '31px',fontFamily:'Poppins' }}>{t('body.statistics')}</h4>
          <BarAnimation />
        </StyledCard>

        {/* Fourth Card */}
        <StyledCard
          sx={{
            left: '365px',
            top: '500px',
            width: '200px',
            height: '351px',fontFamily:'Poppins'
          }}
        >
          {/* Fourth Card Content */}
          <h4 style={{ marginLeft: '20px' ,fontFamily:'Poppins'}}>{t('body.targets')}</h4>
          <Component />
        </StyledCard>

        {/* Fifth Card */}
        <StyledCard
          sx={{
            left: '595px',
            top: '500px',
            width: '511px',
            height: '351px',fontFamily:'Poppins'
          }}
        >
          {/* Fifth Card Content */}
          <h4 style={{ marginLeft: '31px',fontFamily:'Poppins' }}>{t('body.recentLogs')}</h4>
          <TableComponent />
        </StyledCard>
      </div>
    </ThemeProvider>
  );
};

export default Body;
