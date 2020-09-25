import React, {useEffect, useState} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useClipboard } from "use-clipboard-copy";

export default function Landing() {
  const clipboard = useClipboard();
  const ajaxCode =
    "$.ajax({\n\
  url: 'https://kaomoji.party/api/getKaomoji/[category]',\n\
  success: function(data) {\n\
    console.log(data);\n\
  }\n\
});";

  const resultCode = '{\n\
  "kaomoji":"(♡μ_μ)",\n\
  "category":"love"\n\
}';
const [currentKaomoji, setCurrentKaomoji] = useState("___________")
useEffect(() => {
  fetch('/api/getKaomoji')
  .then(response => response.json())
  .then(data => setCurrentKaomoji(data["kaomoji"]));
}, [])

  return (
    <div>
      <div className="flex justify-center h-screen items-center">
        <div className="flex flex-col items-center">
          <div className="flex items-start">
            <div className="font-black bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-teal-400" style={{fontSize: '10rem'}}>
              {currentKaomoji}
            </div>
            <div className="cursor-pointer ml-4">
              <img
                src="/copy.svg"
                onClick={() => clipboard.copy(currentKaomoji)}
              />
            </div>
          </div>
          <div className="text-2xl font-medium mt-6 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-teal-500">
            kaomoji party
          </div>
          <div className="flex justify-between w-full mt-8 font-medium">
            <a href="#documentation" className="hover:underline">
              Docs
            </a>
            <a
              href="https://github.com/chaitanyareddyk/kaomoji.party"
              className="hover:underline"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="flex px-2/12 h-screen py-1/12" id="documentation">
        <div className="flex flex-col">
          <div className="text-4xl underline font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500">
            Documentation
          </div>
          <div className="font-medium text-lg mt-8">API Call:</div>
          <p className="text-gray-600 mt-1">
            You can use AJAX to call the kaomoji.party api,
          </p>
          <SyntaxHighlighter language="javascript">
            {ajaxCode}
          </SyntaxHighlighter>
          <div className="text-sm font-light">[category] - <span className="italic text-gray-600">(optional)</span>: joy, love, embarrassment, sympathy, dissatisfaction, anger, sad, pain, fear, indifference, confusion, doubt, suprise, greeting, hug, wink, sorry, nosebleed, hide, writing, running, sleeping.</div>
          <div className="text-sm font-light">Note: If you don't specify a category, it will return a kaomoji from a random positive category.</div>
          <div className="font-medium text-lg mt-8">Result:</div>
          <p className="text-gray-600 mt-1">
            The results will always arrive in json format,
          </p>
          <SyntaxHighlighter language="javascript">
            {resultCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
