import Page from "./page/Page";
import { WeatherProvider, FavoritesProvider } from "./provider";

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
