// ════════════════════════════════════════════
//   ADAMÉTÉO — script.js
//   À toi de jouer !
//   Les fonctions ci-dessous sont vides.
//   Lis les commentaires de chaque fonction
//   pour savoir ce qu'elle doit faire.
// ════════════════════════════════════════════


// ── Sélection des éléments DOM ──────────────
// Ces lignes sont déjà écrites — ne pas modifier.

const inputTemperature  = document.getElementById("temperature")
const selectConditions  = document.getElementById("conditions")
const btnAnalyser       = document.getElementById("btn-analyser")
const sectionResultat   = document.getElementById("resultat")
const meteoEmoji        = document.getElementById("meteo-emoji")
const meteoDescription  = document.getElementById("meteo-description")
const meteoTemperature  = document.getElementById("meteo-temperature")
const divRecommandations = document.getElementById("recommandations")


// ════════════════════════════════════════════
//   TODO — Fonctions à écrire
// ════════════════════════════════════════════


// ── TODO : choisirEmoji ──────────────────────
// Reçoit les conditions météo (string) et la température (number).
// Retourne un emoji selon les conditions :
//   "ensoleille"  et température > 25 → "🌞"
//   "ensoleille"                      → "☀️"
//   "nuageux"                         → "⛅"
//   "pluvieux"                        → "🌧️"
//   "orageux"                         → "⛈️"
//   "neige"                           → "❄️"
//   "brouillard"                      → "🌫️"
//   autre valeur                      → "🌡️"

const choisirEmoji = (conditions, temperature) => {
  if (conditions === "ensoleille" && temperature > 25) { 
    return "🌞";
  } else if (conditions === "ensoleille") {
    return "☀️";
  } else if (conditions === "nuageux") {
    return "⛅";
  } else if (conditions === "pluvieux") {
    return "🌧️";
  } else if (conditions === "orageux") {
    return "⛈️";
  } else if (conditions === "neige") {
    return "❄️";
  } else if (conditions === "brouillard") {
    return "🌫️";
  } else {
    return "🌡️";
  } 
};
  // Écris ton code ici

// ── TODO : decrireMeteo ──────────────────────
// Reçoit les conditions météo (string) et la température (number).
// Retourne une description courte selon les deux :
//   Si température < 0         → "Temps glacial"
//   Si température < 10        → "Temps froid"
//   Si température < 20        → "Temps frais"
//   Si température < 30        → "Temps agréable"
//   Sinon                      → "Temps chaud"
// Ajoute ensuite les conditions :
//   "pluvieux" ou "orageux"    → ajouter " et pluvieux"
//   "neige"                    → ajouter " et enneigé"
//   "brouillard"               → ajouter " et brumeux"
// Exemple : decrireMeteo("pluvieux", 8) → "Temps froid et pluvieux"

const decrireMeteo = (conditions, temperature) => {

let description= "";

  if (temperature < 0) {
    description = "Temps glacial";
  } else if (temperature < 10) {
    description = "Temps froid";
  } else if (temperature < 20) {
    description = "Temps frais";
  } else if (temperature < 30) {
    description = "Temps agréable";
  } else {
    description = "Temps chaud";
  }

  if (conditions === "pluvieux" || conditions === "orageux") {
    description += " et pluvieux";
  } else if (conditions === "neige") {
    description += " et enneigé";
  } else if (conditions === "brouillard") {
    description += " et brumeux";
  }
  return description ;
}




