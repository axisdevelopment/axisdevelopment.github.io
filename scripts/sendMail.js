$(document).ready(function() {

    // Prevent redirection
    $("#submit").click(function(e) {
        e.preventDefault();

        var _gotcha = $("#gotcha").val();
        var _subject = $("#subject").val();
        var name = $("#name").val();
        var lastName = $("#last-name").val();
        var _replyto = $("#mail").val();
        var phone = $("#phone").val();
        var message = $("#message").val();

        function validateForm(inputs) {
            // Clean error styles
            $("#name").removeClass("input-error");
            $("#last-name").removeClass("input-error");
            $("#phone").removeClass("input-error");
            $("#mail").removeClass("input-error");
            // --
            $("#name-err").html("");
            $("#last-name-err").html("");
            $("#phone-err").html("");
            $("#mail-err").html("");

            // Validate inputs
            var valName = stringValidation(name, {alphabet: true, latin: true, space: true}, null, {min: 1});
            var valLastName = stringValidation(lastName, {alphabet: true, latin: true, space: true}, null, {min: 1});
            var valPhone = stringValidation(phone, {numbers: true}, null, {min: 1});
            var valMail = stringValidation(_replyto, {_email: true}, null, {min: 1});     

            // Check if must send mail or alert user
            if (
                valName.ok &&
                valLastName.ok &&
                valPhone.ok &&
                valMail.ok
            ) {
                sendMail();
            } else {
                if (!valName.ok) {
                    $("#name").addClass("input-error");
                    $("#name-err").html("Completa este campo, utiliza solo letras y espacios.");
                };
                if (!valLastName.ok) {
                    $("#last-name").addClass("input-error");
                    $("#last-name-err").html("Completa este campo, utiliza solo letras y espacios.");
                };
                if (!valPhone.ok) {
                    $("#phone").addClass("input-error");
                    $("#phone-err").html("Completa este campo, utiliza solo números 0-9.");
                };
                if (!valMail.ok) {
                    $("#mail").addClass("input-error");
                    $("#mail-err").html("Completa este campo, ingresa un correo válido.");
                };
            };
        };

        function sendMail() {
            $.ajax({
                url: "https://formspree.io/mlepqlny",
                method: "POST",
                dataType: "json",
                data: {
                    _gotcha,
                    _subject,
                    name,
                    lastName,
                    _replyto,
                    phone,
                    message
                },
                complete: function() {
                    showModal();
                }
            }); 
        };

        function showModal() {
            // Clean inputs
            $("#name").val("");
            $("#last-name").val("");
            $("#phone").val("");
            $("#mail").val("");
            $("#message").val("");
            // Open modal
            $("#mbox-contact").css({visibility: "visible", zIndex: "10000"});
        }
        
        validateForm();

    });

});