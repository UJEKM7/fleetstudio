const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');


app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({extended: true}));


app.listen(process.env.PORT || 3000, () => {
    console.log("Started listening on port ", process.env.PORT || 3000);
})


