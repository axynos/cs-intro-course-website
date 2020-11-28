
/*
    Koostab malli ning andmete põhjal vabanduse, kuhu on kõik andmed sisestatud. Sealhulgas koostab meili, mailto lingi meili saatmiseks ning meili pealkirja

    Sisend:
        andmed: <vabanduse andmed JS-i objektina>

    Väljund:
        <vabanduse mall JS=i objektina>
*/

function chooseTemplate(andmed) {
    const possibleTemplates = templates[andmed.seriousness] || templates.kodutöö
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
    return `mailto:${data.address.trim() || 'õppejõu.nimi@ut.ee'}?subject=${encodeURIComponent(apology.heading)}&body=${encodeURIComponent(apology.mail)}`
}

// Teisendab andmete objekti url parameetrite sõneks
function dataToUrlParams(data) {
    return new URLSearchParams(data).toString()
    //return `?seriousness=${data.seriousness}&subject=${encodeURIComponent(data.subject)}&teacher=${encodeURIComponent(data.teacher)}&student=${encodeURIComponent(data.student)}` //&address=${data.address}`
}

// Teisendab andmed url parameetrite sõnest andmete objektiks
function urlParamsToData(urlParameetrid) {
    const urlParams = new URLSearchParams(urlParameetrid) 
    return {
        seriousness: urlParams.get('seriousness') || '',
        subject: urlParams.get('subject') || '',
        teacher: urlParams.get('teacher') || '',
        student: urlParams.get('student') || '',
        address: urlParams.get('address') || ''
    }
}
