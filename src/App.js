import { useEffect } from "react"
import CharacterGrid from "./pages/CharacterGrid"

const App = () => {

  useEffect(() => {
    document.title = "Rick & Morty"
  }, [])

  return (
    <CharacterGrid />
  )
}

export default App;
