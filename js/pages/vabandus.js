// FUNKTSIOONID SISENDITE HALDAMISEKS

// Hangime sisendite HTML elemendid
const inputs = {
    seriousness: document.getElementById('seriousness-input'),
    subject: document.getElementById('subject-input'),
    teacher: document.getElementById('teacher-input'),
    student: document.getElementById('student-input'),
    address: document.getElementById('address-input')
}

// Kogub sisenditest andmed
function collectData() {
    return {
        seriousness: inputs.seriousness.value,
        subject: inputs.subject.value,
        teacher: inputs.teacher.value,
        student: inputs.student.value,
        address: inputs.address.value
    }
}

// FUNKTSIOONID VABANDUSTE UUENDAMISEKS JA KUVAMISEKS

let data = null
let template = null
let apology = null

function updateData() {
    data = collectData()
    // Uuendame url-is parameetreid (https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState)
    history.replaceState(data, '', dataToUrlParams(data))
}

function generateNewApology() {
    template = chooseTemplate(data)
    updateApology()
    renderNewApologyAnimation()
}

function updateApology() {
    apology = assembleApology(template, data)
    renderApology(apology)
}

function updateMailto() {
    const mailto = assembleMailto(apology, data)
    renderMailto(mailto)
}

// ABIFUNKTSIOONID VABANDUSTE KUVAMISEKS

const outputs = {
    overview: document.getElementById("overview"),
    heading: document.getElementById("heading-preview"),
    mail: document.getElementById("mail-preview"),
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

// Kuvab uue vabanduse genereerimise animatsioonid
function renderNewApologyAnimation() {
    // TODO
}


// LEHE KÄIVITUMISEL JOOKSEV KOOD

// Hangime url parameetritest esialgsed andmed
data = urlParamsToData(window.location.search)

// Määrame sisendite algsed väärtused ning seame üles reageerimise muutustele
inputs.seriousness.value = data.seriousness
inputs.subject.value = data.subject
inputs.teacher.value = data.teacher
inputs.student.value = data.student
inputs.address.value = data.address

inputs.subject.addEventListener('input', e => { updateData(); updateApology() })
inputs.teacher.addEventListener('input', e => { updateData(); updateApology() })
inputs.student.addEventListener('input', e => { updateData(); updateApology() })
inputs.address.addEventListener('input', e => { updateData(); updateApology() })

// Seame üles uue apologye valimise ning kuvamise nupule vajutamisel
document.getElementById('generate-button').addEventListener('click', e => {
    updateData() // Igaks juhuks
    generateNewApology()
    updateMailto()
})

// TODO: Update mailto link on click

// Genereerime esialgse vabanduse
generateNewApology()
updateMailto()