import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";
import { kaomoji } from "../../../lib/kaomojis";
import { positiveCategories } from "../../../lib/constants";
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

  var selectKaomoji;
  var selectCategory;

  selectCategory =
    positiveCategories[Math.floor(Math.random() * positiveCategories.length)];
  selectKaomoji =
    kaomoji[selectCategory][
      Math.floor(Math.random() * kaomoji[selectCategory].length)
    ];

  // Rest of the API logic
  res.json({ kaomoji: selectKaomoji, category: selectCategory });
}
