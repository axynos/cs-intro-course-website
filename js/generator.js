
/*
    Koostab malli ning andmete põhjal vabanduse, kuhu on kõik andmed sisestatud. Sealhulgas koostab meili, mailto lingi meili saatmiseks ning meili pealkirja

    Sisend:
        andmed: <vabanduse andmed JS-i objektina>

    Väljund:
        <vabanduse mall JS=i objektina>
*/
function chooseTemplate(data) {
    const possibleTemplates = templates[data.seriousness] || templates.kodutöö
    const previousTemplate = parseInt(window.sessionStorage.getItem('previousTemplate'), 10)

    let chosenTemplate = Math.floor(Math.random() * possibleTemplates.length)
    if (possibleTemplates.length > 1) {
        while (chosenTemplate === previousTemplate) {
            chosenTemplate = Math.floor(Math.random() * possibleTemplates.length)
        }
    }

    window.sessionStorage.setItem('previousTemplate', String(chosenTemplate))
    return possibleTemplates[chosenTemplate]
}

// Väike test, et kontrollida kas valitud mallide jaotus on ühtlane
/*const results = new Map([[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]])
for (let i = 0; i < 600000; i++) {
    const templateIndex = templates.kodutöö.indexOf(chooseTemplate({}))
    results.set(templateIndex, results.get(templateIndex) + 1)
}
console.log(results)*/

/*
    Koostab malli ning andmete põhjal vabanduse, kuhu on kõik andmed sisestatud. Sealhulgas koostab meili, mailto lingi meili saatmiseks ning meili pealkirja

    Sisend:
        mall: <vabanduse mall JS=i objektina (valiMall() väljund)>
        andmed: <vabanduse andmed JS-i objektina>

    Väljund:
        <koostatud vabandus JS-i objektina, kuhu on kõik vajalikud andmed sisestatud>
*/
function assembleApology(template, data) {
    const dataWithPlaceholders = {
        subject: `<span class="placeholder">${data.subject || (data.seriousness === 'lõputöö' ? 'TEEMA' : 'AINE')}</span>`,
        teacher: `<span class="placeholder">${data.teacher || 'ÕPPEJÕUD'}</span>`,
        student: `<span class="placeholder">${data.student || 'NIMI'}</span>`,
    }
    const heading = template.heading(dataWithPlaceholders)
    const mail = template.mail(dataWithPlaceholders)

    return {
        overview: template.overview,
        heading: heading,
        mail: mail
    }
}

function assembleMailto(template, data) {
    const dataWithPlaceholders = {
        subject: data.subject || (data.seriousness === 'lõputöö' ? 'TEEMA' : 'AINE'),
        teacher: data.teacher || 'ÕPPEJÕUD',
        student: data.student || 'NIMI'
    }
    return `mailto:${data.address.trim() || 'õppejõu.nimi@ut.ee'}?subject=${encodeURIComponent(template.heading(dataWithPlaceholders))}&body=${encodeURIComponent(template.mail(dataWithPlaceholders))}`
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
