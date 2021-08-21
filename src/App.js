import { useState } from "react";


var emojiObject = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo"
};
var emojiList = Object.keys(emojiObject);
// console.log(emojiList)
export default function App() {
  var [meaning, setEmojiMeaning] = useState("");
  function changeHandler(e) {
    var emoji = e.target.value;
    if (emoji in emojiObject) {
      meaning = emojiObject[emoji];
      setEmojiMeaning(meaning);
    } else {
      setEmojiMeaning("Emoji not present in database");
    }
  }
  function clickHandler(e) {
    var emoji = e.target.textContent;
    //  console.log(emoji);
    meaning = emojiObject[emoji];
    setEmojiMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <p>This app translates emoji into their meaning. </p>
      <input onChange={changeHandler} />
      <div className="emojiText">{meaning}</div>
      <ul className="ul">
        {emojiList.map(function (emoji) {
          return (
            <li
              className="list"
              onClick={clickHandler}
              key={emoji}
              style={{ display: "inline" }}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
