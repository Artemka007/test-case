const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('seminars.json');
const middlewares = jsonServer.defaults({ noCors: true });

server.use(middlewares);

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});
server.use('/api/v1/', router);
server.listen(4200, () => {
    console.log('Mock api server listening at localhost:4200');
});
