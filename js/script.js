//Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
//Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
//Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

//Array contentente le card
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//Variabili/Costanti
const boxContainer = document.getElementById('icons-box');
const groupSelect = document.getElementById('icons');

//Funzione per generare le card
function boxGenerator(element){
    let newCol = document.createElement('div');
    newCol.setAttribute('class', 'col');
    let iconBox = document.createElement('div');
    iconBox.setAttribute('class', 'personalCard');
    let newDiv = document.createElement('div');
    newDiv.style.color = `${element.color}`;
    newDiv.innerHTML =`<i class="fa-solid fa-${element.name}"></i>`;
    iconBox.append(newDiv);
    iconBox.innerHTML += 
    `
        <p>${element.name}</p>
    `;
    newCol.append(iconBox);
    boxContainer.append(newCol);
};
icons.forEach(boxGenerator);

//Funzione per sfruttare la select
function typeSelect(){
    const iconsSelect = document.getElementById('icons').value;
    boxContainer.innerHTML = '';
    if(iconsSelect === 'All'){
        icons.forEach(boxGenerator);
    }else if(iconsSelect === 'Animal'){
        icons.filter((element) => {
            return element.type === 'animal'
        }).forEach(boxGenerator);
    }else if(iconsSelect === 'Vegetable'){
        icons.filter((element) => {
            return element.type === 'vegetable'
        }).forEach(boxGenerator)
    }else if(iconsSelect === 'User'){
        icons.filter((element) => {
            return element.type === 'user'
        }).forEach(boxGenerator)
    };
};
groupSelect.addEventListener('change', typeSelect);