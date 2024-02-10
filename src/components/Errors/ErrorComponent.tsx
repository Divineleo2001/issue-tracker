import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { MdError } from "react-icons/md";

interface ErrorComponentProps {
  alertTitle: string;
  message: string | undefined | null;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({
  alertTitle,
  message,
}) => {
  return (
    <>
      {message ? (
        <div>
          <Alert variant="destructive" className="border-none m-0 p-0">
            <div className="flex flex-row gap-4 items-center ">
              <AlertTitle>{alertTitle} :</AlertTitle>
              <AlertDescription>{message}</AlertDescription>
            </div>
          </Alert>
        </div>
      ) : null}
    </>
  );
};

export default ErrorComponent;
