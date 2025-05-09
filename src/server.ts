import restana from "restana";
const port = 3000;
const service = restana();

service.get('/', (req, res) => res.send('Hello World!'))

service.start(port);