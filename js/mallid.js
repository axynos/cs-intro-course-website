// Abifunktsioon meilile pöördumiste lisamiseks
const meil = (_, sisu) =>
    `Lugupeetud ${_.õppejõud},

    ${sisu}

    Siiralt teie,
    ${_.õpilane}`

const mallid = {
    lõputöö: [
        
    ],
    eksam: [
        {
            ülevaade: 'Pean minema hambaarsti juurde',
            pealkiri: (_) => `Eksami aeg (${_.aine})`,
            meil: (_) => meil(_,
                `Ootamatult on selgunud, et mul on eksamigaa ga samal päeval hambaarstiaeg. Seetõttu palun võimalust teha eksam mõnel teisel ajal. Loodan et saate mulle selles osas vastu tulla.`
            )
        }
    ],
    kontrolltöö: [

    ],
    kollokvium: [
        
    ],
    kodutöö: [
        {
            ülevaade: 'Koer sõi naabri kassi ära',
            pealkiri: (_) => `Kodutöö viivitus (${_.aine})`,
            meil: (_) => meil(_,
                `Olen sattunud mõnevõrra keerulisse olukorda, kuna eile õhtul sõi mu koer ootamatult naabri kassi ära. Seetõttu pean hetkel tegelema tekkinud segadusega ning ei saa kahjuks kodutööd õigeaegselt esitada.
                Loodan, et mõistate olukorra tõsidust ning saate tähtaega pikendada.`
            )
        }
    ]
}