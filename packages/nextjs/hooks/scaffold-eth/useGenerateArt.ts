import { useCallback, useEffect, useState } from "react";

export function useGenerateArt(x?: string, y?:string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const PREFIX="https://sd-simplify.soulcats.xyz/api/generate?x=";

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = PREFIX + x + "&y=" + y;
      const response = await fetch(url);
      const blobData:any = await response.blob();
      const imageUrl:any = URL.createObjectURL(blobData);

      if (!response.ok) {
        throw blobData;
      }

      setData(imageUrl);
    } catch (err:any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  
  return { data, loading, error, fetchData };
}
