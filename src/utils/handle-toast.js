import { toast } from 'react-toastify';

export const handleToast = (result, successMessage, errorMessage, time) => {
  if (result.data) {
    toast.success(successMessage, {
      autoClose: time || 3000,
    });
  } else if (result.error) {
    toast.error(errorMessage, {
      autoClose: time || 3000,
    });
  } else {
    toast('Wow, some action happened');
  }
}
