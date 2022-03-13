import { useState, useEffect } from "react";

function useFetch(url, addedNoteFlag) {
  const [notes, setNotes] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortControler = new AbortController();

    fetch(url, { signal: abortControler.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("error appears");
        }
        return res.json();
      })
      .then((data) => {
        setNotes(data);
        setLoadingMessage(false);
        setError(null);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setLoadingMessage(false);
          setError(error.message);
        }
      });

    return () => abortControler.abort();
  }, [url, addedNoteFlag]);

  return { notes, loadingMessage, error };
}

export default useFetch;
