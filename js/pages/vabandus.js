// FUNKTSIOONID SISENDITE HALDAMISEKS

// Hangime viited elementidele kust saame sisendid andmete jaoks
const inputs = {
    //seriousness: document.getElementById('seriousness-input'),
    subject: document.getElementById('subject-input'),
    teacher: document.getElementById('teacher-input'),
    student: document.getElementById('student-input'),
    address: document.getElementById('address-input')
}

// FUNKTSIOONID VABANDUSTE UUENDAMISEKS JA KUVAMISEKS

let data = {}
let template = null
let apology = null

function updateData() {
    // Hangime sisenditest uued andmed
    //data.seriousness = inputs.seriousness.value
    data.subject = inputs.subject.value
    data.teacher = inputs.teacher.value
    data.student = inputs.student.value
    data.address = inputs.address.value

    // Uuendame url-is parameetreid (https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState)
    history.replaceState(data, '', '?' + dataToUrlParams(data))
}

// Valib uue vabanduse malli ning säilitab selle hilisemaks kasutamiseks
function updateTemplate() {
    template = chooseTemplate(data)
}

// Koostab uue vabanduse malli ja andmete põhjal ning kuvab selle
function updateApology() {
    apology = assembleApology(template, data)
    renderApology(apology)
}

// Koostab uue mailto lingi koostatud vabanduse ning andmete põhjal ning kuvab selle
function updateMailto() {
    const mailto = assembleMailto(apology, data)
    renderMailto(mailto)
}

// ABIFUNKTSIOONID VABANDUSTE KUVAMISEKS

// Hangime viited elementidele mis kuhu kuvatakse generaatori väljundid
const outputs = {
    overview: document.getElementById("overview"),
    heading: document.getElementById("heading-preview"),
    mail: document.getElementById("email-preview"),
    mailto: document.getElementById("mailto-link")
}

// Kuvab koostatud vabanduse lehel
function renderApology(apology) {
    outputs.overview.textContent = apology.overview
    outputs.heading.textContent = apology.heading
    outputs.mail.textContent = apology.mail
}

// Kuvab mailto lingi lehel
function renderMailto(mailto) {
    outputs.mailto.href = mailto
}


// LEHE KÄIVITUMISEL JOOKSEV KOOD

// Hangime url parameetritest esialgsed andmed
data = urlParamsToData(window.location.search)

// Määrame sisendite algsed väärtused ning seame üles reageerimise muutustele
//inputs.seriousness.value = data.seriousness
inputs.subject.value = data.subject
inputs.teacher.value = data.teacher
inputs.student.value = data.student
inputs.address.value = data.address

inputs.subject.addEventListener('input', e => { updateData(); updateApology() })
inputs.teacher.addEventListener('input', e => { updateData(); updateApology() })
inputs.student.addEventListener('input', e => { updateData(); updateApology() })
inputs.address.addEventListener('input', e => { updateData(); updateApology() })

outputs.mailto.addEventListener('click', e => updateMailto())
outputs.mailto.addEventListener('contextmenu', e => updateMailto())

document.getElementById('reload-button').addEventListener('click', e => window.location.reload())

// Kui tegemist on lõputööga, paneme aine asemel teema
if (data.seriousness === 'lõputöö') {
    inputs.subject.placeholder = "TEEMA"
}

// Genereerime vabanduse
updateTemplate()
updateApology()
updateMailto()