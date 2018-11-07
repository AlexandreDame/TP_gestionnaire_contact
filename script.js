function newContact(){
    $(document).ready(function() {

        $( "#button" ).click( function () {
            let getName = $( "#Name" ).val();
            let getfirstName    = $( "#firstName" ).val();
            let getPhone   = $( "#phone" ).val();

            if(getName =="" || getfirstName =="" || getPhone ==""){
               
                alert("Veuillez saisir tous les champs").remove();
            
            }else{
               

            let oldName = JSON.parse(localStorage.getItem('Nom')) || [];
            let oldfirstName    = JSON.parse(localStorage.getItem('Prenom')) || [];
            let oldPhone   = JSON.parse(localStorage.getItem('Phone')) || [];

            oldName.push(getName);
            oldfirstName.push(getfirstName);
            oldPhone.push(getPhone);

            localStorage.setItem("Nom", JSON.stringify(oldName));
            localStorage.setItem("Prenom", JSON.stringify(oldfirstName));
            localStorage.setItem("Phone", JSON.stringify(oldPhone));

            $('#liste').append(
                "<div class= 'listing'>" + "<span>NOM : </span>" + getName + " - " + "<span>PRENOM : </span>" + getfirstName  + " - " + "<span>TELEPHONE : </span>" + getPhone + "</div>");                   
            

            document.getElementById('Name').value = "";
            document.getElementById('firstName').value = "";
            document.getElementById('phone').value = "";
        }});

    });
}



newContact();
//displayStorageIfExist();