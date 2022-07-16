let ships = [

]

class spaceShip{
	constructor(name, crewQuantity, engaged, doorOpen){
		this.name = name
		this.crewQuantity = crewQuantity
        this.engaged = engaged
        this.doorOpen = doorOpen
        ships.push(this)
	}
}

function showMenu(){
    let option = prompt(`Digite uma das opções:\n
    1- Realizar engate\n
    2- Imprimir naves\n
    3- Sair do programa`)

    switch (parseInt(option)){
        case 1:
            createShip(prompt('Qual será o nome da espaçonave?'), prompt('Qual a quantidade de tripulantes?'))
            showMenu()
            break
        
        case 2:
            showShips()
            showMenu()
            break
        
        case 3:
            document.getElementById("texto").innerHTML = "Programa encerrado!"
            break
        
        default:
            showMenu()
            break
    }
}

function createShip(nameShip, crewQuantity){
    new spaceShip(nameShip, crewQuantity, true, true)
}

function showShips(){
    let message = ""
    ships.forEach(function(elemento, index){
        message += `Nave ${index+1}: ${elemento.name} | Qnt. Tripulantes: ${elemento.crewQuantity}\n`
    })
    alert(message)
}

showMenu()