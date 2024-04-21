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

let productslist = document.querySelector('#products-list')


socket.on('srv:productsended',data =>{
  document.querySelector('#products-list').value = 'Lista de Productos'
  let htmlproduct = ''
  console.log(`Mis datos son: ${data}`)
  data.forEach(product => {
      htmlproduct += `<li> Nombre: ${product.title}
      <br>Descripcion: ${product.description}
      <br>Precio: ${product.price}
      <br>Status: ${product.status}
      <br>Codigo: ${product.code}
      <br>Stock: ${product.stock} <li><br>`
  });
  
  productslist.innerHTML = htmlproduct
})