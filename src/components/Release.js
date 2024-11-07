import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ReleaseCard = ({ title, currentEvent, upcomingEvent, isFirst }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 900,
        height: 100,
        alignItems: 'center',
        marginTop: 2,
        marginLeft: 14,
        boxShadow: isFirst ? '0px 2px 4px rgba(50, 205, 50)' : 'none',fontFamily:'Poppins'
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography color="text.secondary" sx={{ fontSize: 9 }}>
              Current event:
            </Typography>
            <Typography variant="h6" component="div" sx={{ fontSize: 12 }}>
              {currentEvent}
            </Typography>
          </div>
          {upcomingEvent && (
            <div>
              <Typography color="text.secondary" sx={{ fontSize: 9 }}>
                Upcoming event:
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12, color: 'black' }}>
                {upcomingEvent}
              </Typography>
            </div>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

const Release = () => {
  return (
    <Box>
      <ReleaseCard
        title="Spring Release 2024"
        currentEvent="R2 Integration version"
        upcomingEvent="Release R2 Integration version | 02/02/24"
        isFirst={true} 
      />
      <ReleaseCard
        title="Summer Release"
        currentEvent="Deadline for CRs submission | 02/02/23"
      />
      <ReleaseCard
        title="Autumn Release"
        currentEvent="Deadline for CRs submission | 02/02/23"
      />
      <ReleaseCard
        title="Winter Release"
        currentEvent="Deadline for CRs submission| 02/02/23"
      />
    </Box>
  );
};

export default Release;
