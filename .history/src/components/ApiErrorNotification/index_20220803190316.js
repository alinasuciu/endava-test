import { useApiError } from "../../common/hooks";

export default function ApiErrorNotification() {
  const { error, removeError } = useApiError();

  const handleSubmit = () => {
    removeError();
  };

  return (
    error && 
    <div>
      {error.message && <p>({error.message})</p>}
      <button onClick={handleSubmit}>
        Ok
      </button>
    </div>
  )
}