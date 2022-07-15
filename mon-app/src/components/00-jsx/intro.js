/**
 * @JSX 
 * extension de javascript crée par React, utilise la syntaxe sous 
 * forme de tags directement dans le code javascript, 
 * ce qui permet de combiner HTML et JS facilement.
 * On peut appliquer des expressions javascript directement dans note JSX avec des accolades.
 * JSX stands for JavaScript XML.
 */

/*
 * @Exemple
 * On a bien créer un composant Exemple pas exemple.
 * Par convention il faut mettre une majuscule à nos composants JSX !
 */
const Exemple = () => { 

    /**
     * Variable
     * @prenom String
     * @nom String
     * @nombre Number
     * @prix Number
     * @boolean Boolean
     */

    const prenom = "Francis";
    const nom = "Muna";
    const nombre = 2;
    const prix = 10;
    const boolean = true;

    /**
     * @array Objet
     * @arrayCollection Objet
     */
    const array = [
      "francis",
      "pomme",
      "coco"
    ];
  
    const arrayCollection = [
      {
        id: 0,
        prenom : "Ippo",
        technique: "dumsfer roll",
        stamina: 23192,
        strength: 2898
      },
      {
        id: 1,
        prenom : "Challenger",
        technique: "jab",
        stamina: 24516,
        strength: 2356
      }
    ];
  
    return(
      <div>
        {/* Exemple 1 pour des maths */}
        <p>Exemple 1 (Soustraire 50 - 8 pour savoir combien de pommes il reste) : il me reste {50-8} pommes</p>
  
        <p>Exemple 2 (Afficher la variable prenom) : {prenom} </p>
  
        <p>Exemple 3 (Transformer la variable prenom en miniscule): {prenom.toLowerCase()} </p>
  
        <p>Exemple 4 (Concaténer la variable nom et prenom) : {prenom + " " + nom}</p>

        <p>Exemple 5 (condition : si notre variable boolean est égal à true on affiche quelle est égale à true sinon on affiche une chaine vide) : </p>

        {boolean ? 
            <p>c'est true</p>
            :
            <p>c'est false</p>
        }   

        <p>
            Exemple 6 (condition : si notre variable boolean est égal à true et que notre variable nombre est strictement égale à 2 on afffiche tout est ok,
            sinon on affiche une chaine vide) :  
        </p>
        
        {boolean && nombre === 2 ?
            <p>tout est ok</p> 
            : 
            <p></p>
        }

        <p>
            Exemple 7 (condition : si notre variable boolean est égal à true ou que notre variable nombre est strictement égale à 10 on afffiche tout est ok,
            sinon on affiche une chaine vide) : ... 
        </p>
        
        {boolean || nombre === 10 ?
            <p>tout est ok</p>
            :
            <p></p>
        }

        <p>
          Exemple 8 (condition : si notre variable prix est supérieur à 10, on affiche "le prix est supérieur à dix" sinon "le prix est inférieur à dix" ) : 
        </p>

        {prix > 10 ?
            <p>Le prix est supérieur à dix</p>
            :
            <p>Le prix est inférieur à dix</p>
        }

        <p>Exemple 9 (afficher le premier prenom de notre array) : {array[0]} </p>
  
        <p>Exemple 10 (Itérer notre array avec la function map et affichez tout son contenu dans une balise p) : </p>
        
        {/**
         * @map
         * Passe sur chaque element d'un tableau.
         * Elle applique une fonction au tableau, et renvoie un nouveau tableau
         * contenant les résultats de cette fonction.
         */}

         {array.map((item, index) => {
            return(
              <div key={index}>
                <p>{item}</p>
              </div>
            )
         })
         }
        
    
        <p>Exemple 11 (itération arrayCollection et afficher toutes les informations de Ippo) :</p>

        {arrayCollection.map(item => {
          return(
            <div key={item.id}>
              {item.prenom === 'Ippo' &&
                <ul>
                  <li>
                    Prenom : {item.prenom}
                  </li>
                  <li>
                    Technique : {item.technique}
                  </li>
                  <li>
                    Stamina : {item.stamina}
                  </li>
                </ul>
              }
            </div>
          )
        })}
      </div>
    )
  }
  /**
   * @export default
   * Permet d'exporter notre composant, pour pouvoir le réutiliser.
   */
  export default Exemple;