const API_URL = "https://fakestoreapi.com/products";

export async function fetchData(){
  try{
    const response = await fetch(API_URL);
    if(!response.ok) throw new Error("Error en la solicitud");
    return await response.json();
  }catch(error){
    console.log(error);
  }
}

export function renderizarTarjetas(data){
  const container = document.getElementById("tarjetasContainer");
  container.innerHTML = ""; // limpiar antes de renderizar
  data.forEach(product => {
    container.innerHTML += `
      <div class="col-md-4 mb-3">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Precio: $${product.price}</h6>
          </div>
        </div>
      </div>
    `;
  });
}
