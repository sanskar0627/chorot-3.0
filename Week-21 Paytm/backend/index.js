const express = require("express");

const app = express();
const PORT = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());


const router = require("./routes/index");

app.use("/api/v1", router);







app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});