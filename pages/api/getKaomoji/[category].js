import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import { kaomoji } from "../../../lib/kaomojis";
// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    origin: "*"
  })
);

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);
  const {
    query: { category }
  } = req;

  var selectKaomoji;
  var selectCategory;
  const positiveCategories = ["joy", "suprise", "love", "greeting"];

  if (category in kaomoji) {
    selectCategory = category;
    selectKaomoji =
      kaomoji[selectCategory][
        Math.floor(Math.random() * kaomoji[selectCategory].length)
      ];
  } else {
    selectCategory =
      positiveCategories[Math.floor(Math.random() * positiveCategories.length)];
    selectKaomoji =
      kaomoji[selectCategory][
        Math.floor(Math.random() * kaomoji[selectCategory].length)
      ];
  }

  // Rest of the API logic
  res.json({ kaomoji: selectKaomoji, category: selectCategory });
}
