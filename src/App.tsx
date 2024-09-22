import Download from "./Download";

function App() {
  return (
    <main className="pt-28 text-center">
      <Download />
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 px-8 py-4 bg-[rgb(169,229,187)] rounded-apple">
        <span>Made with</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 inline-block pl-1 fill-red-600 "
        >
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        <span>
          {" "}
          by <strong> AngloVedic Technologies</strong>
        </span>
      </div>
    </main>
  );
}

export default App;
