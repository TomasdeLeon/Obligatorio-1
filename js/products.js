var categoriesArray = [];

function showProductsList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let product = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action" onclick="desplegar(PRODUCTS_URL)">
            <div class="row" id="` + product.name + `">
                <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ product.name +`</h4>
                        <p class="card-text"><small class="text-muted"> Costo: usd$` + product.cost + `</small><br>
                        <small class="text-muted"> Vendidos: ` + product.soldCount + `</small></p>
                    </div>
                    <div> ` + product.description + `</div>
                </div>
            </div>
        </div>
        `

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            //Muestro los productos ordenados
            showProductsList(categoriesArray);
        }
    });
});