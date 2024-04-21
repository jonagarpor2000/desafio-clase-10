import { Router } from 'express'
const router = Router()

let products = []

router.get('/realtimeproducts', async(req, res) => {
    res.render('realTimeProducts', {})
    //loadprods(req.io)
  })

router.get('/', (req, res) => {
    res.render('home', {})
})

 /* function loadprods (io){
    let products = []
    console.go
    io.on('connection', socket => {
        console.log(`Cliente Conectado`)
        socket.broadcast.emit('srv:productsended')
        products.push(data)
        //io.emit('srv:productsended', products)
    })  

}*/

function sendclientprod (io,...prod){
    io.on('connection', socket => {
      io.emit('srv:productsended', prod)
  }) 
}
   

router.post('/realtimeproducts',async (req,res)=>{
  const {title,description,price,stock,code} = req.body
  let io = req.io
  let newProd = {
    title:title,
    description: description,
    price: price,
    stock:stock,
    status:true,
    code:code
  }
  products.push(newProd)
  sendclientprod(io,products)
  res.redirect('/realtimeproducts')
})

export default router