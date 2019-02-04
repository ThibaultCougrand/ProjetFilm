console.log("hello world");
var titre = "un titre";
var realisateur = "un realisateur";
var date = "une date";
var synopsis = "un synopsis";
var entrees = 1000;

var filmJson = {
    titre: "un titre",
    realisateur: "un realisateur",
    date: "une date",
    synopsis: "un synopsis",
    entrees: 1000
};

var filmTab = [
    titre = "un titre",
    realisateur = "un realisateur",
    date = "une date",
    synopsis = "un synopsis",
    entrees = 1000
];

var listeFilm = [
    {
        titre: "un titre 1",
        realisateur: "un realisateur 1",
        date: "une date 1",
        synopsis: "un synopsis 1",
        entrees: 1001
    },
    {
        titre: "un titre 2",
        realisateur: "un realisateur 2",
        date: "une date 2",
        synopsis: "un synopsis 2",
        entrees: 1002
    },
    {
        titre: "un titre 3",
        realisateur: "un realisateur 3",
        date: "une date 3",
        synopsis: "un synopsis 3",
        entrees: 1003
    }
];

for (i = 0; i < listeFilm.length; i++) {
    console.log(listeFilm[i].titre);
};
for (i in listeFilm) {
    console.log(listeFilm[i].realisateur);
};
listeFilm.forEach(function(listeFilm) {
    console.log(listeFilm.date); 
});

var listeFilter = listeFilm.filter(listeFilm => listeFilm.entrees >1001);
console.log(listeFilter);

var reducer = (a, b) => a + b.entrees;
console.log(listeFilm.reduce(reducer,0));
console.log(listeFilter.reduce(reducer,0));

