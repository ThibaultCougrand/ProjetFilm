var films = [//tableau d'objet contenant mes films.
    {
        titre: "La sitée de la peur",
        realisateur: "Alain Berbérian",
        sortie: "09/03/1994",
        synopsis: "C'est drôle",
        nbEntrées: 2279190
    }, {
        titre: "Pulp Fiction",
        realisateur: "Quentin Tarantino",
        sortie: "26/10/1994",
        synopsis: "C'est trop bien",
        nbEntrées: 2864640
    }, {
        titre: "Avatar",
        realisateur: "James Cameron",
        sortie: "16/12/2009",
        synopsis: "Bah c'est bien aussi",
        nbEntrées: 14775990
    }
];

function addFilm(element) {// fonction qui permet de push mes films dans mon html.
    return `<div class="film">
            <p>${element.titre}</p>\n
            <p>${element.realisateur}</p>\n
            <p>${element.sortie}</p>\n
            <p>${element.synopsis}</p>\n
            <p>${element.nbEntrées}</p>
            </div>`;
};

films.forEach(element => { // boucle sur mon tableau d'objet.
    document.getElementById('js-film').insertAdjacentHTML('afterbegin', addFilm(element));//fonction addFilm sur tout mes film.
});

document.getElementById('js-film').insertAdjacentHTML('beforebegin', '<h3>titre de liste</h3>');//Ajout d'un titre à ma liste.

var copy = document.createElement('p');//créer mon élément <p> pour contenir mon copyright.
copy.id = "copy";//je lui donne un id.
copy.textContent = "Copyright";//je lui ajoute du texte.
copy.textContent += " nom de la société";//je lui concatène du texte.

document.querySelector('footer').appendChild(copy);//Je créer mon élément copy dans mon footer.

var listeFilmHtml = document.querySelector('.film:nth-child(2)');

console.log(listeFilmHtml);
