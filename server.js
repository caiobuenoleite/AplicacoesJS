const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
    }
    if (req.url === '/protocolos') {
        fs.readFile(
            path.join(__dirname, 'public', 'index2.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
    }
    if (req.url === '/pdf') {
        fs.readFile(
            path.join('index.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
    }
    if (req.url === '/depressao') {
        fs.readFile(
            path.join(__dirname, 'public', 'index-testes.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
    }
    if (req.url === '/resultado') {
        fs.readFile(
            path.join(__dirname, 'public', 'index-testes-resultado.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
    }
    if (req.url === '/resultadof1') {
        fs.readFile(
            path.join(__dirname, 'public', 'index-testes-resultadof1.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
    }
    if (req.url === '/resultadof2') {
        fs.readFile(
            path.join(__dirname, 'public', 'index-testes-resultadof2.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
    }
    if (req.url === '/resultadof3') {
        fs.readFile(
            path.join(__dirname, 'public', 'index-testes-resultadof3.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
    }
    if (req.url === '/ansiedade') {
        fs.readFile(
            path.join(__dirname, 'public', 'index-ansiedade.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
    }
    if (req.url === '/riscosuicidio') {
        fs.readFile(
            path.join(__dirname, 'public', 'index-suicidio.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
    }
    if (req.url === '/teste3') {
        fs.readFile(
            path.join(__dirname, 'public', 'tentativa2.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )
    }
    // else if (req.url === '/segundoSB')

    // const filePath = path.join(__dirname, 'public', file)


}
    // if (req.url === '/contato')
    //     return res.end('<h1>Contato</h1>')
).listen(9000, () => console.log('Server is runing'))