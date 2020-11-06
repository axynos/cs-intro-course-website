
/*
    Koostab malli ning andmete põhjal vabanduse, kuhu on kõik andmed sisestatud. Sealhulgas koostab meili, mailto lingi meili saatmiseks ning meili pealkirja

    Sisend:
        andmed: <vabanduse andmed JS-i objektina>

    Väljund:
        <vabanduse mall JS=i objektina>
*/

function valiMall(andmed) {
    võimalikudMallid = mallid[andmed.tõsidus]
    return võimlikudVabandused[Math.floor(Math.random() * võimlikudVabandused.length)]
}

/*
    Koostab malli ning andmete põhjal vabanduse, kuhu on kõik andmed sisestatud. Sealhulgas koostab meili, mailto lingi meili saatmiseks ning meili pealkirja

    Sisend:
        mall: <vabanduse mall JS=i objektina (valiMall() väljund)>
        andmed: <vabanduse andmed JS-i objektina>

    Väljund:
        <koostatud vabandus JS-i objektina, kuhu on kõik vajalikud andmed sisestatud>
*/
function koostaVabandus(mall, andmed) {
    const pealkiri = mall.pealkiri(andmed)
    const meil = mall.meil(andmed)
    const mailto = `mailto:${andmed.meiliaadress}?subject=${encodeURIComponent(pealkiri)}&body=${encodeURIComponent(meil)}`

    return {
        ülevaade: mall.ülevaade,
        pealkiri: pealkiri,
        meil: meil,
        mailto: mailto
    }
}

// Teisendab andmete objekti url parameetrite sõneks
function andmedUrlParameetriteks(andmed) {
    // TODO: urlencode
    return `?tosidus=${andmed.tõsidus}&aine=${andmed.aine}&opjd=${andmed.õppejõud}&opl=${andmed.õpilane}&aadr=${andmed.meiliaadress}`
}

// Teisendab andmed url parameetrite sõnest andmete objektiks
function urlParameetridAndmeteks(urlParameetrid) {
    const urlParameetridObjekt = new URLSearchParams(urlParameetrid) 
    return {
        tõsidus: urlParameetridObjekt.get('tosidus'),
        aine: urlParameetridObjekt.get('aine'),
        õppejõud: urlParameetridObjekt.get('opjd'),
        õpilane: urlParameetridObjekt.get('opl'),
        meiliaadress: urlParameetridObjekt.get('aadr')
    }
}
