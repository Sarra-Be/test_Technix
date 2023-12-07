import React, { useState, useEffect } from "react";

const reactComponent = ({ apiUrl }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erreur dans la récupération des données : ", error);
        setIsLoading(false);
      });
  }, [apiUrl]);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h2>Liste des éléments</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>  
        ))}
      </ul>
    </div>
  );
};

export default reactComponent;
