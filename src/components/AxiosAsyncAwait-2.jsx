import { useEffect, useState } from "react";
import axios from "axios";

export function AxiosAsyncAwait2() {
  const [fact, setFacts] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const res = await axios.get("https://catfact.ninja/fact");
        setFacts(res.data.fact);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFacts();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-center">Cat Fact</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="bg-white shadow-md rounded-xl p-4 hover:bg-gray-50 transition max-w-md mx-auto">
          <p className="text-gray-600">{fact}</p>
        </div>
      )}
    </div>
  );
}
