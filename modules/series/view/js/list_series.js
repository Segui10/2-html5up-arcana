function load_users() {
    var jqxhr = $.get("modules/series/controller/controller_series.class.php?load=true", function (data) {
      console.log(data);
        var json = JSON.parse(data);
        console.log(json);
        pintar_user(json);
        //alert( "success" );
    }).done(function () {
        //alert( "second success" );
    }).fail(function () {
        //alert( "error" );
    }).always(function () {
        //alert( "finished" );
    });
    jqxhr.always(function () {
        //alert( "second finished" );
    });
}

$(document).ready(function () {
    load_users();
});

function pintar_user(data) {
    //alert(data.user.avatar);
    var content = document.getElementById("content");
    var div_user = document.createElement("div");
    var parrafo = document.createElement("p");

    var msje = document.createElement("div");
    msje.innerHTML = "msje = ";
    msje.innerHTML += data.msje;

    var titulo = document.createElement("div");
    titulo.innerHTML = "titulo = ";
    titulo.innerHTML += data.user.titulo;

    var tituloa = document.createElement("div");
    tituloa.innerHTML = "tituloa = ";
    tituloa.innerHTML += data.user.tituloa;

    var tipo = document.createElement("div");
    tipo.innerHTML = "tipo = ";
    tipo.innerHTML += data.user.tipo;

    var director = document.createElement("div");
    director.innerHTML = "director = ";
    director.innerHTML += data.user.director;

    var country = document.createElement("div");
    country.innerHTML = "country = ";
    country.innerHTML += data.user.country;

    var province = document.createElement("div");
    province.innerHTML = "province = ";
    province.innerHTML += data.user.province;

    var city = document.createElement("div");
    city.innerHTML = "city = ";
    city.innerHTML += data.user.city;

    var generop = document.createElement("div");
    generop.innerHTML = "generop = ";
    generop.innerHTML += data.user.generop;

    /*var generos = document.createElement("div");
    address.innerHTML = "generos = ";
    address.innerHTML += data.user.generos;*/

    var date_reception = document.createElement("div");
    date_reception.innerHTML = "date_reception = ";
    date_reception.innerHTML += data.user.date_reception;



    //arreglar ruta IMATGE!!!!!

    var cad = data.user.avatar;
    //console.log(cad);
    //var cad = cad.toLowerCase();
    var img = document.createElement("div");
    var html = '<img src="' + cad + '" height="75" width="75"> ';
    img.innerHTML = html;
    //alert(html);

    div_user.appendChild(parrafo);
    parrafo.appendChild(msje);
    parrafo.appendChild(titulo);
    parrafo.appendChild(tituloa);
    parrafo.appendChild(director);
    parrafo.appendChild(tipo);
    parrafo.appendChild(country);
    parrafo.appendChild(province);
    parrafo.appendChild(city);
    parrafo.appendChild(generop);
    //parrafo.appendChild(generos);
    parrafo.appendChild(date_reception);
    content.appendChild(div_user);
    content.appendChild(img);

}
