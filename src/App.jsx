import Page from "./page/Page";
import {
  FavoritesProvider,
  WeatherProvider,
  LocationProvider,
} from "./provider";

function App() {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavoritesProvider>
            <Page />
          </FavoritesProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
}

export default App;
