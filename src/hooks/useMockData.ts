import { useEffect, useState } from "react";
import type { Asset } from "../types";

export function useMockData() {
  const [data, setData] = useState<Asset[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const mockData: Asset[] = [
          {
            ticker: "ALPHA",
            price: 3150.67,
            assetClass: "Credit",
          },
          {
            ticker: "BETA",
            price: 3791.37,
            assetClass: "Equities",
          },
          {
            ticker: "CHARLIE",
            price: -3791.37,
            assetClass: "Commodities",
          },
        ];

        setData(mockData);
      } catch (err) {
        setError(err as Error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
