import React, { Fragment, useState, useEffect } from 'react';

function PrivacyPolicy() {
  const [privacy, setPrivacy] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPrivacy();
  }, []);

  const fetchPrivacy = async () => {
    setLoading(true);
    try {
      const url = `https://impressum-api.sklinkusch.now.sh/datenschutz`;
      const response = await fetch(url);
      const data = await response.json();
      setPrivacy(data);
      setError(null);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return (
    <Fragment>
      <h1>Datenschutzerklärung</h1>

      {loading && <p>Inhalt wird geladen ...</p>}

      {error && (
        <p>
          Es ist ein Fehler aufgetreten, der Inhalt kann nicht geladen werden.
        </p>
      )}

      {privacy &&
        privacy.title.map((subtitle, index) => (
          <div key={`title-${index}`}>
            <h2>{subtitle}</h2>
            {typeof privacy.content[index] === 'string' ? (
              <p>{privacy.content[index]}</p>
            ) : (
              privacy.content[index].map((paragraph, subindex) => (
                <div key={`para-${index}-${subindex}`}>
                  <p>{paragraph}</p>
                </div>
              ))
            )}
          </div>
        ))}
    </Fragment>
  );
}

export default PrivacyPolicy;
