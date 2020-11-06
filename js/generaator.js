
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
