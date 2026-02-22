import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
const PageError = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // Error ini berasal dari internal React Router (seperti 404)
    errorMessage = error.statusText || error.data?.message;
  } else if (error instanceof Error) {
    // Error standar JavaScript (seperti error.message)
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error occurred';
  }
  return (
    <div>
      <div>PageError</div>
      <p>{errorMessage}</p>
    </div>
  );
};

export default PageError;
