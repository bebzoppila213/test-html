const express = require('express')
var fs = require('fs');
const cors = require('cors');

const app = express()
const port = 8081

app.use(express.json())
app.use(cors());

const promisicationReadFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', function(err, data) {
            if (err) throw reject(err);
            resolve(data);
        });
    })
}


app.post('/cities', async(req, res) => {
    const fileData = JSON.parse(await promisicationReadFile('cities.json'))
    res.send(fileData.filter((city) => city.name.toLowerCase().includes(req.body.name.toLowerCase())))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})