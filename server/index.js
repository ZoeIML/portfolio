const server = require('.')
const port = process.env.PORT || 8080

server.listen(port, function () {
    console.log('Server is listening on port:', port)
})

