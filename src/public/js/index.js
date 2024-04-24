const socket = io()


let productslist = document.querySelector('#products-list')

socket.on('srv:productsended',data =>{
  document.querySelector('#products-list').textContent = 'Lista de Productos'
  let htmlproduct = ''
  data.forEach(product => {
      product.forEach( key => {
        htmlproduct += `<li hidden="hidden"> ${key.id}
        <li> Nombre: ${key.title}
        <br>Descripcion: ${key.description}
        <br>Precio: ${key.price}
        <br>Status: ${key.status}
        <br>Codigo: ${key.code}
        <br>Stock: ${key.stock} </li>
        <button id="btn-edit" type="button">Editar</button>
        <button id="btn-del" type="button">Eliminar</button>
        <br>`
      })
  });
  
  productslist.innerHTML = htmlproduct
  /*const editButtons = document.querySelectorAll('#btn-edit');
  editButtons.forEach((editButton) => {
    editButton.addEventListener('click', () => {
      try{

      }catch(e){
        console.log(e)
      }
      const title = document.querySelector('[name="title"]').value;
      const description = document.querySelector('[name="description"]').value;
      const price = document.querySelector('[name="price"]').value;
      const code = document.querySelector('[name="code"]').value;
      const stock = document.querySelector('[name="stock"]').value;

      const editedProduct = {
        //id: getNextId(), 
        title,
        description,
        price,
        code,
        stock,
      };

      socket.emit('client:productedited', editedProduct);
    });
  })*/
})

socket.on('srv:codeexist', data => {
  alert ('El codigo ingresado ya existe')
})