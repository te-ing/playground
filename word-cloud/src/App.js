import React from 'react';
import WordCloud from 'react-d3-cloud';
import keywordData from "./data.json";

function App() {
  const trendData = keywordData.result.slice(0, 50).map((data) => {
    return { text: data.keyword, value: data.rank };
  });
  console.log(trendData) // rank, keyword
  
  return (
    <div className="App">
      <WordCloud data={trendData}
      width={500}
      height={500}
      font="Times"
      fontWeight="bold"
      fontSize={(word) => Math.log2(word.value) * 5}
      spiral="archimedean"
      rotate={0}
   />
    </div>
  );
}

export default App;
