// Abifunktsioonid

let andmed = null
let mall = null

function urlParameetridAndmeteks(urlParameetrid) {
    const urlParameetridObjekt = new URLSearchParams(urlParameetrid)

/*  const tõsidus = 'kodutöö'
    const aine = 'MMP'
    const õppejõud = 'Albert Saanlo'
    const õpilane = 'Jaagup Saminossov'
    const meiliaadress = 'albert.saanlo@ut.ee' */

    return {
        tõsidus: tõsidus,
        aine: aine,
        õppejõud: õppejõud,
        õpilane: õpilane,
        meiliaadress: meiliaadress
    }
}

function andmedUrlParameetriteks(andmed) {
    // TODO: urlencode
    return `?tosidus=${andmed.tõsidus}&aine=${andmed.aine}&opjd=${andmed.õppejõud}&opl=${andmed.õpilane}&aadr=${andmed.meiliaadress}`
}

// Genereerib uue vabanduse ja kuvab selle
function genereeriUusVabandus() {
    mall = valiMall(andmed)
    const vabandus = koostaVabandus(mall, andmed)
    kuvaVabandus(vabandus)
}

// Kuvab vabanduse uuendatud andmetega
function uuendaVabandust() {
    const vabandus = koostaVabandus(mall, andmed)
    kuvaVabandus(vabandus)
}

// Kuvab koostatud vabanduse lehel
function kuvaVabandus(vabandus) {
    // TODO
}


// Lehe käivitumisel jooksev kood

// Hangime url parameetritest esialgsed andmed
andmed = urlParameetridAndmeteks(window.location.search)

// Genereerime esialgse vabanduse
genereeriUusVabandus()

// Hangime sisendikastide HTML elemendid ning sisestame esialgsed andmed sisendikastidesse
const sisendid = {
    tõsidus: document.getElementById('tõsidus'),
    aine: document.getElementById('aine'),
    õppejõud: document.getElementById('õppejõud'),
    õpilane: document.getElementById('õpilane'),
    meiliaadress: document.getElementById('meiliaadress')
}

// Seame väljade algsed väärtused
sisendid.tõsidus.value = andmed.tõsidus
sisendid.aine.value = andmed.aines
sisendid.õppejõud.value = andmed.õppejõud
sisendid.õpilane.value = andmed.õpilane
sisendid.meiliaadress.value = andmed.meiliaadress

// Seame üles funktsioonid mis uuendavad vabandust, kui sisestatud andmed muutuvad
// TODO

// Seame üles funktsiooni mis genereerib uue vabanduse kui vajutatakse vastavale nupule
// TODO