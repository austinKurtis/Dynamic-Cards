console.log("cards.js");

let cardHeader = document.getElementById("cardHead");
let cardText = document.getElementById("cardBody");
let cardOutput = document.getElementById("cardContainer");
let cardIndex = 1;
let createBtn = document.getElementById("btn-create");


function addCard(){
	let newCard = document.createElement("div");
	newCard.className= "fullCard";
	cardOutput.appendChild(newCard);

	let headerCreate = document.createElement('h2');
	let headerInput = document.createTextNode(cardHeader.value);
	headerCreate.appendChild(headerInput);
	headerCreate.className = "headingH2";
	newCard.appendChild(headerCreate);
	

	let bodyCreate = document.createElement("p");
	let bodyInput = document.createTextNode(cardText.value);
	bodyCreate.appendChild(bodyInput);
	bodyCreate.className = "paraLi";
	newCard.appendChild(bodyCreate);

	let deleteBtn = document.createElement("button");
	deleteBtn.className = "btn-delete";
	deleteBtn.innerHTML = "Delete Me";
	newCard.appendChild(deleteBtn);

	function cardDelete(){
		cardOutput.removeChild(newCard);
	}

	cardIndex += 1;

	deleteBtn.addEventListener("click", cardDelete);

	// let cardHeader = document.getElementById("cardHead").value;
	// let cardText = document.getElementById("cardBody").value;
	//let cardIdLength = document.getElementsByClassName("fullCard").length;
	//document.getElementById("cardContainer").innerHTML += `<li class="fullCard" id="${cardIdLength}"<h2 class="headingH2">${cardHeader}</h2><p class="paraLi">${cardText}</p><br><button id="del-${cardIdLength}" class="btn-delete">Delete Me</button></li>`;
	//let deleteBtn = document.getElementsByClassName("btn-delete");
	//for (i = 0; i < deleteBtn.length; i++)
	//	deleteBtn[i].addEventListener("click", removeCard);

}

// function removeCard(){
// 	let cardNumber = document.getElementsByClassName("fullCard");
// 	for (let i = 0; i < newCards.length; i++) {
// 	}
		
// }



createBtn.addEventListener("click", addCard); 

