import { useContext } from 'react';
import { APIErrorContext } from '../../providers/ApiErrorProvider';

function useApiError() {
  const { error, addError, removeError } = useContext(APIErrorContext);
  return { error, addError, removeError };
}

export default useApiError;