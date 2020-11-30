// Hangime ankeedi sisendid
const excuseForm = document.getElementById('submittable-form')

// Funktsioon millega saadetakse ankeedi sisu google formsi
// Loodud https://edcupaioli.com/blog/google-form-front-end/ põhjal
const formsURL = ''
function submitForm() {
    // entry.1834590686 - tõsidus
    // entry.1840013867 - vabandus
    // entry.2126048838 - meilinäidis
    const formURLParams = new URLSearchParams(new FormData(excuseForm))
    fetch(`${excuseForm.dataset.target}?${formURLParams.toString()}`, {mode: 'no-cors'})
        .then(
            () => {
                // Saatmine edukas (kui andmed on vigased siis ei pruugi vastus formsis kajastuda, isegi kui saatmine oli meie vaates edukas)
                window.location.href = excuseForm.dataset.action
            },
            () => {
                // Saatmine kukkus läbi. See peaks juhtuma ainult siis kui internetiga on mingi jama
                alert('Vabandame, midagi läks valesti! Kontrollige oma internetiühendust!')
            }
        )
}

// Suuname ankeedi saatmise ümber oma funktsioonile
excuseForm.addEventListener('submit', e => {
    e.preventDefault()
    submitForm()
})