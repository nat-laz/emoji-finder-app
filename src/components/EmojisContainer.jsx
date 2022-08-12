import { useState, useEffect } from "react";

import emojis from "../data/emoji.json";
import EmojiItem from "./EmojiItem";

const EmojisContainer = () => {
  const [inputValue, setInputValue] = useState("");
  const [emoji, setEmoji] = useState(emojis);
  const [filteredEmo, setFilteredEmo]= useState([])
  
  console.log("Array: ",emoji)
  console.log("Input: ",inputValue);

  const searchingEmoji = (text) =>{
      let result = emoji.filter(item=>item.keywords.includes(text))
      setFilteredEmo(result)
  }


  useEffect(()=>{
    !inputValue && setEmoji(emojis)
    searchingEmoji(inputValue)
  },[inputValue])

  return (
    <div className="main">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input"
        type="text"
        name="seach"
        placeholder="search for emoji"
      />
      <div className="emoji-wrapper">
        {emoji.map((item) => {
          return <EmojiItem key={item.title} symbol={item.symbol} />;
        })}
      </div>
    </div>
  );
};

export default EmojisContainer;
