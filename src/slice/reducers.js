import {
  SUBMIT_SUPPORT_MESSAGE_REQUEST,
  SUBMIT_SUPPORT_MESSAGE_SUCCESS,
  SUBMIT_SUPPORT_MESSAGE_FAILURE,
} from './actions';

const initialState = {
  formData: {
    name: '',
    email: '',
    message: '',
  },
  captcha: '',
  captchaInput: '',
  errorMessage: '',
  submissionStatus: '',
};

const supportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SUPPORT_MESSAGE_REQUEST:
      return {
        ...state,
        errorMessage: '',
        submissionStatus: '',
      };
    case SUBMIT_SUPPORT_MESSAGE_SUCCESS:
      return {
        ...state,
        submissionStatus: action.payload,
        
      };
    case SUBMIT_SUPPORT_MESSAGE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        submissionStatus: 'Failed to send support message. Please try again later.',
      };
    default:
      return state;
  }
};

export default supportReducer;