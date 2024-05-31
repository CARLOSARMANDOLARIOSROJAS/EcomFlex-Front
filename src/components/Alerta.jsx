import { Alert, AlertTitle } from '@mui/material';

export const Alerta = ({ alerta }) => {
  const { msg, error } = alerta;

  return (
    <Alert severity={error ? "error" : "success"}>
      <AlertTitle>{error ? "Error" : "Éxito"}</AlertTitle>
      {msg}
    </Alert>
  );
};
