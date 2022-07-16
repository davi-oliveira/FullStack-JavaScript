function createHouse(){
    let tabela = document.getElementById('lista')
    tabela.innerHTML += `
     <tr class="house" id="${houseQuantity()+1}">
         <td>${document.getElementById('txtNumber').value}</td>
         <td>${document.getElementById('txtBairro').value}</td>
         <td>${document.getElementById('txtCidade').value}</td>
         <td>${document.getElementById('txtArea').value} m²</td>
         <td style="color: red; text-align: center; cursor:pointer; " onclick="deleteHouse(${houseQuantity()+1})">X</td>
     </tr>
    ` 
}

function deleteHouse(house){
    document.getElementById(house).remove()
}

function houseQuantity(){
    let tabela = document.querySelectorAll('.house')
    return tabela.length
}