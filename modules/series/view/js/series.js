//Function to validate data user
function validate_country(country) {
    if (country == null) {
        return false;
    }
    if (country.length == 0) {
        return false;
    }
    if (country === 'Select Country') {
        return false;
    }
    if (country.length > 0) {
        var regexp = /^[a-zA-Z_]*$/;
        return regexp.test(country);
    }
    return false;
}
function validate_province(province) {
    if (province == null) {
        return 'default_province';
    }
    if (province.length == 0) {
        return 'default_province';
    }
    if (province === 'Select Province') {
        return false;
    }
    if (province.length > 0) {
        var regexp = /^[a-zA-Z0-9, ]*$/;
        return regexp.test(province);
    }
    return false;
}
function validate_town(town) {
    if (town == null) {
        return 'default_town';
    }
    if (town.length == 0) {
        return 'default_town';
    }
    if (town === 'Select Town') {
        //return 'default_poblacion';
        return false;
    }
    if (town.length > 0) {
        var regexp = /^[a-zA-Z/, -'()]*$/;
        return regexp.test(town);
    }
    return false;
}
//Crear un plugin
jQuery.fn.fill_or_clean = function () {
    this.each(function () {
        //if ($("#name").val() == "") {
        if ($("#titulo").val() == "") {
            $("#titulo").val("Introduce titulo");
            $("#titulo").focus(function () {
                if ($("#titulo").val() == "Introduce titulo") {
                    $("#titulo").val('');
                }
            });
        }
        $("#titulo").blur(function () { //Onblur se activa cuando el usuario retira el foco
            if ($("#titulo").val() == "") {
                $("#titulo").val("Introduce titulo");
            }
        });

        if ($("#tituloa").val() == "") {
            $("#tituloa").val("Introduce last tituloa");
            $("#tituloa").focus(function () {
                if ($("#tituloa").val() == "Introduce last tituloa") {
                    $("#tituloa").val('');
                }
            });
        }
        $("#tituloa").blur(function () {
            if ($("#tituloa").val() == "") {
                $("#tituloa").val("Introduce tituloa");
            }
        });
        if ($("#director").val()== "") {
            $("#director").val("Introduce director");
            $("#director").focus(function () {
                if ($("#director").val() == "Introduce director") {
                    $("#director").val('');
                }
            });
        }
        $("#director").blur(function () {
            if ($("#director").val() == "") {
                $("#director").val("Introduce director");
            }
        });
        if ($("#date_reception").val() == "") {
            $("#date_reception").val( "Introduce date of title");
            $("#date_reception").focus(function () {
                if ($("#date_reception").val() == "Introduce date of title") {
                    $("#date_reception").val('');
                }
            });
        }
        $("#date_reception").blur(function () {
            if ($("#date_reception").val() == "") {
                $("#date_reception").val( "Introduce date of title");
            }
        });
    });//each
    return this;
};//function

//Solution to : "Uncaught Error: Dropzone already attached."
Dropzone.autoDiscover = false;
$(document).ready(function () {

    //Datepicker///////////////////////////
    $("#birth_date").datepicker({
        dateFormat: 'mm/dd/yy',
        defaultDate: '05/05/1999',
        changeMonth: true,
        changeYear: true,
        yearRange: '-110:-16'
    });
    $("#title_date").datepicker({
        maxDate: 'today',
        dateFormat: 'mm/dd/yy',
        defaultDate: 'today',
        changeMonth: true,
        changeYear: true
    });

    //Valida series /////////////////////////
    $('#SubmitSeries').click(function () {

        validate_user();

    });

    //Control de seguridad para evitar que al volver atrás de la pantalla results a create, no nos imprima los datos
    $.get("../../series/controller/controller_series.class.php?load_data=true",
            function (response) {
                console.log(response.user);
                if (response.user === "") {
                    $("#titulo").val('');
                    $("#titula").val('');
                    $("#director").val('');
                    $("#tipo").val(''); 
                    $("#date_reception").val('');
                    $('#country').val('Select country');
                    $('#province').val('Select province');
                    $('#city').val('Select city');
                    var inputElements = document.getElementsByClassName('gustos');
                    for (var i = 0; i < inputElements.length; i++) {
                        if (inputElements[i].checked){
                            inputElements[i].checked = false;
                        }
                    }

                    //siempre que creemos un plugin debemos llamarlo, sino no funcionará
    $(this).fill_or_clean();
                } else {
                    $("#titulo").val( response.user.titulo);
                    $("#titula").val( response.user.titula);
                    $("#director").val( response.user.director);
                    $("#tipo").val( response.user.tipo);
                    $("#date_reception").val( response.user.date_reception);
                    $('#country').val(response.user.country);
                    $('#province').val(response.user.province);
                    $('#city').val(response.user.city);
                    var gustos = response.user.gustos;
                    var inputElements = document.getElementsByClassName('messageCheckbox');
                    for (var j = 0; j < gustos.length; j++) {
                        for (var k = 0; k < inputElements.length; k++) {
                          if (gustos[j] === inputElements[k]){
                              inputElements[k].checked = true;
                          }
                        }
                    }

                }
            }, "json");

    //Dropzone function //////////////////////////////////
    $("#dropzone").dropzone({
        url: "../../series/controller/controller_series.class.php?upload=true",
        addRemoveLinks: true,
        maxFileSize: 1000,
        dictResponseError: "Ha ocurrido un error en el server",
        acceptedFiles: 'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF,.rar,application/pdf,.psd',
        init: function () {
            this.on("success", function (file, response) {
                //alert(response);
                $("#progress").show();
                $("#bar").width('100%');
                $("#percent").html('100%');
                $('.msg').text('').removeClass('msg_error');
                $('.msg').text('Success Upload image!!').addClass('msg_ok').animate({'right': '300px'}, 300);
            });
        },
        complete: function (file) {
            //if(file.status == "success"){
            //alert("El archivo se ha subido correctamente: " + file.name);
            //}
        },
        error: function (file) {
            //alert("Error subiendo el archivo " + file.name);
        },
        removedfile: function (file, serverFileName) {
            var name = file.name;
            $.ajax({
                type: "POST",
                url: "../../series/controller/controller_series.class.php?delete=true",
                data: "filename=" + name,
                success: function (data) {
                    $("#progress").hide();
                    $('.msg').text('').removeClass('msg_ok');
                    $('.msg').text('').removeClass('msg_error');
                    $("#e_avatar").html("");

                    var json = JSON.parse(data);
                    if (json.res === true) {
                        var element;
                        if ((element = file.previewElement) != null) {
                            element.parentNode.removeChild(file.previewElement);
                            //alert("Imagen eliminada: " + name);
                        } else {
                            false;
                        }
                    } else { //json.res == false, elimino la imagen también
                        var element;
                        if ((element = file.previewElement) != null) {
                            element.parentNode.removeChild(file.previewElement);
                        } else {
                            false;
                        }
                    }
                }
            });
        }
    });

    //Utilizamos las expresiones regulares para las funciones de  fadeout
    var email_reg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var date_reg = /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/;
    var address_reg = /^[a-z0-9- -.]+$/i;
    var pass_reg = /^[0-9a-zA-Z]{6,32}$/;
    var string_reg = /^[A-Za-z]{1,30}$/;
    var usr_reg = /^[0-9a-zA-Z]{2,20}$/;

    //realizamos funciones para que sea más práctico nuestro formulario
    $("#titulo, #tituloa, #director ").keyup(function () {
        if ($(this).val() != "" && string_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });

    $("#date_reception").keyup(function () {
        if ($(this).val() != "" && date_reg.test($(this).val())) {
            $(".error").fadeOut();
            return false;
        }
    });
});

function load_countries_v2(cad) {
    $.getJSON( cad, function(data) {
      $("#country").empty();
      $("#country").append('<option value="" selected="selected">Select country</option>');

      $.each(data, function (i, valor) {
        $("#country").append("<option value='" + valor.sISOCode + "'>" + valor.sName + "</option>");
      });
    })
    .fail(function() {
        alert( "error load_countries2" );
    });
}

function load_countries_v1() {
    $.get( "../../series/controller/controller_series.class.php?load_country=true",
        function( response ) {
            //alert( response );
            if(response === 'error'){
                load_countries_v2("../../resources/ListOfCountryNamesByName.json");
            }else{
                load_countries_v2("../../series/controller/controller_series.class.php?load_country=true"); //oorsprong.org
            }
    })
    .fail(function(response) {
        load_countries_v2("../../ListOfCountryNamesByName.json");
    });
}

function load_provinces_v2() {
    $.get("../../provinciasypoblaciones.xml", function (xml) {
	    $("#province").empty();
	    $("#province").append('<option value="" selected="selected">Select province</option>');

        $(xml).find("provincia").each(function () {
            var id = $(this).attr('id');
            var name = $(this).find('nombre').text();
            $("#province").append("<option value='" + id + "'>" + name + "</option>");
        });
    })
    .fail(function() {
        alert( "error load_provinces" );
    });
}

function load_provinces_v1() { //provinciasypoblaciones.xml - xpath
    $.get( "../../series/controller/controller_series.class.php?load_provinces=true",
        function( response ) {
          $("#province").empty();
	        $("#province").append('<option value="" selected="selected">Select province</option>');

            //alert(response);
        var json = JSON.parse(response);
		    var provinces=json.provinces;
		    //alert(provinces);
		    //console.log(provinces);

		    //alert(provinces[0].id);
		    //alert(provinces[0].nombre);

            if(provinces === 'error'){
                load_provinces_v2();
            }else{
                for (var i = 0; i < provinces.length; i++) {
        		    $("#province").append("<option value='" + provinces[i].id + "'>" + provinces[i].nombre + "</option>");
    		    }
            }
    })
    .fail(function(response) {
        load_provinces_v2();
    });
}

function load_cities_v2(prov) {
    $.get("../../provinciasypoblaciones.xml", function (xml) {
		$("#city").empty();
	    $("#city").append('<option value="" selected="selected">Select city</option>');

		$(xml).find('provincia[id=' + prov + ']').each(function(){
    		$(this).find('localidad').each(function(){
    			 $("#city").append("<option value='" + $(this).text() + "'>" + $(this).text() + "</option>");
    		});
        });
	})
	.fail(function() {
        alert( "error load_cities" );
    });
}

function load_cities_v1(prov) { //provinciasypoblaciones.xml - xpath
    var datos = { idPoblac : prov  };
	$.post("../../series/controller/controller_series.class.php", datos, function(response) {
	    //alert(response);
        var json = JSON.parse(response);
		var cities=json.cities;
		//alert(poblaciones);
		//console.log(poblaciones);
		//alert(poblaciones[0].poblacion);

		$("#city").empty();
	    $("#city").append('<option value="" selected="selected">Select city</option>');

        if(cities === 'error'){
            load_cities_v2(prov);
        }else{
            for (var i = 0; i < cities.length; i++) {
        		$("#city").append("<option value='" + cities[i].poblacion + "'>" + cities[i].poblacion + "</option>");
    		}
        }
	})
	.fail(function() {
        load_cities_v2(prov);
    });
}

//Dependent combos //////////////////////////////////
load_countries_v1();
$("#province").empty();
$("#province").append('<option value="" selected="selected">Select province</option>');
$("#province").prop('disabled', true);
$("#city").empty();
$("#city").append('<option value="" selected="selected">Select city</option>');
$("#city").prop('disabled', true);

$("#country").change(function() {
var country = $(this).val();
var province = $("#province");
var city = $("#city");
console.log(country);
if(country !== 'ES'){
       province.prop('disabled', true);
       city.prop('disabled', true);
       $("#province").empty();
     $("#city").empty();
}else{
  console.log("6");
       province.prop('disabled', false);
       city.prop('disabled', false);
       load_provinces_v2();
}//fi else
});

$("#province").change(function() {
var prov = $(this).val();
if(prov > 0){
  load_cities_v2(prov);
}else{
  $("#city").prop('disabled', false);
}
});

function validate_series() {
    var result = true;
    var titulo = document.getElementById('titulo').value;
    var tituloa = document.getElementById('tituloa').value;
    var director = document.getElementById('director').value;
    var generop = document.getElementById('generop').value;
    var tipo = document.getElementById('tipo').value;
    var date_reception = document.getElementById('date_reception').value;
    var country = document.getElementById('country').value;
    var province = document.getElementById('province').value;
    var city = document.getElementById('city').value;
    var gustos = [];
    var inputElements = document.getElementsByClassName('messageCheckbox');
    var j=0;
    for (var i=0; i< inputElements.length; i++){
        if (inputElements[i].checked){
            gustos[j] = inputElements[i].value;
          j++;
        }
    }
    var generop = $('input[name="generop"]:checked').val();
    console.log(generop);

    /*var inputElements = document.getElementsByClassName('messageCheckbox');
    var j = 0;
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            interests[j] = inputElements[i].value;
            j++;
        }

    }*/

    //Utilizamos las expresiones regulares para la validación de errores JS
    var email_reg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var date_reg = /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/;
    var address_reg = /^[a-z0-9- -.]+$/i;
    var pass_reg = /^[0-9a-zA-Z]{6,32}$/;
    var string_reg = /^[A-Za-z]{1,30}$/;
    var usr_reg = /^[0-9a-zA-Z]{2,20}$/;

    $(".error").remove();

    if ($("#titulo").val() == "" || $("#titulo").val() == "Introduce titulo") {
        $("#titulo").focus().after("<span class='error'>Introduce titulo</span>");
        result = false;
        return false;
    } else if (!string_reg.test($("#titulo").val())) {
        $("#titulo").focus().after("<span class='error'>Name must be 2 to 30 letters</span>");
        result = false;
        return false;
    }

    else if ($("#tituloa").val() == "" || $("#tituloa").val() == "Introduce last name") {
        $("#tituloa").focus().after("<span class='error'>Introduce last name</span>");
        result = false;
        return false;
    } else if (!string_reg.test($("#tituloa").val())) {
        $("#tituloa").focus().after("<span class='error'>Last name must be 2 to 30 letters</span>");
        result = false;
        return false;
    }

    else if ($("#director").val() == "" || $("#director").val() == "Introduce date of birth") {
        $("#director").focus().after("<span class='error'>Introduce date of birth</span>");
        result = false;
        return false;
    } else if (!string_reg.test($("#director").val())) {
        $("#director").focus().after("<span class='error'>error format date (mm/dd/yyyy)</span>");
        result = false;
        return false;
    }

    else if ($("#date_reception").val() == "" || $("#date_reception").val() == "Introduce date of title") {
        $("#date_reception").focus().after("<span class='error'>Introduce date of title</span>");
        result = false;
        return false;
    } else if (!date_reg.test($("#date_reception").val())) {
        $("#date_reception").focus().after("<span class='error'>error format date (mm/dd/yyyy)</span>");
        result = false;
        return false;
    }
    if ($("#country").val() === "" || $("#country").val() === "Select country" || $("#country").val() === null) {
        $("#country").focus().after("<span class='error'>Select one country</span>");
        result = false;
        return false;
    }

    if ($("#province").val() === "" || $("#province").val() === "Select province") {
        $("#province").focus().after("<span class='error'>Select one province</span>");
        result = false;
        return false;
    }

    if ($("#city").val() === "" || $("#city").val() === "Select city") {
        $("#city").focus().after("<span class='error'>Select one city</span>");
        result = false;
        return false;
    }




    //Si ha ido todo bien, se envian los datos al servidor
    if (result) {

      if (province === null) {
          province = 'default_province';
      }else if (province.length === 0) {
          province = 'default_province';
      }else if (province === 'Select province') {
          return 'default_province';
      }

      if (city === null) {
          city = 'default_city';
      }else if (city.length === 0) {
          city = 'default_city';
      }else if (city === 'Select city') {
          return 'default_city';
      }

        var data = {"titulo": titulo, "tituloa": tituloa, "director": director, "date_reception": date_reception, "country": country, "province": province, "city": city, "generos": gustos, "generop": generop, "tipo": tipo};
console.log(data);
        var data_series_JSON = JSON.stringify(data);

        $.post('../../series/alta_series/',
                {alta_series_json: data_series_JSON},
        function (response) {
            if (response.success) {
                window.location.href = response.redirect;
            }
            //alert(response);  //para debuguear


        }, "json").fail(function(xhr, status, error) {
          alert(xhr.responseJSON);
            console.log(xhr.responseText);
            console.log(xhr.responseJSON);

            if (xhr.responseJSON.error.titulo)
                $("#titulo").focus().after("<span  class='error1'>" + xhr.responseJSON.error.titulo + "</span>");

            if (xhr.responseJSON.error.tituloa)
                $("#tituloa").focus().after("<span  class='error1'>" + xhr.responseJSON.error.tituloa + "</span>");

            if (xhr.responseJSON.error.director)
                $("#director").focus().after("<span  class='error1'>" + xhr.responseJSON.error.director + "</span>");

            if (xhr.responseJSON.error.date_reception)
                $("#date_reception").focus().after("<span  class='error1'>" + xhr.responseJSON.error.date_reception + "</span>");

            if (xhr.responseJSON.error_avatar)
                $("#dropzone").focus().after("<span  class='error1'>" + xhr.responseJSON.error_avatar + "</span>");

            if (xhr.responseJSON.success1) {
                if (xhr.responseJSON.img_avatar !== "/1_php_mvc_oo/1_Backend/0_template/1 templates_web_examples/2 html5up-arcana/media/default-avatar.png") {
                    //$("#progress").show();
                    //$("#bar").width('100%');
                    //$("#percent").html('100%');
                    //$('.msg').text('').removeClass('msg_error');
                    //$('.msg').text('Success Upload image!!').addClass('msg_ok').animate({ 'right' : '300px' }, 300);
                }

                if(xhr.responseJSON.error.country)
                  $("#error_country").focus().after("<span  class='error1'>" + xhr.responseJSON.error.country + "</span>");

                if(xhr.responseJSON.error.province)
                  $("#error_province").focus().after("<span  class='error1'>" + xhr.responseJSON.error.province + "</span>");

                if(xhr.responseJSON.error.city)
                  $("#error_city").focus().after("<span  class='error1'>" + xhr.responseJSON.error.city + "</span>");
            } else {

                $("#progress").hide();
                $('.msg').text('').removeClass('msg_ok');
                $('.msg').text('Error Upload image!!').addClass('msg_error').animate({'right': '300px'}, 300);
            }
        });
    }
}
