let add = document.getElementById('add');

function update(){
 

    console.log('Updating list...');
    let tit = document.getElementById('titInput').value;
    let dec = document.getElementById('Description').value;

    if (localStorage.getItem('itemsJson') === null) {
        itemJsonarray = []
        itemJsonarray.push([tit, dec])
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray))
    } else {
        itemJsonarrayStr = localStorage.getItem('itemsJson');
        itemJsonarray = JSON.parse(itemJsonarrayStr)
        itemJsonarray.push([tit, dec])
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray))
    }

    let tablebody = document.getElementById('tablebody');
    let str = "";
    itemJsonarray.forEach((Element, index) => {
        str += `                        
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${Element[0]}</td>
            <td>${Element[1]}</td>
            <td><button class="btn btn-sm btn-primary">Delete</button></td>
                            
        </tr>`
    });
    tablebody.innerHTML = str;
}

add.addEventListener('click', update);
update();