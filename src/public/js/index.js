const socket = io()

 let products_arr = []
 function getNextId() {
  let ultimaposicion = 1;
  if(products_arr.length === 0){
      return ultimaposicion;
  }
  ultimaposicion = products_arr.at(-1).id + 1; //Esto es por si me eliminan valores del medio
  return ultimaposicion;
}

const product = {
  id: this.getNextId(),
  title, 
  description, 
  price,
  status: true, 
  code,
  stock,
}
let productslist = document.querySelector('#products-list')


socket.on('productsended',data =>{
  let product = ''
  data.forEach(element => {
      product += `<li>
      Nombre: ${element.title}
      Descripcion: ${element.description}
      Precio: ${element.price}
      Status: ${element.status}
      Codigo: ${element.code}
      Stock: ${element.stock}
      <li><br>`
  });
  productslist.innerHTML = product
})