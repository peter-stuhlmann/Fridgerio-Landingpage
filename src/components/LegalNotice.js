import React, { Fragment, useState, useEffect } from 'react';

function LegalNotice() {
  const [legal, setLegal] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLegal();
  }, []);

  const fetchLegal = async () => {
    setLoading(true);
    try {
      const url = `https://impressum-api.sklinkusch.now.sh/impressum`;
      const response = await fetch(url);
      const data = await response.json();
      setLegal(data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return (
    <Fragment>
      <h1>Impressum</h1>

      {loading && <p>Inhalt wird geladen ...</p>}

      {error && (
        <p>
          Es ist ein Fehler aufgetreten, der Inhalt kann nicht geladen werden.
        </p>
      )}

      {legal &&
        legal.title.map((subtitle, index) => (
          <div key={`title-${index}`}>
            <h2>{subtitle}</h2>
            {typeof legal.content[index] === 'string' ? (
              <p>{legal.content[index]}</p>
            ) : (
              legal.content[index].map((paragraph, subindex) => (
                <div key={`para-${index}-${subindex}`}>
                  <p>{paragraph}</p>
                </div>
              ))
            )}
          </div>
        ))}

      {legal && <p>{legal.source}</p>}
    </Fragment>
  );
}

export default LegalNotice;
