import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = [{
    title: "Avokado Ezmeli Taco",
    date: "12 Ocak 2021, Salı",
    image: food,
    description:
      "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
  },
  {    
    title: "İskender Kebap",
    date: "29 Mayıs 2021, Cumartesi",
    image:"https://www.diyetkolik.com/site_media/media/2019/11/01/iskender-kebap.jpg",
    description:
      "Kendinizi şımartmak istiyorsanız gereken lezzet iskenderdir. Türk mutfağının eşsiz yemeği size mükemmel bir ziyafet keyfi yaşatacaktır. Ankara sokaklarında yürürken kendinizi bir anda iskender yemek için Aspavada bulmanız içten bile değil. :D",
  }
];

  const likeCount = 193;
  const isLiked = true;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          liked={isLiked}
          recipes={recipeItem}
          likeCount = {likeCount}
          author={recipeAuthor}
        />
      </header>
    </div>
  );
}

export default App;
