import { ResultComponent } from "./components/ResultComponent";
import { SearchComponent } from "./components/SearchComponent";
import { MainComponent } from "./styles/styles";

export function App() {
  return (
    <MainComponent>
      <SearchComponent />
      <ResultComponent />
    </MainComponent>
  )
}
