import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="flex bg-white min-h-screen font-sans">
      <Sidebar />
      <main className="flex-1 mt-[30px]">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
