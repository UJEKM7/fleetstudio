const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

const gitRoute = require("./routes/gitRoute");

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use("/", gitRoute);

app.use((err, req, res, next) => {
    return res.status(404).json({error:"Page not found."})
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Started listening on port ", process.env.PORT || 3000);
})


