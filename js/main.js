var cleApi = "1cc95edce424c539aab00ce06d90848b";
var url = "https://api.themoviedb.org/3/discover/movie?api_key=";
var imagesW200 = "https://image.tmdb.org/t/p/w200";

var div = document.querySelector('#js-film');
var article;
var titre;
var lienImage;
var img;

function ahah() {
    div.style.display = "none";
};


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var tab = JSON.parse(this.responseText);
            console.log(tab);
            tab.results.forEach(element => {

                article = document.createElement('article');
                article.onclick = ahah;
                div.appendChild(article);

                titre = document.createElement('a');
                titre.href = "#";
                titre.textContent = element.original_title;
                article.appendChild(titre);

                lienImage = document.createElement('a');
                lienImage.href = '#';
                article.appendChild(lienImage);

                img = document.createElement('img');
                img.src = imagesW200 + element.poster_path;
                lienImage.appendChild(img);

            });
        }
    };
    xhttp.open("GET", url + cleApi, true);
    xhttp.send();
}
loadDoc();
