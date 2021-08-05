console.dir(profiles);

let profHolder = document.querySelector("#profile")
let profLength = 30; // Amount of randomly generated profiles.

function createProfile(index) { // Creation of each profile.
    let newDiv = document.createElement("div");
    let userImage = document.createElement("img");
    let userName = document.createElement("p");
    let userAge = document.createElement("p");
    let DOB = document.createElement("p");
    let userEmail = document.createElement("p");
    let userCell = document.createElement("p");

    userImage.src = profiles.results[index].picture.large;
    userName.innerHTML = "Name: " + profiles.results[index].name.first + " " + profiles.results[index].name.last;
    userAge.innerHTML = "Age: " + profiles.results[index].dob.age;
    DOB.innerHTML = "DOB: " + profiles.results[index].dob.date;
    userEmail.innerHTML = "Email: " + profiles.results[index].email;
    userCell.innerHTML = "Cell: " + profiles.results[index].cell + "/ Phone:" + profiles.results[index].phone;

    newDiv.appendChild(userImage);
    newDiv.appendChild(userName);
    newDiv.appendChild(userAge);
    newDiv.appendChild(DOB);
    newDiv.appendChild(userEmail);
    newDiv.appendChild(userCell);

    userImage.style.width = "20%";
    userImage.style.float = "left";

    userName.style.marginLeft = "175px";
    userAge.style.marginLeft = "175px";
    DOB.style.marginLeft = "175px";
    userEmail.style.marginLeft = "175px";
    userCell.style.marginLeft = "175px";
    
    newDiv.style.border = "double black 5px";
    newDiv.style.borderRadius = "15px";
    newDiv.style.padding = "7px";
    newDiv.style.margin = "7px";
    newDiv.style.float = "left";
    newDiv.style.width = "31%";
    newDiv.style.backgroundColor = "goldenrod";


    profHolder.appendChild(newDiv);
}


for (let i=0; i<profLength; i++) { // For loop to create profLength amount of profiles.
    createProfile(i);
}