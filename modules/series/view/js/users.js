//Crear un plugin
jQuery.fn.fill_or_clean = function () {
    this.each(function () {
        if ($("#titulo").attr("value") == "") {
            $("#titulo").attr("value", "Introduce titulo");
            $("#titulo").focus(function () {
                if ($("#titulo").attr("value") == "Introduce titulo") {
                    $("#titulo").attr("value", "");
                }
            });
        }
        $("#titulo").blur(function () { //Onblur se activa cuando el usuario retira el foco
            if ($("#titulo").attr("value") == "") {
                $("#titulo").attr("value", "Introduce titulo");
            }
        });

        if ($("#tituloa").attr("value") == "") {
            $("#tituloa").attr("value", "Introduce titulo alternativo");
            $("#tituloa").focus(function () {
                if ($("#tituloa").attr("value") == "Introduce titulo alternativo") {
                    $("#tituloa").attr("value", "");
                }
            });
        }
        $("#tituloa").blur(function () {
            if ($("#tituloa").attr("value") == "") {
                $("#tituloa").attr("value", "Introduce titulo alternativo");
            }
        });
        if ($("#director").attr("value") == "") {
            $("#director").attr("value", "Introduce nombre");
            $("#director").focus(function () {
                if ($("#director").attr("value") == "Introduce nombre") {
                    $("#director").attr("value", "");
                }
            });
        }
        $("#director").blur(function () {
            if ($("#director").attr("value") == "") {
                $("#director").attr("value", "Introduce nombre");
            }
        });
        if ($("#date_reception").attr("value") == "") {
            $("#date_reception").attr("value", "Introduce fecha de estreno");
            $("#date_reception").focus(function () {
                if ($("#date_reception").attr("value") == "Introduce fecha de estreno") {
                    $("#date_reception").attr("value", "");
                }
            });
        }
        $("#date_reception").blur(function () {
            if ($("#date_reception").attr("value") == "") {
                $("#date_reception").attr("value", "Introduce fecha de estreno");
            }
        });
    });//each
    return this;
};//function

$(document).ready(function () {
    $(this).fill_or_clean(); //siempre que creemos un plugin debemos llamarlo, sino no funcionará

    var email_reg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var date_reg = /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d$/;
    var address_reg = /^[a-z0-9- -.]+$/i;
    var pass_reg = /^[0-9a-zA-Z]{6,32}$/;
    var string_reg = /^[A-Za-z]{1,30}$/;
    var usr_reg = /^[0-9a-zA-Z]{2,20}$/;

    $("#SubmitSeries").click(function () {
        $(".error").remove();
        if ($("#titulo").val() == "" || $("#titulo").val() == "Introduce titulo") {
            $("#titulo").focus().after("<span class='error'>Introduce titulo</span>");
            return false;
        } else if (!string_reg.test($("#titulo").val())) {
            $("#titulo").focus().after("<span class='error'>titulo must be 1 to 30 letters</span>");
            return false;
        }

        else if ($("#tituloa").val() == "" || $("#tituloa").val() == "Introduce tituloa") {
            $("#tituloa").focus().after("<span class='error'>Introduce tituloa</span>");
            return false;
        } else if (!string_reg.test($("#tituloa").val())) {
            $("#tituloa").focus().after("<span class='error'>tituloa must be 1 to 30 letters</span>");
            return false;
        }

        else if ($("#director").val() == "" || $("#director").val() == "Introduce director") {
            $("#director").focus().after("<span class='error'>Introduce director</span>");
            return false;
        } else if (!string_reg.test($("#director").val())) {
            $("#director").focus().after("<span class='error'>director must be 1 to 30 letters</span>");
            return false;
        }

        else if ($("#date_reception").val() == "" || $("#date_reception").val() == "Introduce date_reception") {
            $("#date_reception").focus().after("<span class='error'>Introduce date_reception</span>");
            return false;
        } else if (!date_reg.test($("#date_reception").val())) {
            $("#date_reception").focus().after("<span class='error'>error format date (mm/dd/yyyy)</span>");
            return false;
        }


        $("#form_user").submit();
        $("#form_user").attr("action", "index.php?module=series");

    });

    //realizamos funciones para que sea más práctico nuestro formulario
    $("#titulo, #tituloa, #director").keyup(function () {
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