// ── TODO : recommanderTenue ──────────────────
// Reçoit les conditions météo (string) et la température (number).
// Retourne un tableau de recommandations.
// Chaque recommandation est un objet avec deux clés :
//   { icone: "🧥", texte: "Prends un manteau chaud" }
//
// Règles — PARTIE 1 : selon la température (une seule s'applique, utilise if/else if)
//   température < 0            → { icone: "🧥", texte: "Manteau d'hiver indispensable" }
//   température < 10           → { icone: "🧥", texte: "Prends un manteau" }
//   température < 20           → { icone: "🧣", texte: "Une veste suffira" }
//   température >= 30          → { icone: "👕", texte: "Habits légers recommandés" }
//
// Règles — PARTIE 2 : selon les conditions (plusieurs peuvent s'appliquer en même temps !)
//   Utilise des if indépendants (pas des else if) pour pouvoir en ajouter plusieurs.
//   conditions "pluvieux"      → ajouter { icone: "☂️", texte: "N'oublie pas ton parapluie" }
//   conditions "orageux"       → ajouter { icone: "⚠️", texte: "Évite les zones exposées" }
//   conditions "neige"         → ajouter { icone: "👢", texte: "Préfère des bottes imperméables" }
//   conditions "ensoleille"
//   et température > 20        → ajouter { icone: "🕶️", texte: "Pense à la crème solaire" }

const recommanderTenue = (conditions, temperature) => {

const tenue = [];

  if (temperature < 0) {
    tenue.push({icone:"🧥", texte :"Manteau d'hiver indispensable"}); 
  } else if (temperature < 10) {
     tenue.push({icone:"🧥", texte:"Prends un manteau"});
  } else if (temperature < 20) {
     tenue.push ({icone :"🧣", texte : "Une veste suffira"});
  } else if (temperature >= 30) {
     tenue.push ({icone :"👕", texte : "Habits légers recommandés"});
  } 
  
  if (conditions === "pluvieux") {
     tenue.push({icone : "☂️", texte: "N'oublie pas ton parapluie"});
  } else if (conditions === "orageux") {
     tenue.push({icone : "⚠️", texte :  "Evite les zones exposées"});
  } else if (conditions === "neige") {
     tenue.push({icone : "👢", texte : "Préfère les botte imperméables"});
  } else if (conditions === "ensoleille" && temperature > 20) {
     tenue.push({icone : "🕶️", texte : "Pense aux lunettes et à la crème solaire"});
  } 
  return tenue;
};


// retourne un tableau []//

// ── Affichage du résultat ────────────────────
// Cette partie est déjà écrite — ne pas modifier.
// Elle utilise tes fonctions pour mettre à jour la page.

const afficherResultat = (temperature, conditions) => {
  const emoji       = choisirEmoji(conditions, temperature)
  const description = decrireMeteo(conditions, temperature)
  const recos       = recommanderTenue(conditions, temperature)

  meteoEmoji.textContent       = emoji || "🌡️"
  meteoDescription.textContent = description || "—"
  meteoTemperature.textContent = temperature + "°C — " + conditions

  divRecommandations.innerHTML = ""

  if (recos && recos.length > 0) {
    recos.forEach((reco) => {
      const div = document.createElement("div")
      div.classList.add("reco-item")
      div.innerHTML = `<span class="reco-icon">${reco.icone}</span><span>${reco.texte}</span>`
      divRecommandations.appendChild(div)
    })
  }

  sectionResultat.classList.remove("cache")
}


// ── Écouteur d'événement ─────────────────────
// Déjà écrit — déclenche l'affichage au clic.

btnAnalyser.addEventListener("click", () => {
  const temperature = parseInt(inputTemperature.value)
  const conditions  = selectConditions.value

  if (isNaN(temperature) || conditions === "") {
    alert("Remplis les deux champs avant d'analyser !")
    return
  }

  afficherResultat(temperature, conditions)
})

// Question n°1

// Dans recommanderTenue, pourquoi utilises-tu des if séparés pour les conditions météo plutôt que des else if ?

// Réponse

// Si tout le "bloc" recommanderTenue est consituté de else/if, il n'y aura qu'une icone et description, la 2e recommandation n'apparaitra pas


// Question n°2

// Que se passe-t-il si l'utilisateurice entre une température de 28°C avec des conditions "ensoleille" ? Quelles recommandations s'affichent et pourquoi ?

// Réponse

// Le résultat est le smiley "🌞" et un "temps agréable" en description. Les recommandations s'affichant sont l'incone "🕶️" et "pense aux lunettes et à la crème solaire" car la température est supérieure à 20 et la condition est "ensoleille". il n'y a pas de "tenue" car pas d'icone prévue pour une température comprise de 20 à 29°. 