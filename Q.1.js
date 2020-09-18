let information = [
    {
        name: "Rahul Garg",
        age: 34,
        city: "Jaipur",
        salary: 20000,
    },
    {
        name: "Rohit Sharma",
        age: 29,
        city: "Raipur",
        salary: 10000,
    }, {
        name: "Jatin Mulchandani",
        age: 36,
        city: "Agra",
        salary: 30000,
    }, {
        name: "Kaushal Khandal",
        age: 40,
        city: "Ahmedabad",
        salary: 25000,
    }, {
        name: "Kanishka Mathur",
        age: 30,
        city: "Kota",
        salary: 40000,
    },
];

function data(information) {
    let tabledata = "";
    

    information.forEach(function (info,index) {
        let currentrow = `<tr>
     <td>${index+1}</td>   
     <td>${info.name}</td>   
     <td>${info.age}</td>   
     <td>${info.city}</td>   
     <td>${info.salary}</td>
     <td><button onclick = 'deleteinfo(${index})' class='delete'>Delete</button>
     </tr>`;
        tabledata += currentrow;
        
    });
    document.getElementsByClassName("tbody")[0].innerHTML = tabledata;
}
data(information);

function searchBync() {
    let search = document.getElementById("search").value;
    console.log(search);
    let newdata = information.filter(function(infos) {
        return (
            infos.name.indexOf(search) != -1 || infos.city.indexOf(search) != -1 
            
        );
    });
    data(newdata);
    console.log(newdata);
}

function deleteinfo(info){
    information.splice(info,1);
    data(information);
}