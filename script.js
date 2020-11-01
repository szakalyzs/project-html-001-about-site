function kepez() {
    let szam=1;
    for (let i = 0; i< 7; i++){
        document.write('<div class="row">');
        for (let j = 0; j < 3; j++) {
            document.write('<div class="cont-3">');
            document.write('<img class="img-decor" src="/images/gallery/'+szam+'.jpg" alt="">');
            document.write('</div>');
            szam++;
        }
        document.write('</div>');
    }
    
}