import React, { useState } from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import ToggleTheme from "./ToggleTheme";
import { ThemeContext, themes } from "./context/theme-context";

function App() {
  const [theme, setTheme] = useState(themes.light);
  document.body.style.backgroundColor = theme.backgroundColor;
  document.body.style.color = theme.textColor;

  function toggleTheme() {
    setTheme(theme =>
      theme.textColor === "AntiqueWhite" ? themes.light : themes.dark
    );
  }
  return (
    <React.Fragment>
      <ThemeContext.Provider value={theme}>
        <Header />
        <ThemeContext.Consumer>
          {contextTheme => <ToggleTheme theme={contextTheme} toggleTheme={toggleTheme}/>}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
      <TicketControl />
    </React.Fragment>
  );
}

  export default App;