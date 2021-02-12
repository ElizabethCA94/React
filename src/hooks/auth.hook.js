import { useState } from "react";

export const UseAuth = () => {
  const [secretId, setSecretId] = useState("");

  return { secretId, setSecretId };
};
