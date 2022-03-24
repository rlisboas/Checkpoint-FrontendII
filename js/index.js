let sectionCards = document.querySelector(".containerCards");
let titleInput = document.getElementById("title");
let descriptionInput = document.getElementById("description");
let urlImgInput = document.getElementById("urlImg");
let bgInput = document.getElementById("bgImg");
let btnCriar = document.querySelector(".button");
let body = document.querySelector("body");

btnCriar.addEventListener("click", (e) => {
  e.preventDefault();

  if (urlImgInput.value || titleInput.value || descriptionInput.value) {
    // Div container do card
    let divContainer = document.createElement("li");
    divContainer.setAttribute("class", "card");
    divContainer.style.width = "22rem";
    sectionCards.appendChild(divContainer);

    // Imagem do card
    let img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", `${urlImgInput.value}`);
    divContainer.appendChild(img);

    // Div do card
    let divCard = document.createElement("div");
    divCard.setAttribute("class", "card-body");
    divContainer.appendChild(divCard);

    // Título do card
    let h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    h5.innerText = `${titleInput.value}`;
    divCard.appendChild(h5);

    // Descrição do card
    
    let p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.innerText = `${descriptionInput.value}`;
    divCard.appendChild(p);

    // Imagem de Background

    body.style.backgroundImage = `url(${bgInput.value})`;
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    body.style.backgroundAttachment = "fixed";
    body.style.backgroundPosition = "center";
  } else {
    alert("Para trocar o fundo é necessário preencher mais de 1 campo");
  }



});

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div> */