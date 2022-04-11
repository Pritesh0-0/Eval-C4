let name1 = document.getElementById("Name").value;
let mn = document.getElementById("MN").value;
let type  = document.getElementById("type").value;
if (localStorage.getItem('contactlist') == null){
    contactlistArr = [];
    contactlistArr.push ([name1, mn, type]);
    localStorage.setItem ('contactlist' , JSON.stringify(contactlistArr))
}
else {
    contactlistArrStr = localStorage.getItem ('contactlist');
    contactlistArr = JSON.parse(contactlistArrStr);
    contactlistArr.push([name1, mn, type])
    localStorage.setItem ('contactlist', JSON.stringify(contactlistArr))
}
function update {
    if (localStorage.getItem('contactlist') == null){
        contactlistArr = [];
        localStorage.setItem ('contactlist', JSON.stringify(contactlistArr))
    }
    else {
        contactlistArrStr = localStorage.getItem ('contactlist');
    contactlistArr = JSON.parse(contactlistArrStr);
    }
    let tbldata = document.getElementById("tdata");
    let str = "";
    contactlistArr.forEach((element, index) => {
        str += ' <tr>';
        <><th scope="row"> ${index}</th><td> ${element[0]}</td><td> ${element[1]}</td><td>
            <button class="btn btn warning btn-sm" onclick="Submitted(${index}">Submit
            </button>
        </td></>
    });
    tbody.innerHTML = str;
}
let add = document.getElementById("additem");
add.addEventListener("click", getAndUpdate);
update();