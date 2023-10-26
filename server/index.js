const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routes/auth.routes");
const app = express();
const PORT = config.get("serverPort");
const corsMiddleware = require ("./middleware/cors.middleware");
const cors = require('cors');

app.use(corsMiddleware);
app.use(express.json());
// app.use('/api/registration', authRouter);
// app.use('/api/login', authRouter);
app.use(cors({origin: true, credentials: true}));

const start = async () => {
        mongoose.connect(config.get("dbUrl"))
        .then(app.listen(PORT, () => {
            console.log(`Server started on ${PORT}`)
              }))
              .catch(error => {
                console.log(error.message);
                exit(1);
              }

        )
    // }
    }
// app.get('/api/registration', (request, response) => {
//   response.json({
//     message: "backend"
//   })
// })
start();