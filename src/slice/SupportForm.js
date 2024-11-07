import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { submitSupportMessage } from './actions'; // Assuming you've implemented the action creator

const SupportForm = () => {
  const dispatch = useDispatch();
  const { errorMessage: supportErrorMessage, submissionStatus } = useSelector((state) => state);
  const [submissionnStatus, setSubmissionnStatus] = useState('');


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    captchaInput: ''
  });

  const [captcha, setCaptcha] = useState('');
  const [captchaErrorMessage, setCaptchaErrorMessage] = useState(''); // Renamed errorMessage to captchaErrorMessage

  const generateCaptcha = () => {
    const captcha = Math.random().toString(36).substring(7);
    setCaptcha(captcha);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.captchaInput !== captcha) {
      setCaptchaErrorMessage('Captcha verification failed. Please try again.'); // Updated to setCaptchaErrorMessage
      return;
    }

    // Dispatch action to submit support message
    dispatch(submitSupportMessage(formData));
    setSubmissionnStatus('Support message sent successfully!');
  };

  return (
    <Card sx={{ marginTop: '21px', width: '640px', marginLeft: '250px' }}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ height: '40px', fontFamily: 'Poppins' }}
            />
          </div>
          <div>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ height: '40px', fontFamily: 'Poppins' }}
            />
          </div>
          <div>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={1}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              sx={{ fontFamily: 'Poppins' }}
            />
          </div>
          <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ marginTop: '4px' }}>
            <TextField 
              label="Enter the Captcha"
              variant="outlined"
              fullWidth
              margin="normal"
              type="text"
              id="captcha"
              name="captchaInput"
              value={formData.captchaInput}
              onChange={handleChange}
              required
              sx={{ height: '40px',marginTop:'-4px', fontFamily: 'Poppins' }}
            />
            <Typography variant="body1" sx={{ fontSize: '30px', fontFamily: 'Poppins', marginLeft: '4px',backgroundColor:'whitesmoke' }}>
              {captcha}
            </Typography>
            <Button onClick={generateCaptcha}>Refresh Captcha</Button>
          </Box>
          <br />
          <Button type="submit" variant="contained" color="primary">Submit</Button>

          {captchaErrorMessage && <Typography variant="body1" style={{ color: 'red', fontFamily: 'Poppins' }}>{captchaErrorMessage}</Typography>}
          {supportErrorMessage && <Typography variant="body1" style={{ color: 'red', fontFamily: 'Poppins' }}>{supportErrorMessage}</Typography>}
          {submissionnStatus && <Typography variant="body1" style={{ color: 'green', fontFamily: 'Poppins' }}>{submissionnStatus}</Typography>}
          {submissionStatus && <Typography variant="body1" style={{ color: 'green', fontFamily: 'Poppins' }}>{submissionStatus}</Typography>}
        </form>
      </CardContent>
    </Card>
  );
};

export default SupportForm;
