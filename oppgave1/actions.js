// ===============================
// Hjelpefunksjon: formater kurs trygt
// Brukes til å vise kurs som tekst. Hvis ingen kurs finnes, vises "Ingen kursansvar".
// ===============================
function formatKurs(kurs) {
  if (!Array.isArray(kurs) || kurs.length === 0) {
    return "Ingen kursansvar";
  }
  return kurs.join(", ");
}

// ===============================
// Vis alle ansatte (register.html)
// Tegner ut alle ansatte i <ul id="ansattListeRegister">.
// ===============================
function visAlleAnsatte() {
  const liste = document.getElementById("ansattListeRegister");
  if (!liste) return;
  liste.innerHTML = "";

  ansatte.forEach(ansatt => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${ansatt.fornavn} ${ansatt.etternavn}</h3>
      <p><span class="label">Stilling:</span> ${ansatt.stilling}</p>
      <p><span class="label">Kontor:</span> ${ansatt.kontor}</p>
      <p><span class="label">E-post:</span> ${ansatt.epost}</p>
      <p><span class="label">Kurs:</span> ${formatKurs(ansatt.kurs)}</p>
    `;
    liste.appendChild(li);
  });
}

// ===============================
// Filter etter stilling
// Viser kun ansatte med en bestemt stilling.
// ===============================
function visEtterStilling(stilling) {
  const liste = document.getElementById("ansattListeRegister");
  if (!liste) return;
  liste.innerHTML = "";

  ansatte
    .filter(ansatt => ansatt.stilling.toLowerCase() === stilling.toLowerCase())
    .forEach(ansatt => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h3>${ansatt.fornavn} ${ansatt.etternavn}</h3>
        <p><span class="label">Stilling:</span> ${ansatt.stilling}</p>
        <p><span class="label">Kontor:</span> ${ansatt.kontor}</p>
        <p><span class="label">E-post:</span> ${ansatt.epost}</p>
        <p><span class="label">Kurs:</span> ${formatKurs(ansatt.kurs)}</p>
      `;
      liste.appendChild(li);
    });
}

// ===============================
// Vis undervisere
// Viser kun ansatte med stilling "Professor" eller "Lektor".
// ===============================
function visUndervisere() {
  const undervisere = ansatte.filter(a =>
    ["Professor", "Lektor"].includes(a.stilling)
  );
  renderAnsatteToRegister(undervisere);
}

// ===============================
// Vis administrasjon
// Viser kun ansatte med stilling "Rektor", "Dekan" eller "Vaktmester".
// ===============================
function visAdministrasjon() {
  const admin = ansatte.filter(a =>
    ["Rektor", "Dekan", "Vaktmester"].includes(a.stilling)
  );
  renderAnsatteToRegister(admin);
}

// ===============================
// Hjelpefunksjon for register-listen
// Brukes av filterfunksjonene til å tegne ut ansatte.
// ===============================
function renderAnsatteToRegister(list) {
  const liste = document.getElementById("ansattListeRegister");
  if (!liste) return;
  liste.innerHTML = "";
  list.forEach(ansatt => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${ansatt.fornavn} ${ansatt.etternavn}</h3>
      <p><span class="label">Stilling:</span> ${ansatt.stilling}</p>
      <p><span class="label">Kontor:</span> ${ansatt.kontor}</p>
      <p><span class="label">E-post:</span> ${ansatt.epost}</p>
      <p><span class="label">Kurs:</span> ${formatKurs(ansatt.kurs)}</p>
    `;
    liste.appendChild(li);
  });
}

// ===============================
// Admin-visning med slett-knapp
// Viser ansatte i <ul id="ansattListeAdmin"> med en slett-knapp.
// ===============================
function visAnsatteAdmin() {
  const liste = document.getElementById("ansattListeAdmin");
  if (!liste) return;
  liste.innerHTML = "";

  ansatte.forEach(ansatt => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${ansatt.fornavn} ${ansatt.etternavn}</h3>
      <p><span class="label">Stilling:</span> ${ansatt.stilling}</p>
      <p><span class="label">Kontor:</span> ${ansatt.kontor}</p>
      <p><span class="label">E-post:</span> ${ansatt.epost}</p>
      <p><span class="label">Kurs:</span> ${formatKurs(ansatt.kurs)}</p>
    `;

    const btn = document.createElement("button");
    btn.textContent = "Slett";
    btn.onclick = () => slettAnsatt(ansatt.fornavn, ansatt.etternavn);
    li.appendChild(btn);

    liste.appendChild(li);
  });
}

