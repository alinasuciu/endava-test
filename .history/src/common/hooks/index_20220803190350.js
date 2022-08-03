import { useContext } from 'react';
import { ApiErrorContext } from '../providers';

export function useApiError() {
  const { error, addError, removeError } = useContext(ApiErrorContext);
  return { error, addError, removeError };
}

