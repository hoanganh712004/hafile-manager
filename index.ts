import express from "express";
import routes from "./routes/index.route";

const app = express();
const port = 4000;

// Thiết lập đường dẫn
app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
