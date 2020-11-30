// Abifunktsioon meilile pöördumiste lisamiseks
const mail = (_, content) =>
`Lugupeetud ${_.teacher},

Olen ${_.student}, teie aines õppiv tudeng. ${content}

Siiralt teie,
${_.student || ' '}`

const mailLõputöö = (_, content) =>
`Lugupeetud ${_.teacher},

Kirjutan teile oma lõputöö "${_.subject}" osas. ${content}

Siiralt teie,
${_.student || ' '}`

// Mallid vabanduste jaoks
const templates = {
    lõputöö: [
        {
            overview: 'Ma ei oska oma aega planeerida',
            heading: _ => `Lõputöö viivitus`,
            mail: _ => mailLõputöö(_,
`Ootamatult on selgunud, et ma ei oska oma aega planeerida, ning sellest tulenevalt ei saa minu lõputöö planeeritud ajaks valmis. Loodan saada lõputöö valmis pärast tähtaega. Loodan et suhtute mõistvalt, ning võimaldate mulle pisut lisaaega.`
            )
        },
        {
            overview: 'Mind rööviti tulnukate poolt',
            heading: _ => `Lõputöö valmimine`,
            mail: _ => mailLõputöö(_,
`Lõputöö valmimine oleks lõpusirgel, kuid ootamatult olen sattunud olukorda, kus mind on röövitud tulnukate poolt. Kuna olen vangistatud nende laevas ning minuga tehakse ebainimlike katseid, siis usun, et mõistate, et ma ei saa hetkel olukorras, kus ma saaksin lõputööga tegeleda. Loodan, et mõistate minu olukorda, ning pikendate minu lõputöö tähtaega.`
            )
        },
        {
            overview: 'Mu kakaotassis oli surnud hiir',
            heading: _ => `Lõputöö valmimine`,
            mail: _ => mailLõputöö(_,
`Eile õhtul lõputöö kallal töötades avastasin ma oma kakaotassist, kust ma olin just asunud kakaod jooma, surnud hiire. See on viinud mind emotsionaalselt niivõrd tasakaalust välja, et ma ei ole hetkel võimeline lõputöö kallal töötama. Loodan, et mõistate olukorra tõsidust ning olete lõputöö tähtaegade suhtes paindlik.`
            )
        }
    ],
    eksam: [
        {
            overview: 'Pean minema hambaarsti juurde',
            heading: _ => `Eksami aeg (${_.subject})`,
            mail: _ => mail(_,
`Ootamatult on selgunud, et mul on eksamiga samal päeval hambaarstiaeg. Seetõttu palun võimalust teha eksam mõnel teisel ajal. Loodan et saate mulle selles osas vastu tulla.`
            )
        },
        {
            overview: 'Sõin halvaks läinud juustu ning ärkasin Poolas',
            heading: _ => `Eksami tegemine (${_.subject})`,
            mail: _ => mail(_,
`Minuga on juhtunud mõned kummalised asjad ning seetõttu ei ole mul võimalik eksamile jõuda. Pühapäeva õhtul sattusin sööma väga kahtlase maitsega, halvaks läinud juustu ning järgmine asi mis ma mäletan on, et ärkasin tundmatus kohas. Olen teinud kindlaks, et asun hetkel Krakowis, Poolas. Kuna mul läheb tagasi Eestisse jõudmiseks vähemalt 4 päeva, siis ma sessi ajaks ilmselgelt tagasi ei jõua. Loodan, et mõistate olukorda ning võimaldate mul teha eksami mingil teisel ajal.`
            )
        },
        {
            overview: 'Koera vanaaema suri ära',
            heading: _ => `Kontrolltöö tegemine (${_.subject})`,
            mail: _ => mail(_,
`Meie peres on hetkel lein, kuna minu koera vanaaema suri ära. Usun, et mõistate, et ma ei ole hetkel emotsionaalselt kohases seisundis selleks et aines ${_.subject} eksamit sooritada. Loodan, et võimaldate mulle aega, et selle suure kaotusega kohaneda ning lubate mul teha eksami hilisemal ajal.`
            )
        }
    ],
    kontrolltöö: [
        {
            overview: 'Pean minema hambaarsti juurde',
            heading: _ => `Kontrolltöö aeg (${_.subject})`,
            mail: _ => mail(_,
`Ootamatult on selgunud, et mul on kontrolltööga samal päeval hambaarstiaeg. Seetõttu palun võimalust teha kontrolltöö mõnel teisel ajal. Loodan et saate mulle selles osas vastu tulla.`
            )
        },
        {
            overview: 'Sõin halvaks läinud juustu ning ärkasin Poolas',
            heading: _ => `Kontrolltöö tegemine (${_.subject})`,
            mail: _ => mail(_,
`Minuga on juhtunud mõned kummalised asjad ning seetõttu ei ole mul võimalik kontrolltööle jõuda. Pühapäeva õhtul sattusin sööma väga kahtlase maitsega, halvaks läinud juustu ning järgmine asi mis ma mäletan on, et ärkasin tundmatus kohas. Olen teinud kindlaks, et asun hetkel Krakowis, Poolas. Kuna mul läheb tagasi Eestisse jõudmiseks vähemalt 4 päeva, siis ma kontrolltööle ilmselgelt ei jõua. Loodan, et mõistate olukorda ning võimaldate mul teha kontrolltöö mingil teisel ajal.`
            )
        },
        {
            overview: 'Koera vanaaema suri ära',
            heading: _ => `Kontrolltöö tegemine (${_.subject})`,
            mail: _ => mail(_,
`Meie peres on hetkel lein, kuna minu koera vanaaema suri ära. Usun, et mõistate, et ma ei ole hetkel emotsionaalselt kohases seisundis selleks et aines ${_.subject} kontrolltööd teha. Loodan, et võimaldate mulle aega, et selle suure kaotusega kohaneda ning lubate mul teha kontrolltöö hilisemal ajal.`
            )
        },
        {
            overview: 'Ei saanud liigutada, kuna kass jäi minu peale magama',
            heading: _ => `Kontrolltöö aeg`,
            mail: _ => mailLõputöö(_,
`Kirjutan teile just toimunud kontrolltöö asjus teie aines ${_.subject}. Teatan, et ei ilmunud kontrolltööd tegema, kuna minu kass jäi minu peale magama ning seetõttu ei saanud ma liigutada. Kuna ma ei saanud liigutada, ei saanud ma ka kontrolltööle tulla. Loodan, et mõistate olukorda ning võimaldate mul kontrolltööd järgi teha.`
            )
        }
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
            overview: 'Rott sõi arvutihiire ära',
            heading: _ => `Viivitus kodutöö esitamisel (${_.subject})`,
            mail: _ => mail(_,
`Mul kahjuks ei olnud võimalik kodutööd ära teha, sest rott sõi minu arvutihiire ära. Loodan, suhtute mõistvalt ning olete tähtaja suhtes paindlik.`
            )
        }
    ]
}