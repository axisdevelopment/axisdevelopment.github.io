$(document).ready(function() {

    // Prevent redirection
    $("#submit").click(function(e) {
        e.preventDefault();

        var _subject = $("#subject").val();
        var name = $("#name").val();
        var interest = $("#interest").val();
        var _replyto = $("#email").val();
        var phone = $("#phone").val();
        var message = $("#message").val();

        function sendMail() {
            $.ajax({
                url: "https://formspree.io/f/mlepqlny",
                method: "POST",
                dataType: "json",
                data: {
                    _subject,
                    name,
                    interest,
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
            $("#interest").val("");
            $("#phone").val("");
            $("#email").val("");
            $("#message").val("");
            // Open modal
            $("#mbox").css({
                "visibility": "visible", 
                "z-index": "10000"
            });
        };
        
        sendMail();

    });

});