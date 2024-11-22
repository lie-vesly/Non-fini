


function whatsApp_send_datas(){
    const nom = document.getElementById("nom").value;
    const prénom = document.getElementById("prénom").value;
    const sexe = document.getElementById("sexe").value;
    const adresse = document.getElementById("adresse").value;
    const téléphone = document.getElementById("téléphone").value;
    const email = document.getElementById("email").value;
    const sexe1 = document.getElementById("sexe1").value;
    const couleur1 = document.getElementById("1").value;
    const couleur2 = document.getElementById("2").value;
    const sexe3 = document.getElementById("sexe3").value;
    const sexe2 = document.getElementById("sexe2").value;
    const sexe4 = document.getElementById("sexe4").value;


    const numerowhatsApp = "+242069329337";
    const url =  "https://wa.me/" + numerowhatsApp + "?text="
    + "Nom :" +nom+ "%0a"
    + "Prénom :" +prénom+ "%0a"
    + "Sexe :" +sexe+ "%0a"
    + "Adresse :" +adresse+ "%0a"
    + "Téléphone :" +téléphone+ "%0a"
    + "Email :" +email+ "%0a"
    + "Type de produit :" +sexe1+ "%0a"
    + "Couleur de boule 1 :" +couleur1+ "%0a"
    + "Couleur de boule 2 :" +couleur2+ "%0a"
    + "Nom à mettre sur les boules :" +sexe3+ "%0a"
    + "Nombre d'article (s) à acheter :" +sexe2+ "%0a"
    + "Message :" +sexe4+ "%0a"


    window.open(url, "_blank").focus()



    

}