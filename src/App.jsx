import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4">
      <p className="bg-primary text-primary-content rounded-2xl p-2 cursor-pointer shadow-sm">hello world!</p>
      <p className="bg-secondary text-secondary-content rounded-2xl p-2 cursor-pointer shadow-sm">hello world!</p>
      <p className="bg-accent text-accent-content rounded-2xl p-2 cursor-pointer shadow-sm">hello world!</p>
      <p className="bg-neutral text-neutral-content rounded-2xl p-2 cursor-pointer shadow-sm">hello world!</p>
      <p className="bg-info text-info-content rounded-2xl p-2 cursor-pointer shadow-sm">hello world!</p>
      <p className="bg-success text-success-content rounded-2xl p-2 cursor-pointer shadow-sm">hello world!</p>
      <p className="bg-warning text-warning-content rounded-2xl p-2 cursor-pointer shadow-sm">hello world!</p>
      <p className="bg-base-300 text-base-content rounded-2xl p-2 cursor-pointer shadow-sm">hello world!</p>
    </div>
  );
}

export default App;
