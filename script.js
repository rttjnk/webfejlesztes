/*===KVÍZ ÉRTÉKELÉSE===*/

/*document.getElementById("leadas").addEventListener("click", pontozo);*/

function pontozo() {

    let pont = 0;

    /*===1.kérdés===*/
    const elso = document.getElementById("ehezok").value;
    if (elso == 4) { pont = pont + 1 }

    /*===2.kérdés===*/
    const masodik = document.getElementById("1997").checked;
    if (masodik == 1) { pont = pont + 1 }

    /*===3.kérdés===*/
    const harmadik = document.getElementById("Bella").checked;
    if (harmadik == 1) { pont = pont + 1 }

    /*===4.kérdés===*/
    const negyedik = document.getElementById("kozepfolde").checked;
    if (negyedik == 1) { pont = pont + 1 }

    /*===5.kérdés===*/
    const otodik = document.getElementById("bunhodes").value;
    if (otodik == "bűnhődés") { pont = pont + 1 }

    /*===6.kérdés===*/
    const hatodik = document.getElementById("erints").checked;
    if (hatodik == 1) { pont = pont + 1 }

    /*===7.kérdés===*/
    const hetedik1 = document.getElementById("solaris").checked;
    const hetedik2 = document.getElementById("lazkod").checked;
    const hetedik3 = document.getElementById("halalkura").checked;
    const hetedik4 = document.getElementById("csontvaros").checked;
    const hetedik5 = document.getElementById("halalparancs").checked;
    if (hetedik1 == 0 && hetedik2 == 1 && hetedik3 == 0 && hetedik4 == 0 && hetedik5 == 1) { pont = pont + 1 }

    /*===8.kérdés===*/
    const nyolcadik = document.getElementById("kutya").checked;
    if (nyolcadik == 1) { pont = pont + 1 }

    /*===9.kérdés===*/
    const kilencedik = Number(document.getElementById("vajak").value);
    if (kilencedik == 5) { pont = pont + 1 }

    /*===Email ellenőrzés===*/
    if (document.getElementById("kvizemail").value == "") { alert("Adja meg e-mail címét!") }
    else {
        alert(`Összesen ${pont} pontot értél el`)
        if (pont > 7) { alert("Gratulálunk az elért eredményhez, a nyereményre jogosító kupont e-mailben kiküldtük! ") }
        if (pont < 7) { alert("Sajnos ezért most nem jár nyeremény, de ne szomorkodj, lesz még hasonló nyereményjátékunk.") }
    }


}

/*document.getElementById("torol").addEventListener("click", torles);*/

function torles() {
    if (confirm("Biztos, hogy törölni akarja válaszait?")) {
        document.getElementById("konyvmolykviz").reset();
    }

}

/*===Hűségprogram regisztáció===*/

function jelszavak() {
    const regisztralas = document.getElementById('regisztralas');
    if (document.getElementById("regjelszo").value != document.getElementById("regjelszo2").value) {
        regisztralas.disabled = true;
    }
    else{
        regisztralas.disabled = false;
    }
 }
 
document.getElementById("regisztralas").addEventListener('click', jelszavak)

function regtorol() {
    if (confirm("Biztos, hogy törölni akarja adatait?")) {
        document.getElementById("register").reset();

    }
}