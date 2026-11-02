import express from "express";
import path from "path";
import routes from "./routes/index.route";

const app = express();
const port = 4000;

// Thiết lập thư mục tĩnh
app.use("/media", express.static(path.join(__dirname, "media")));

// Thiết lập đường dẫn
app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
