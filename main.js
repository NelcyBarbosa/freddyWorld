function SendEmail(){
    Email.send({
        SecureToken:"f2cbd31e-ada8-4466-b796-9fd97ce7f7e4",
        To : "nelcybarbosa92@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
            +"<br> Email: " + document.getElementById("email").value
            +"<br> Phone no: " + document.getElementById("phone").value
            +"<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert(message)
    );
 }

 