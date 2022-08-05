import Krypto from "../Images/kryptoapp.PNG";
import Countries from "../Images/countries.PNG";
import Cocktail from "../Images/cocktaildb.PNG";
import Feetness from "../Images/feetnessgym.PNG";

const projects = [
  {
    id: 1,
    name: "Krypto",
    github: "https://github.com/Shurrd/krypto-react",
    url: "https://mykryptoapp.netlify.app",
    image: Krypto,
    description:
      "View the trending and most valuable crypto currency in the world right now. You can also check the prices and also view the trend of the crypto currency for the last 7 days",
    tools: [
      { label: "React JS" },
      { label: "React Hooks" },
      { label: "Sparklines" },
      { label: "SCSS" },
    ],
  },
  {
    id: 2,
    name: "REST COUNTRIES API",
    github: "https://github.com/Shurrd/rest-countries-api",
    url: "https://restcountries-api-abraham.netlify.app",
    image: Countries,
    description:
      "This displays all the countries in the world, you can search for a specific country and filter based on any region of your choice and all comes with a dark mode option.",
    tools: [
      { label: "React JS" },
      { label: "React Router DOM" },
      { label: "Rest-Contries API" },
      { label: "Tailwind CSS" },
      { label: "Context API" },
    ],
  },
  {
    id: 3,
    name: "COCKTAIL DB",
    github: "https://github.com/Shurrd/Cocktail-Website",
    url: "https://react-cocktails-website.netlify.app",
    image: Cocktail,
    description:
      " This is a project made using a cocktail api. It includes searching of different cocktails using the search bar provided and also viewing the information of each cocktail provded also by the external API",
    tools: [
      { label: "React JS" },
      { label: "React Router DOM" },
      { label: "Cocktail API" },
      { label: "Context API" },
    ],
  },
  {
    id: 4,
    name: "FEETNESS GYM",
    github: "https://github.com/Shurrd/Gym-Exercises",
    url: "https://myfeetnessgym.netlify.app",
    image: Feetness,
    description:
      "  Are you feeling unfit, feetness gym is the best website for you to track your fitness life and also get new exercise videos from youtube and you also have the opportunity to see similar exercises relating to your proposed exercise.",
    tools: [
      { label: "React JS" },
      { label: "Material UI" },
      { label: "ExerciseDB API" },
      { label: "YoutubeDB API" },
      { label: "React Router DOM" },
    ],
  },
];

export default projects;
