// ABIFUNKTSIOONID

// Kogub sisenditest andmed
function koguAndmed(sisendid) {
    return {
        tõsidus: sisendid.tõsidus.value,
        aine: sisendid.aine.value,
        õppejõud: sisendid.õppejõud.value,
        õpilane: sisendid.õpilane.value,
        meiliaadress: sisendid.meiliaadress.value
    }
}

// Uuendab vabanduse kuvatud infot ning vabanduse parameetreid url-is
function uuendaVabandust(mall, andmed) {
    const vabandus = koostaVabandus(mall, andmed)
    kuvaVabandus(vabandus)

    // Uuendame url-is parameetreid (https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState)
    history.replaceState(andmed, vabandus.ülevaade, andmedUrlParameetriteks(andmed))
}

// Kuvab koostatud vabanduse lehel
function kuvaVabandus(vabandus) {
    // TODO
}


// LEHE KÄIVITUMISEL JOOKSEV KOOD

// Hangime url parameetritest esialgsed andmed
const algsedAndmed = urlParameetridAndmeteks(window.location.search)

// Genereerime esialgse vabanduse
let mall = valiMall(algsedAndmed)
uuendaVabandust(mall, algsedAndmed)

// Hangime sisendite HTML elemendid
const sisendid = {
    tõsidus: document.getElementById('tõsidus-input'),
    aine: document.getElementById('aine-input'),
    õppejõud: document.getElementById('õppejõud-input'),
    õpilane: document.getElementById('õpilane-input'),
    meiliaadress: document.getElementById('meiliaadress-input')
}

// Määrame sisendite algsed väärtused ning seame üles reageerimise muutustele
sisendid.tõsidus.value = algsedAndmed.tõsidus
sisendid.aine.value = algsedAndmed.aine
sisendid.õppejõud.value = algsedAndmed.õppejõud
sisendid.õpilane.value = algsedAndmed.õpilane
sisendid.meiliaadress.value = algsedAndmed.meiliaadress

sisendid.aine.addEventListener('input', e => uuendaVabandust(mall, koguAndmed(sisendid)))
sisendid.õppejõud.addEventListener('input', e => uuendaVabandust(mall, koguAndmed(sisendid)))
sisendid.õpilane.addEventListener('input', e => uuendaVabandust(mall, koguAndmed(sisendid)))
sisendid.meiliaadress.addEventListener('input', e => uuendaVabandust(mall, koguAndmed(sisendid)))

// Seame üles uue vabanduse valimise ning kuvamise nupule vajutamisel
document.getElementById('generate-button').addEventListener('click', e => {
    mall = valiMall(algsedAndmed)
    uuendaVabandust(mall, koguAndmed(sisendid))
})