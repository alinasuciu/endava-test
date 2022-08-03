import { useContext } from 'react';
import { ApiErrorContext } from '../../providers/ApiErrorProvider';

function useApiError() {
  const { error, addError, removeError } = useContext(ApiErrorContext);
  return { error, addError, removeError };
}

export default useApiError;