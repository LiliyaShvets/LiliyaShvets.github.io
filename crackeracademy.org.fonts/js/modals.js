$(document).ready(function () {

  $("#id_username").change(function () {
    var form = $(this).closest("form");
    $.ajax({
        url: form.attr("data-validate-username-url"),
        data: form.serialize(),
        dataType: 'json',
        success: function (data) {
            $("#id_username").removeClass("incorrect");
            if (data.is_taken) {
                $("#id_username").addClass("incorrect");
                alert(data.error_message);
            }
        }
    });
  });

  function is_valid(form) {
    let valid = true;
    form.find("input").removeClass("incorrect")
        .each(function () {
            if (!$(this).val()) {
                $(this).addClass("incorrect");
                valid = false;
            }
            let regex = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]+/i;
            if ($(this).val() && ($(this).attr("type") === "email")) {
                if (!regex.test($(this).val())) {
                    $(this).addClass("incorrect");
                    valid = false;
                }
            }
            if (($(this).attr("type") === "checkbox") && (!$(this).prop("checked"))) {
                alert("Read and agree to Terms and Conditions and Privacy policy");
                valid = false;
            }
        });
    let pwd1 = $("input[name=password1]");
    let pwd2 = $("input[name=password2]");

    if (pwd1.val() !== pwd2.val()) {
        pwd1.addClass("incorrect");
        pwd2.addClass("incorrect");
        return valid
    }


    return valid;
  }

  $('#signup-btn').click(function (e) {
    e.preventDefault();
    let form = $('#signup-form');
    if (is_valid(form)) {
        const URL = form.attr('action');
        const METHOD = form.attr('method');
        $.ajax(URL, {
            type: METHOD,
            dataType: 'json',
            data: form.serialize(),
            success: function (data) {
                form.find("input").val("");
                $('#signup-modal').hide();
                alert(data.message);

            },
            error: function (error) {
                console.log(error.responseJSON);
                alert(error.statusText);
            }
        });
    }
  })


});