// Hangime ankeedi sisendid
const excuseForm = document.getElementById('excuse-form')
const inputs = excuseForm.querySelectorAll('input') 

// Funktsioon millega saadetakse ankeedi sisu google formsi
// Loodud https://edcupaioli.com/blog/google-form-front-end/ põhjal
const formsURL = 'https://docs.google.com/forms/d/e/1FAIpQLScpjOxsftNGBe3NcSJ2BJuTBhonHYr0WC_RVug0Ofu5bAL2gw/formResponse'
function submitForm() {
    // entry.1834590686 - tõsidus
    // entry.1840013867 - vabandus
    // entry.2126048838 - meilinäidis
    fetch(`${formsURL}?${inputs.map(i => `${i.name}=${i.value}`).join('&')}`, {mode: 'no-cors'})
        .then(
            () => {
                // Saatmine edukas (kui andmed on vigased siis ei pruugi vastus formsis kajastuda, isegi kui saatmine oli meie vaates edukas)
            },
            () => {
                // Saatmine kukkus läbi
            }
        )
}

// Suuname ankeedi saatmise ümber oma funktsioonile
excuseForm.addEventListener('submit', e => {
    e.preventDefault()
    submitForm()
})