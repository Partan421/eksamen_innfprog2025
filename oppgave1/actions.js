// Slett ansatt med bekreftelse
function slettAnsatt(fornavn, etternavn) {
  const index = ansatte.findIndex(a =>
    a.fornavn.toLowerCase() === fornavn.toLowerCase() &&
    a.etternavn.toLowerCase() === etternavn.toLowerCase()
  );

  if (index !== -1) {
    if (confirm(`Er du sikker på at du vil slette ${fornavn} ${etternavn}?`)) {
      ansatte.splice(index, 1);
      // Oppdater visningene hvis de finnes
      visAnsatteRegister();
      visAnsatteAdmin();
      visAlleKurs(); // nå fungerer denne
    }
  }
}

// Hjelpefunksjon: formater kurs trygt
function formatKurs(kurs) {
  if (!Array.isArray(kurs) || kurs.length === 0) {
    return "Ingen kursansvar";
  }
  return kurs.join(", ");
}

// Vise ansatte i register.html (uten slett-knapp)
function visAnsatteRegister() {
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

// Vise ansatte i admin.html (med slett-knapp)
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

// Ny funksjon: viser alle kurs i kursoversikten
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

// Kjør riktig funksjon automatisk når siden lastes
document.addEventListener("DOMContentLoaded", () => {
  visAnsatteRegister();
  visAnsatteAdmin();
  visAlleKurs();
});
