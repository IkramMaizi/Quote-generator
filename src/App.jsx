import React, { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage"
import { withDevCycleProvider } from "@devcycle/react-client-sdk";
import { useVariableValue } from "@devcycle/react-client-sdk";
const SdkKey = import.meta.env.VITE_DEVCYCLE_KEY;

function App() {
    const maintenanceMode = useVariableValue("maintenance-mode", false);
    const dark = useVariableValue("darkmode", true);
    // Additional hooks and logic

    if (dark) {
      return (
        <div className="App">
          <article>
            <h1>We&rsquo;ll be back soon!</h1>
            <div>
              <p>
                Sorry for the inconvenience but we&rsquo;re performing some
                maintenance at the moment. If you need to you can always{" "}
                <a href="mailto:#">contact us</a>, otherwise we&rsquo;ll be back
                online shortly!
              </p>
              <p>&mdash; The Team</p>
            </div>
          </article>
        </div>
      );
    }
    

  return (
    <div className="bg-[url('./assets/background.png')] bg-cover bg-bottom w-full min-h-screen px-16 pt-6">
      <HomePage />
    </div>
  );
}

export default withDevCycleProvider({
  sdkKey: SdkKey,
})(App);
