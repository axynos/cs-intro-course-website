// Hangime ankeedi sisendid
const excuseForm = document.getElementById('excuse-form')

// Funktsioon millega saadetakse ankeedi sisu google formsi
// Loodud https://edcupaioli.com/blog/google-form-front-end/ põhjal
const formsURL = 'https://docs.google.com/forms/d/e/1FAIpQLScpjOxsftNGBe3NcSJ2BJuTBhonHYr0WC_RVug0Ofu5bAL2gw/formResponse'
function submitForm() {
    // entry.1834590686 - tõsidus
    // entry.1840013867 - vabandus
    // entry.2126048838 - meilinäidis
    const formURLParams = new URLSearchParams(new FormData(excuseForm))
    fetch(`${formsURL}?${formURLParams.toString()}`, {mode: 'no-cors'})
        .then(
            () => {
                // Saatmine edukas (kui andmed on vigased siis ei pruugi vastus formsis kajastuda, isegi kui saatmine oli meie vaates edukas)
                window.location.href = 'vabandus-saadetud'
            },
            () => {
                // Saatmine kukkus läbi. See peaks juhtuma ainult siis kui internetiga on mingi jama
                alert('Midagi läks saatmisel valest! Kontrolli oma internetiühendust!')
            }
        )
}

// Suuname ankeedi saatmise ümber oma funktsioonile
excuseForm.addEventListener('submit', e => {
    e.preventDefault()
    submitForm()
})