
/*
    Koostab malli ning andmete põhjal vabanduse, kuhu on kõik andmed sisestatud. Sealhulgas koostab meili, mailto lingi meili saatmiseks ning meili pealkirja

    Sisend:
        andmed: <vabanduse andmed JS-i objektina>

    Väljund:
        <vabanduse mall JS=i objektina>
*/

function chooseTemplate(andmed) {
    const possibleTemplates = templates[andmed.tõsidus] || templates.kodutöö
    return possibleTemplates[Math.floor(Math.random() * possibleTemplates.length)]
}

/*
    Koostab malli ning andmete põhjal vabanduse, kuhu on kõik andmed sisestatud. Sealhulgas koostab meili, mailto lingi meili saatmiseks ning meili pealkirja

    Sisend:
        mall: <vabanduse mall JS=i objektina (valiMall() väljund)>
        andmed: <vabanduse andmed JS-i objektina>

    Väljund:
        <koostatud vabandus JS-i objektina, kuhu on kõik vajalikud andmed sisestatud>
*/
function assembleApology(template, data) {
    const heading = template.heading(data)
    const mail = template.mail(data)

    return {
        overview: template.overview,
        heading: heading,
        mail: mail
    }
}

function assembleMailto(apology, data) {
    return `mailto:${data.address}?subject=${encodeURIComponent(apology.heading)}&body=${encodeURIComponent(apology.mail)}`
}

// Teisendab andmete objekti url parameetrite sõneks
function dataToUrlParams(andmed) {
    // TODO: urlencode
    return `?ser=${andmed.seriousness}&subj=${andmed.subject}&teach=${andmed.teacher}&stud=${andmed.student}&adr=${andmed.address}`
}

// Teisendab andmed url parameetrite sõnest andmete objektiks
function urlParamsToData(urlParameetrid) {
    const urlParameetridObjekt = new URLSearchParams(urlParameetrid) 
    return {
        seriousness: urlParameetridObjekt.get('ser') || '',
        subject: urlParameetridObjekt.get('subj') || '',
        teacher: urlParameetridObjekt.get('teach') || '',
        student: urlParameetridObjekt.get('stud') || '',
        address: urlParameetridObjekt.get('adr') || ''
    }
}
