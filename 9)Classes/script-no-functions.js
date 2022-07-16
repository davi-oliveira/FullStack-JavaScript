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

function menu(){
    let option = prompt(`Digite uma das opções:\n
    1- Realizar engate\n
    2- Imprimir naves\n
    3- Sair do programa`)

    switch (parseInt(option)){
        case 1: //cadastrar nave com nome e nº de tripulantes. Portas abertas e nave engatada
            let nameShip = prompt('Qual será o nome da espaçonave?')
            let crewQuantity = prompt('Qual a quantidade de tripulantes?')
            new spaceShip(nameShip, crewQuantity, true, true)
            menu()
            break
        
        case 2: //imprimir naves com alert
            let message = ""
            ships.forEach(function(elemento, index){
                message += `Nave ${index+1}: ${elemento.name} | Qnt. Tripulantes: ${elemento.crewQuantity}\n`
            })
            alert(message)
            menu()
            break
        
        case 3:
            document.getElementById("texto").innerHTML = "Programa encerrado!"
            break
        
        default:
            menu()
            break
    }
}
menu()