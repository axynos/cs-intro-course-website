// Abifunktsioon meilile pöördumiste lisamiseks
const mail = (_, content) =>
`Lugupeetud ${_.teacher},

${content}

Siiralt teie,
${_.student}`

const templates = {
    lõputöö: [
        
    ],
    eksam: [
        {
            overview: 'Pean minema hambaarsti juurde',
            heading: _ => `Eksami aeg (${_.subject})`,
            mail: _ => mail(_,
`Ootamatult on selgunud, et mul on eksamiga samal päeval hambaarstiaeg. Seetõttu palun võimalust teha eksam mõnel teisel ajal. Loodan et saate mulle selles osas vastu tulla.`
            )
        }
    ],
    kontrolltöö: [

    ],
    kollokvium: [
        
    ],
    kodutöö: [
        {
            overview: 'Koer sõi naabri kassi ära',
            heading: _ => `Kodutöö viivitus (${_.subject})`,
            mail: _ => mail(_,
`Olen sattunud mõnevõrra keerulisse olukorda, kuna eile õhtul sõi mu koer ootamatult naabri kassi ära. Seetõttu pean hetkel tegelema tekkinud segadusega ning ei saa kahjuks kodutööd õigeaegselt esitada.
Loodan, et mõistate olukorra tõsidust ning saate tähtaega pikendada.`
            )
        },
        {
            overview: 'Test 1',
            heading: _ => `Kodutöö viivitus 1 (${_.subject})`,
            mail: _ => mail(_,
`Pahandus ${_.subject} kodutöö ajal.`
            )
        },
        {
            overview: 'Test 2',
            heading: _ => `Kodutöö viivitus 3 (${_.subject})`,
            mail: _ => mail(_,
`Pahandus ${_.subject} kodutöö ajal.`
            )
        },
        {
            overview: 'Test 3',
            heading: _ => `Kodutöö viivitus 3 (${_.subject})`,
            mail: _ => mail(_,
`Pahandus ${_.subject} kodutöö ajal.`
            )
        }
    ]
}