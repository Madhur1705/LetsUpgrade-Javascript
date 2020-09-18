window.onload = function () {
    let bustype = [
        {
            name: "Volvo",
            source: "Agra",
            destination: "Goa",
            number: "234",
            capacity: 80,
        },
        {
            name: "Passanger Bus",
            source: "Jaipur",
            destination: "Delhi",
            number: "352",
            capacity: 78,
        },
        {
            name: "Double-Decker",
            source: "Ahmedabad",
            destination: "Kota",
            number: "560",
            capacity: 90,
        },
    ];
    if (localStorage.getItem("busdata") == null) {
        localStorage.setItem("busdata", JSON.stringify(bustype));
    }
};

function bus(superarray = undefined) {
    let tabledata = "";
    let busdata;
    if (superarray == undefined) {
        busdata = JSON.parse(localStorage.getItem("busdata"));
    } else {
        busdata = superarray;
    }
    busdata.forEach(function (buses, index) {
        let currentrow = `<tr>
       <td>${index + 1}</td>   
       <td>${buses.name}</td>   
       <td>${buses.source}</td>   
       <td>${buses.destination}</td>   
       <td>${buses.number}</td>
       <td>${buses.capacity}</td>
       </tr>`;
        tabledata += currentrow;
    });
    document.getElementsByClassName("tbody")[0].innerHTML = tabledata;
}

bus();



function searchbus() {
    let bussearch = document.getElementById("search").value;
    let busdata = JSON.parse(localStorage.getItem("busdata"));
    let addingbus = busdata.filter(function (getdata) {
        return (
            getdata.source.toUpperCase().indexOf(bussearch.toUpperCase()) != -1 || getdata.destination.toUpperCase().indexOf(bussearch.toUpperCase()) != -1
        );
    }
    );
    bus(addingbus);

}





function adddata(event) {
    event.preventDefault();
    let businfo = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let passangerscapacity = document.getElementById("passangerscapacity").value;
    businfo.name = name;
    businfo.source = source;
    businfo.destination = destination;
    businfo.number = number;
    businfo.capacity = Number(passangerscapacity);

    //bustype.push(businfo);
    bus();
    let busdata = JSON.parse(localStorage.getItem("busdata"));
    busdata.push(businfo);
    localStorage.setItem("busdata", JSON.stringify(busdata));




    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("number").value = "";
    document.getElementById("passangerscapacity").value = "";
}