// ===============================
// Slett ansatt
// Fjerner en ansatt fra arrayen etter bekreftelse.
// ===============================
function slettAnsatt(fornavn, etternavn) {
  const index = ansatte.findIndex(a =>
    a.fornavn.toLowerCase() === fornavn.toLowerCase() &&
    a.etternavn.toLowerCase() === etternavn.toLowerCase()
  );

  if (index !== -1) {
    if (confirm(`Er du sikker på at du vil slette ${fornavn} ${etternavn}?`)) {
      ansatte.splice(index, 1);
      visAlleAnsatte();
      visAnsatteAdmin();
      visAlleKurs();
    }
  }
}

// ===============================
// Kursoversikt
// Viser en liste over alle unike kurs fra ansatte.
// ===============================
function visAlleKurs() {
  const kursListe = document.getElementById("kursoversiktListe");
  if (!kursListe) return;
  kursListe.innerHTML = "";

  const alleKurs = [];
  ansatte.forEach(ansatt => {
    if (Array.isArray(ansatt.kurs)) {
      ansatt.kurs.forEach(k => {
        if (k && !alleKurs.includes(k)) {
          alleKurs.push(k);
        }
      });
    }
  });

  if (alleKurs.length === 0) {
    kursListe.innerHTML = "<li>Ingen kurs registrert</li>";
    return;
  }

  alleKurs.forEach(kurs => {
    const li = document.createElement("li");
    li.textContent = kurs;
    kursListe.appendChild(li);
  });
}

// ===============================
// Legg til ny ansatt
// Legger til en ny ansatt basert på skjemaet i admin.html.
// ===============================
function leggTilAnsatt(event) {
  event.preventDefault();

  const fornavn = document.getElementById("fornavn").value.trim();
  const etternavn = document.getElementById("etternavn").value.trim();
  const epost = document.getElementById("e-post").value.trim();
  const kontor = document.getElementById("kontor").value.trim();
  const stilling = document.getElementById("stilling").value.trim();
  const kurs = document.getElementById("kurs").value.trim();

  if (!fornavn || !etternavn || !epost || !kontor || !stilling) {
    alert("Fyll ut alle feltene!");
    return;
  }

  ansatte.push({
    fornavn,
    etternavn,
    epost,
    kontor,
    stilling,
    kurs: kurs ? [kurs] : []
  });

  visAlleAnsatte();
  visAnsatteAdmin();
  visAlleKurs();

  document.querySelector("form").reset();
}

// ===============================
// Dynamisk stillingsvalg (admin.html)
// Fyller dropdown <select id="stilling"> med stillinger fra register.js.
// ===============================
function fyllInnStillingsvalg() {
  const stillingSelect = document.getElementById("stilling");
  if (!stillingSelect) return;

  if (typeof stillinger === "undefined" || !Array.isArray(stillinger)) {
    console.warn("Fant ikke 'stillinger' fra register.js");
    return;
  }

  stillingSelect.innerHTML = "";

  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = "-- Velg stilling --";
  stillingSelect.appendChild(defaultOpt);

  stillinger.forEach(st => {
    const opt = document.createElement("option");
    opt.value = st.navn;
    opt.textContent = st.navn;
    stillingSelect.appendChild(opt);
  });
}
