function validate(){
    var username = document.getElementById("name");
    var mailid = document.getElementById("email");
    var sub = document.getElementById("subject");
    var message = document.getElementById("meg");

     if(username.value == "")
     {
        alert("enter username!");
        document.form1.name.focus();
        return false;
     }
     if(mailid.value == "")
     {
        alert("enter mail id!");
        document.form1.email.focus();
        return false;
     }
     if(sub.value == "")
     {
        alert("enter subject!");
        document.form1.subject.focus();
        return false;
     }
     if(message.value == "")
     {
        alert("enter message!");
        document.form1.message.focus();
        return false;
     }
     return true;


}