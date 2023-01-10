let data = [
  {
    id: 1,
    merk: "Toyota",
    harga: 300000000,
  },
  {
    id: 2,
    merk: "Mazda",
    harga: 500000000,
  },
  {
    id: 3,
    merk: "Mitsubishi",
    harga: 400000000,
  },
  {
    id: 4,
    merk: "Ferrarri",
    harga: 3000000000,
  },
  {
    id: 5,
    merk: "Lamborghini",
    harga: 4000000000,
  },
];

// read data
function readData() {
  let listData = document.getElementById("list-data");

  let container = "";
  for (let i = 0; i < data.length; i++) {
    container += `
        <tr>
        <th scope="row">${data[i].id}</th>
        <td>${data[i].merk}</td>
        <td>${data[i].harga.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}</td>
        <td>
          <button type="button" data-toggle="modal"
          onclick="edit(${data[i].id}, ${data[i].harga}, '${data[i].merk}')"
          data-target="#editModal" class="btn btn-primary editButton">
          Edit
          </button>
          <button type="button" onclick="deleteData(${
            data[i].id
          })" class="btn btn-danger">Delete</button>
        </td>
      </tr>
        `;
  }

  listData.innerHTML = container;
}

readData();

// create data
function addData(e) {
  let addForm = document.getElementById("addForm"),
    merk = document.getElementById("merk").value,
    harga = document.getElementById("harga").value,
    isValid = addForm.checkValidity();

  if (isValid) {
    e.preventDefault();
    let dt = {
      id: data[data.length - 1].id + 1,
      merk: merk,
      harga: parseInt(harga),
    };
    console.log(dt);
    data.push(dt);
    readData();
    $("#addModal").modal("toggle");
  } else {
    return false;
  }
}

// update data
function edit(idVal, hargaVal, merkVal) {
  console.log(idVal);
  console.log(merkVal);
  console.log(hargaVal);
  document
    .getElementById("editSubmit")
    .setAttribute("onclick", `editData(event, ${idVal})`);
  document.getElementById("merkEdit").value = merkVal;
  document.getElementById("hargaEdit").value = hargaVal;
}

function editData(e, id) {
  let editForm = document.getElementById("editForm"),
    merk = document.getElementById("merkEdit").value,
    harga = document.getElementById("hargaEdit").value,
    isValid = editForm.checkValidity();

  if (isValid) {
    e.preventDefault();
    let dt = {
      id: id,
      merk: merk,
      harga: parseInt(harga),
    };
    console.log(id);
    console.log(dt);
    data[id - 1] = dt;
    readData();
    $("#editModal").modal("toggle");
  } else {
    return false;
  }
}

// delete data
function deleteData(id) {
  let index = data.findIndex((e) => e.id === id);
  console.log(index);
  data.splice(index, 1);

  readData();
}
