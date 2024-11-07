import axios from 'axios';
export const SUBMIT_SUPPORT_MESSAGE_REQUEST = 'SUBMIT_SUPPORT_MESSAGE_REQUEST';
export const SUBMIT_SUPPORT_MESSAGE_SUCCESS = 'SUBMIT_SUPPORT_MESSAGE_SUCCESS';
export const SUBMIT_SUPPORT_MESSAGE_FAILURE = 'SUBMIT_SUPPORT_MESSAGE_FAILURE';

export const submitSupportMessageRequest = () => ({
  type: SUBMIT_SUPPORT_MESSAGE_REQUEST,
});

export const submitSupportMessageSuccess = (successMessage) => ({
  type: SUBMIT_SUPPORT_MESSAGE_SUCCESS,
  payload: successMessage,
});

export const submitSupportMessageFailure = (errorMessage) => ({
  type: SUBMIT_SUPPORT_MESSAGE_FAILURE,
  payload: errorMessage,
});

export const submitSupportMessage = (formData, captcha) => {
  return async (dispatch) => {
    dispatch(submitSupportMessageRequest());
    
    try {
      // Simulating API call with axios
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: formData.name,
        body: formData.message,
        userId: 1
      });

      console.log('Response status:', response.status); 
      console.log('Response data:', response.data); 
      console.log('Response headers:', response.headers); 
      
      dispatch(submitSupportMessageSuccess('Support message sent successfully.'));
    } catch (error) {
      console.error('Error sending support message:', error);
      dispatch(submitSupportMessageFailure('Failed to send support message. Please try again later.'));
    }
  };
};
