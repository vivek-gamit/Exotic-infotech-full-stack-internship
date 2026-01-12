let add = document.getElementById('add');

function getAndUpdate() {
    console.log('Updating list...');

    let tit = document.getElementById('titInput').value;
    let dec = document.getElementById('Description').value;

   
    if (tit.trim() === "" || dec.trim() === "") {
        alert("Please enter both title and description");
        return;
    }

    let itemJsonarray;

    if (localStorage.getItem('itemsJson') === null) {
        itemJsonarray = [];
    } else {
        itemJsonarray = JSON.parse(localStorage.getItem('itemsJson'));
    }

    itemJsonarray.push([tit, dec]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray));


    document.getElementById('titInput').value = "";
    document.getElementById('Description').value = "";

    updateTable();
}

function updateTable() {
    let tablebody = document.getElementById('tablebody');
    let itemJsonarray = JSON.parse(localStorage.getItem('itemsJson')) || [];
    let str = "";

    itemJsonarray.forEach((element, index) => {
        str += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="deleteItem(${index})">
                    Delete
                </button>
            </td>
        </tr>`;
    });

    tablebody.innerHTML = str;
}

function deleteItem(index) {
    let itemJsonarray = JSON.parse(localStorage.getItem('itemsJson'));
    itemJsonarray.splice(index, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonarray));
    updateTable();
}


add.addEventListener('click', getAndUpdate);
updateTable();
