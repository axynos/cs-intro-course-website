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
            overview: 'Koer sõi kodutöö ära',
            heading: _ => `Tõsine probleem kodutööga (${_.subject})`,
            mail: _ => mail(_,
`Õnnetul kombel sõi mu koer eile õhtul ära nii minu kodutöö puhtandi kui ka kõik märkmed. Loodan, et saate anda kodutöö esitamiseks ajapikendust, kuna nagu isegi mõistate, ei ole mul võimalik hetkel midagi esitada.`
            )
        }, 
        {
            overview: 'Olen ajutiselt ilma internetita',
            heading: _ => `Probleem kodutöö esitamisega (${_.subject})`,
            mail: _ => mail(_,
`Telia poolt teostatavate hooldustööde tõttu ei ole mul hetkel internetiühendust, ning seega ei saa ma kodutööd esitada. Esitan kodutöö niipea kui internetiühendus taastatakse. Loodan teie mõistvale suhtumisele.`
            )
        },
        {
            overview: 'Vajan aega kodutöös oleva materjali omandamiseks',
            heading: _ => `Probleem kodutööga (${_.subject})`,
            mail: _ => mail(_,
`Olen oma õpingutega pisut maha jäänud ning vajan aega, et viia ennast kodutöös oleva materjaliga kurssi. Oma praeguste teadmiste juures ei ole ma võimeline kodutööd tegema ega esitma, kuid plaanin töötada oma teadmiste edendamise nimel ning loodan kodutöö lähemal ajal esitada. Loodan, et hindate minu pingutust ning olete tähtaja suhtes paindlik.`
            )
        }, 
        {
            overview: 'Pean minema hambaarsti juurde',
            heading: _ => `Kodutöö aeg (${_.subject})`,
            mail: _ => mail(_,
`Ootamatult on selgunud, et mul on samal ajal kui plaanisin Teie aine kodutööd teha hambaarstiaeg. Seetõttu palun võimalust teha kodutöö mõnel teisel ajal. Loodan et saate mulle selles osas vastu tulla.`
            )
        },
        {
            overview: '',
            heading: _ => ` (${_.subject})`,
            mail: _ => mail(_,
`TODO`
            )
        }, 
        {
            overview: '',
            heading: _ => ` (${_.subject})`,
            mail: _ => mail(_,
`TODO`
            )
        }
    ]
}