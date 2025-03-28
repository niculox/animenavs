import { AnimeProvider } from "./components/SectionRec";
import AppRoutes from "./routes";

function App() {
  return (
    <AnimeProvider>
      <AppRoutes />
    </AnimeProvider>
  );
}

export default App;
