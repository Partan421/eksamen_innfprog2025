// ===============================
// 📁 STILLINGER MED KONTORPREFIKS
// ===============================
const stillinger = [
  { navn: "Rektor"},
  { navn: "Dekan"},
  { navn: "Professor"},
  { navn: "Lektor"},
  { navn: "Vaktmester"},
];

// ===============================
// 📚 EMNER SOM KAN TILDELES KURSANSVAR
// ===============================
const emner = [
  "Innføring i design av digitale produkter",
  "Webutvikling",
  "Innføring i programmering",
  "Innføring i datasikkerhet",
  "Databasesystemer",
  "Utvikling av interaktive nettsteder",
  "Software Engineering og testing",
  "Business Intelligence",
  "Informasjonssikkerhet",
  "Forretningssystemer",
  "DevOps and Low-code Development",
  "Prosjektledelse",
  "IT-strategi",
  "Bacheloroppgave",
  "Programmering 2",
  "Webapplikasjoner",
  "Rammeverk og .NET",
  "Innføring i Generative AI",
  "Digital markedsføring",
  "Profesjonell kommunikasjon",
  "Datasikkerhet i utvikling og drift",
  "Bedriftspraksis"
];

// ===============================
// 👥 HOVEDLISTE FOR ANSATTE
// ===============================
const ansatte = [
  // Rektor (1)
  {
    fornavn: "Eva",
    etternavn: "Lund",
    stilling: "Rektor",
    kontor: "A101",
    epost: "eva.lund@hiof.no",
    kurs: null
  },

  // Dekaner (2)
  {
    fornavn: "Tore",
    etternavn: "Sørensen",
    stilling: "Dekan",
    kontor: "B203",
    epost: "tore.sorensen@hiof.no",
    kurs: null
  },
  {
    fornavn: "Mai",
    etternavn: "Nguyen",
    stilling: "Dekan",
    kontor: "B204",
    epost: "mai.nguyen@hiof.no",
    kurs: null
  },

  // Vaktmestere (3)
  {
    fornavn: "Jonas",
    etternavn: "Berg",
    stilling: "Vaktmester",
    kontor: "V301",
    epost: "jonas.berg@hiof.no",
    kurs: null
  },
  {
    fornavn: "Kari",
    etternavn: "Solheim",
    stilling: "Vaktmester",
    kontor: "V302",
    epost: "kari.solheim@hiof.no",
    kurs: null
  },
  {
    fornavn: "Ahmed",
    etternavn: "Ali",
    stilling: "Vaktmester",
    kontor: "V303",
    epost: "ahmed.ali@hiof.no",
    kurs: null
  },

  // Professorer (5)
  {
    fornavn: "Lise",
    etternavn: "Johansen",
    stilling: "Professor",
    kontor: "C401",
    epost: "lise.johansen@hiof.no",
    kurs: ["Innføring i design av digitale produkter", "Webutvikling"]
  },
  {
    fornavn: "Henrik",
    etternavn: "Nilsen",
    stilling: "Professor",
    kontor: "C402",
    epost: "henrik.nilsen@hiof.no",
    kurs: ["Innføring i programmering", "Innføring i datasikkerhet"]
  },
  {
    fornavn: "Sofia",
    etternavn: "Andersen",
    stilling: "Professor",
    kontor: "C403",
    epost: "sofia.andersen@hiof.no",
    kurs: ["Databasesystemer", "Utvikling av interaktive nettsteder"]
  },
  {
    fornavn: "Morten",
    etternavn: "Haugen",
    stilling: "Professor",
    kontor: "C404",
    epost: "morten.haugen@hiof.no",
    kurs: ["Software Engineering og testing"]
  },
  {
    fornavn: "Elin",
    etternavn: "Strøm",
    stilling: "Professor",
    kontor: "C405",
    epost: "elin.strom@hiof.no",
    kurs: ["Business Intelligence"]
  },

  // Lektorer (10)
  {
    fornavn: "Daniel",
    etternavn: "Lund",
    stilling: "Lektor",
    kontor: "D501",
    epost: "daniel.lund@hiof.no",
    kurs: ["Informasjonssikkerhet", "Forretningssystemer"]
  },
  {
    fornavn: "Nora",
    etternavn: "Bakke",
    stilling: "Lektor",
    kontor: "D502",
    epost: "nora.bakke@hiof.no",
    kurs: ["DevOps and Low-code Development", "Prosjektledelse"]
  },
  {
    fornavn: "Emil",
    etternavn: "Hansen",
    stilling: "Lektor",
    kontor: "D503",
    epost: "emil.hansen@hiof.no",
    kurs: ["IT-strategi", "Bacheloroppgave"]
  },
  {
    fornavn: "Sara",
    etternavn: "Moen",
    stilling: "Lektor",
    kontor: "D504",
    epost: "sara.moen@hiof.no",
    kurs: ["Programmering 2"]
  },
  {
    fornavn: "Oskar",
    etternavn: "Løken",
    stilling: "Lektor",
    kontor: "D505",
    epost: "oskar.loken@hiof.no",
    kurs: ["Webapplikasjoner"]
  },
  {
    fornavn: "Ingrid",
    etternavn: "Foss",
    stilling: "Lektor",
    kontor: "D506",
    epost: "ingrid.foss@hiof.no",
    kurs: ["Rammeverk og .NET"]
  },
  {
    fornavn: "Magnus",
    etternavn: "Rød",
    stilling: "Lektor",
    kontor: "D507",
    epost: "magnus.rod@hiof.no",
    kurs: ["Innføring i Generative AI"]
  },
  {
    fornavn: "Julie",
    etternavn: "Sveen",
    stilling: "Lektor",
    kontor: "D508",
    epost: "julie.sveen@hiof.no",
    kurs: ["Digital markedsføring"]
  },
  {
    fornavn: "Kristian",
    etternavn: "Engen",
    stilling: "Lektor",
    kontor: "D509",
    epost: "kristian.engen@hiof.no",
    kurs: ["Profesjonell kommunikasjon"]
  },
  {
    fornavn: "Amanda",
    etternavn: "Lie",
    stilling: "Lektor",
    kontor: "D510",
    epost: "amanda.lie@hiof.no",
    kurs: ["Datasikkerhet i utvikling og drift"]
  },
];
