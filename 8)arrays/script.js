const hitchedSpaceships = [
    ["Fenix", 8, true], //nome, tripulantes, engantada sim:nao
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let nineCrew = new Array()

// Mais de 9 tripulantes ============================
let maisde9tripe = hitchedSpaceships.filter(elemento => { return elemento[1] > 9 }).map(function(element){
    return element[0]
})

// Naves desengatadas =================================
let disengagedShip = hitchedSpaceships.findIndex(elemento => { return elemento[2] == false })

// Nome em caixa alta ============================
let nameUpperCase = hitchedSpaceships.map(function(elemento){
    return elemento[0].toUpperCase()
})

console.log("Naves com mais de 9 tripulantes: " + maisde9tripe.join(','))
console.log("1ª nave com engate pendente: " + disengagedShip)
console.log("Nome das naves em caixa alta: " + nameUpperCase)
