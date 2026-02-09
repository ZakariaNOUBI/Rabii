const fichiersPDF = [
  "CatalogueFormations-2.pdf",
  "reglement-interieur.pdf",
  "calendrier-academique.pdf"
];

function normaliser(txt) {
  return txt
    .toLowerCase()
    .replace(".pdf", "")
    .replace(/[^a-z0-9]/g, "");
}

function filtrerPDF() {
  const input = normaliser(document.getElementById("searchInput").value);
  const liste = document.getElementById("resultats");

  liste.innerHTML = "";

  if (!input) {
    liste.classList.add("hidden");
    return;
  }

  const resultats = fichiersPDF.filter(fichier =>
    normaliser(fichier).includes(input)
  );

  if (resultats.length === 0) {
    liste.classList.add("hidden");
    return;
  }

  resultats.forEach(fichier => {
    const li = document.createElement("li");
    li.textContent = fichier;
    li.className =
      "px-4 py-2 cursor-pointer hover:bg-yellow-100";

    li.onclick = () => afficherPDF(fichier);
    liste.appendChild(li);
  });

  liste.classList.remove("hidden");
}

function afficherPDF(fichier) {
  const viewer = document.getElementById("pdfViewer");
  const container = document.getElementById("pdfContainer");
  const liste = document.getElementById("resultats");

  viewer.src = `fichiers/${fichier}`;
  container.classList.remove("hidden");
  liste.classList.add("hidden");
}
