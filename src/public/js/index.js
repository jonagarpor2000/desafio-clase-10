const socket = io()


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
  document.querySelector('#products-list').textContent = 'Lista de Productos'
  let htmlproduct = ''
  data.forEach(product => {
      product.forEach( key => {
        htmlproduct += `<li> Nombre: ${key.title}
        <br>Descripcion: ${key.description}
        <br>Precio: ${key.price}
        <br>Status: ${key.status}
        <br>Codigo: ${key.code}
        <br>Stock: ${key.stock} </li><br>`
      })
  });
  
  productslist.innerHTML = htmlproduct
})