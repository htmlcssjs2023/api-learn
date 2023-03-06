
const loadUser= () =>{
    fetch("https://randomuser.me/api/?results=10")
    .then(response =>response.json())
    .then(data => displayUser(data.results));
}

const displayUser = users =>{
    const userContainer = document.getElementById('users-container');
    
    for(const user of users){
        // console.log(user);
        const newDive = document.createElement('div');
        newDive.classList.add('user');
        newDive.innerHTML = `
            <h3> City : ${user.location.city}</h3>
            <h4>User Name : ${user.name.first}</h4>
            <h5>User Id : ${user.id.value}</h5>
            <hr>
        `;
        userContainer.appendChild(newDive);
    }
}

loadUser();