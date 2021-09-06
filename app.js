const express = require("express");
const config = require("config");
const serverRoutes = require("./routes/dbRoute");
const {getUpload} = require("./servers/saveImages");


const PORT = config.get("constants.PORT");

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(serverRoutes);


app.get("/", (req, res) => {
    res.render("main", {title: "MAIN ALL BOOKS"});
});

app.listen(PORT, () => {
    console.log("Server is listening " + PORT);
})