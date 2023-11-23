/**
 * Javascript api fetch
 */
async function getData(url) {
    let reponse = await fetch(url);
    return reponse.json();
}
// console.log(getData('https://api.github.com/users/ManOfGod14'));

let input = document.querySelector('input');
const repositories = document.querySelector('.user-repos');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // permet de supprimer l'event par défaut d'un element
    // console.log(e);
    
    if(input.value.length > 0) {
        // console.log(input.value);
        getData(`https://api.github.com/users/${input.value}`).then((data) => {
            console.log(data);
            if(data.message) {
                alert("Le nom d'utilisateur saisi n'existe pas !");
            } else {
                // console.log(data);
                let img = document.querySelector('.user-profile img');
                img.src = data.avatar_url;
                let h5 = document.querySelector('h5');
                h5.innerText = `${data.login} (${data.location})`;
                h5.style.color = '#cccccc';

                document.querySelector('h3').innerText = data.name;
                document.querySelector('a').href = 'https://github.com/'+ input.value;
                document.querySelector('.user-find').classList.remove('d-none');
            }
        });

        getData(`https://api.github.com/users/${input.value}/repos`).then((data) => {
            console.log(data);
            repositories.innerHTML = "<h3>Public repos</h3>";

            console.log(data.length);

            for(let i = 0; i < data.length - 1; i++) {
                if(!data[i].private || data[i].name != input.value) {
                    repositories.innerHTML = `${repositories.innerHTML} <p><a href="${data[i].html_url}" target="_blank">${data[i].name}</a></p>`
                }
            }

            document.querySelector('.user-repos').classList.remove('d-none');
        });
    } else {
        alert("Veuillez saisir le nom d'utilisateur !");
    }
});

