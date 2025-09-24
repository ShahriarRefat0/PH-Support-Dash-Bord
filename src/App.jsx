import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import IssuesManagement from "./Components/IssuesManagement";
import { Suspense } from "react";


const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json()
}

function App() {
  const fetchPromise = fetchIssues();
  return (
    <>
      <Navbar></Navbar>

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <span className="loading loading-ring loading-xl"></span>
          </div>
        }
      >
        <IssuesManagement fetchPromise={fetchPromise}></IssuesManagement>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
