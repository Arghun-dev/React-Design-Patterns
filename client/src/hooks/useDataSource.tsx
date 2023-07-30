import { useState, useEffect } from "react";

export const useDataSource = (getResourceFunc: () => Promise<any>) => {
  const [resorce, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getResourceFunc();
      setResource(result);
    })();
  }, [getResourceFunc]);

  return resorce;
};
