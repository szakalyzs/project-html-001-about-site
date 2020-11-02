function kepez() {
    let szam=1;
    for (let i = 0; i< 7; i++){
        document.write('<div class="row">');
        for (let j = 0; j < 3; j++) {
            document.write('<div class="cont-3">');
            document.write('<img class="img-decor" src="./images/gallery/'+szam+'.jpg" alt="">');
            document.write('</div>');
            szam++;
        }
        document.write('</div>');
    }   
}

function validalas() {
    let jo = true;
    var email = document.forms["urlap"]["email"].value;
    let i = 0;
    let hossz = email.length;
    while(i < hossz && email[i] != "@") {
        i++
    }
    if(i >= hossz) {
        alert("Érvénytelen e-mail cím!");
        jo = false;
    }
    var uzenet = document.forms["urlap"]["uzenet"].value;
    hossz = uzenet.length;
    if(hossz < 20) {
        alert("Túl rövid üzenet!");
        jo = false;
    }
    if(jo) alert("Üzenet elküldve!");
}