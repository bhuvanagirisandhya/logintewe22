function vis()
    {
        document.getElementById("a").removeAttribute("type")
        document.getElementById("b").setAttribute("src","./open.jpeg")
    }
    function hid()
    {
        document.getElementById("b").setAttribute("src","./hiden.jpeg")
        document.getElementById("a").setAttribute("type","password")
    }
    function auth()
    {
        var password="123"
        var email="rama@gmail.com"
        var userpass=document.getElementById("a").value
        var useremail=document.getElementById("email").value
        if(useremail==email && userpass==password)
        {
            document.getElementById("good").setAttribute("action","../html/index.html")
            document.getElementById("login").setAttribute("type","submit")
            document.getElementById("result").innerHTML=" "
        }
        else if(useremail!==email && userpass==password)
        {
            document.getElementById("email").style.borderColor="red"
            document.getElementById("result").innerHTML="Entered wrong email "
            document.getElementById("bg").style.backgroundImage="linear-gradient(95deg,royalred,royalblue)"
        }
        else if(useremail==email && userpass!==password)
        {
            document.getElementById("cont").style.borderColor="red"
            document.getElementById("result").innerHTML="Entered wrong password "
            document.getElementById("bg").style.backgroundImage="linear-gradient(royalblue, 95deg,royalred)"
        }
        else{
            document.getElementById("email").style.borderColor="royalred"
            document.getElementById("cont").style.borderColor="royalred"
            document.getElementById("result").innerHTML="Entered wrong password"
            document.getElementById("bg").style.backgroundColor="red"
        }
    }