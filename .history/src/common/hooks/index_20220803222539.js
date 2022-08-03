import { useContext } from "react";
import { ApiErrorContext, AuthContext } from "../providers";

export function useApiError() {
  const { error, addError, removeError } = useContext(ApiErrorContext);
  return { error, addError, removeError };
}

export function useAuth() {
  const { isLoggin, onLogin, onLogout } = useContext(AuthContext);
  return { isLoggin, onLogin, onLogout };
}
