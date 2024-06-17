import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div>{error.statusText}</div>
      <div>{error.status} - {error.data.trim()}</div>
    </>
  );
};

export default ErrorPage;
