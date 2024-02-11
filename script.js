

    document.getElementById("usernameForm").addEventListener("submit", function(event){
        event.preventDefault()
        let username = document.getElementById("username").value;
        var alphanumericRegex = /^[a-zA-Z0-9]+$/;
        if (username.length>=5 && alphanumericRegex.test(username)) {
            alert("Success! Username Is Valid");
        }else{
            alert("Error! Username must be at least 5 characters long and contain only alphanumeric characters.")
        }
    })
    
    const div = document.getElementById("show").style.width = "200px"
    const div2 = document.getElementById("show").style.height = "200px"
    const div1 = document.getElementById("show").style.borderRadius = "100px"
    function showIt() {
        const div = document.getElementById("show").style.backgroundColor = "blue"
        
    }
    function hideIt() {
        const div = document.getElementById("show").style.display = "none"
    }
    
    