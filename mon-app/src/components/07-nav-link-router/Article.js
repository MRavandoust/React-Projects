import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const Article = () => {
  const [article, setArticle] = useState("Article");

  //Permet de récupérer les paramètres qui sont dans l'url
  //   const params = useParams();
  const { id } = useParams();

  // Avec useLocation on peut récupérer des données qui viennent de la page parent

  const location = useLocation();

  //Sans déstrucuration
  //const title = location.state.title

  const { title } = location.state;

  return (
    <div>
      <h1>
        {title} N° {id}
      </h1>
    </div>
  );
};

export default Article;
