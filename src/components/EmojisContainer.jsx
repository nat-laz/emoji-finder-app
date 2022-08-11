import React from "react";
import emojis from "../data/emoji.json";
import EmojiItem from "./EmojiItem";

const EmojisContainer = () => {
  return (
    <div className="main">
      <input
        className="input"
        type="text"
        name="seach"
        placeholder="search for emoji"
      />
      <div className="emoji-wrapper">
        {emojis.map((emoji) => {
          return <EmojiItem symbol={emoji.symbol} />;
        })}
      </div>
    </div>
  );
};

export default EmojisContainer;
