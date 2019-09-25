const http = require('http')
const url = require('url')

const data = require('./data')

function userAccountList (req, res) {
    res.statusCode = 200;
    res.end(JSON.stringify(data));
}

function addNewAccount (req, res) {
    
    let body = '';

    req.on('data', chunk => body += chunk.toString())

    req.on('end', () => {
        data.push(JSON.parse(body))
        res.statusCode = 201;
        return res.end(`Added  ${JSON.parse(body).name}`)
    })

    req.on('error', error => {
        res.statusCode = 400;
        return res.end(error);
    })

}

function errorRequest(req, res) {
    res.statusCode = 404;
    res.end('Please enter the correct endpoint')
}

const server = http.createServer((req, res) => {
    const urlAccounts = url.parse(req.url)
    if (urlAccounts.pathname === '/api/accounts') {
        switch (req.method) {
            case 'GET':
                userAccountList(req, res)
                break;
            case 'POST':
                addNewAccount(req, res)
                break;
            default:
                errorRequest(req, res)
                break;
        }
    } else {
        errorRequest(req, res)
    }
})

server.listen(8080, () => console.info(`Server is using port 8080`));

