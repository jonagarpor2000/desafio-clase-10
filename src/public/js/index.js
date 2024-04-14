

import productRouter from "../../routers/product.router.js"



router.get('/', async(req, res) => {
    let allProducts = await prodmg.getProducts()
    res.render('home', { productos: allProducts })
  })
