import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import __dirname from './utils.js';
import viewsRouter from './routers/viewsRouter.js'


const app = express()
const PORT = process.env.PORT || 8080
const httpServer = app.listen(PORT, error => {
    if(error) console.log(error)
    console.log('Server escuchando en el puerto 8080')
})
const io = new Server(httpServer)

function productsSocket (io){
    return (req, res,next) => {
        req.io = io
        next()
    }
}


app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views',__dirname+'/views')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+'/public'))
app.use(productsSocket(io))
app.use('/', viewsRouter,productsSocket(io))


