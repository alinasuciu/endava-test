import useAPIError from '../../common/hooks/useAPIError';

export default function ApiErrorNotification() {
  const { error, removeError } = useAPIError();

  const handleSubmit = () => {
    removeError();
  };

  return (
    <div>
      {error && error.message && <p>({error.message})</p>}
      <button data-testid="notification-submit-button" onClick={handleSubmit}>
        Ok
      </button>
  </div>
  )
}