import Page from "./page/Page";
import { FavoritesProvider, WeatherProvider } from "./provider";

function App() {
  return (
    <>
      <WeatherProvider>
        <FavoritesProvider>
          <Page />
        </FavoritesProvider>
      </WeatherProvider>
    </>
  );
}

export default App;
