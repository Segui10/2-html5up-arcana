scrolli=0; //esta variable guarda cuantos elementos se han mostrado por la funcion scroll
function load_users() {   
    var jqxhr = $.get("modules/listseries/controller/controller_products.class.php?load=true",
    /*{load_users_json: alta_users_json},*/ function (data) {
      //console.log(data);
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
    scroll()
});

function pintar_user(data) {
    console.log(scrolli);
    var serieE1 = document.getElementById("content");
    var total=10;//el total de elementos que se mostrarna al principio y por cada scroll
    total=total+scrolli;
    var arrpos=0;
    arrpos=arrpos+scrolli;
    console.log(total);
    for (i = arrpos; i < total; i++) {
        var titleid=data[i].titulo;
        var liEl = document.createElement("li");
        var t = document.createTextNode(data[i].titulo + ""); // Create a text node
        liEl.appendChild(t);
    
        var addPointsEl = document.createElement("button");
        var tb = document.createTextNode("Details");
        addPointsEl.appendChild(tb);
    
        serieE1.appendChild(liEl).setAttribute("id", titleid);
        liEl.appendChild(addPointsEl).setAttribute("id", titleid);
        liEl.addEventListener("click",function() {
            var titulo=this.id;
            console.log(titulo);
            var data = {"titulo": titulo}
            var data_users_JSON = JSON.stringify(data);
            console.log(titleid);
                $.get('modules/listseries/controller/controller_products.class.php?load1=true',
                        {alta_users_json: data_users_JSON},
                function (response) {
                    if (response.success) {
                        window.location.href = response.redirect;
                    }
                    //console.log(response);  //para debuguear
            
            
                }, "json").fail(function(xhr, status, error) {
                    alert(xhr.responseJSON);
                    console.log(xhr.responseText);
                    console.log(xhr.responseJSON);
                });
           } );
           arrpos++;
           scrolli=arrpos;
      }

}


//SCROLL FUNCTION
function scroll(){
    $(window).scroll(function () {
    
      if($(window).scrollTop() + $(window).height()+2 >= $(document).height()){
  
        clearTimeout($.data(this, 'scrollTimer'));
  
         $.data(this, 'scrollTimer', setTimeout(function() {
            var jqxhr = $.get("modules/listseries/controller/controller_products.class.php?load=true",
             function (data) {
                var json = JSON.parse(data);
                console.log(json);
                pintar_user(json);
            })
         }, 1000));
         
        console.log("dentro");  //user scrolled to bottom of the page?
        }
    });
  }

 
