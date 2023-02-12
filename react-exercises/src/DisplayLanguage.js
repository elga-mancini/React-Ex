import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    CURRENT_LANGUAGE: "The language is setted on: English",
  },
  it: {
    CURRENT_LANGUAGE: "La lingua è impostata su: Italiano",
  },
};

export class DisplayLanguage extends React.Component {
  state = {
    CURRENT_LANGUAGE: "en",
  };

  render() {
    return (
      <div>
        
      </div>
    );
  }
}