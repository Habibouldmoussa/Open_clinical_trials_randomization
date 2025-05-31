import restana from "restana";
/* use graphql for strong typing */
import graphqlhttp from "restana-graphql";
import helmet from "helmet";
import app from "./server/app.js";

const port = 3000;
const service = restana();

service.get('/', (req, res) => res.send('Hello World!'))

service.start(port);