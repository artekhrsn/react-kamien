import React from "react";

export const data = {
  content: [
    { id: 1, text: "Jutro zaczyna się dziś!" },
    { id: 2, text: "My inwestujemy pięniądze,Ty zainwestuj swój pot!" },
    {
      id: 3,
      text: "Życie jest jak tetris - porażki sie mnożą, sukcesy znikają"
    },
    {
      id: 4,
      text: "Nie możesz wspiąć sie na drabinę sukcesu z rękami w kieszeniach"
    },
    { id: 5, text: "Myśl poza schematami" }
  ]
};

const GetData = () => {
  const text = data.content;
  const index = Math.floor(Math.random() * text.length);
  return text[index].text;
};

export default GetData;
