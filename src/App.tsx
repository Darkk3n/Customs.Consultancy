import { NavBar } from "./shared/components/NavBar"

const App = () => {
  return (
    <div className="container mt-3  ml-10 w-full flex flex-col justify-center items-center">
      <NavBar />
      <main className="bg-white w-full h-screen text-center text-slate-900">
        Contenido
      </main>
    </div>
  )
}

export default App