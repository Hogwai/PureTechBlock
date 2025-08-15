# PureTechBlock

Ce script pour Tampermonkey supprime les annonces sur [lacentrale.fr](https://www.lacentrale.fr) contenant les mots-clés "PURETECH", "VTI" ou "THP", ainsi quelques publicités (conteneurs `.lcui-AdPlaceholder` et `.appNexusPlaceholder`).

## Prérequis
- Un navigateur web compatible (Google Chrome, Firefox, Edge, etc.).
- L'extension **Tampermonkey** installée.

## Installation de Tampermonkey
   - **Google Chrome** : Se rendre sur  [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?pli=1) et cliquez sur "Ajouter à Chrome".
   - **Firefox** : Se rendre sur [Mozilla Add-ons](https://addons.mozilla.org/fr/firefox/addon/tampermonkey/) et cliquez sur "Ajouter à Firefox".
   - **Autres navigateurs** : Cherchez "Tampermonkey" dans le store d'extensions de votre navigateur (Edge, Opera, etc.).

## Installation du script PureTechBlock
1. **Depuis Greasyfork :**
    - Se rendre sur la page du script: [PureTechBlock](https://greasyfork.org/fr/scripts/545906-puretechblock) 
    - Cliquer sur "Installer ce script" et confirmer
2. **Depuis Github :**
   - Cliquer ici: [PureTechBlock.user.js](https://github.com/Hogwai/PureTechBlock/raw/refs/heads/main/PureTechBlock.user.js) et confimer.
3. **Vérifiez que le script est activé :**
   - Dans le tableau de bord de Tampermonkey (cliquez sur l'icône > "Tableau de bord"), assurez-vous que le script `PureTechBlock` est activé (interrupteur sur "On").

## Utilisation
- Visitez [lacentrale.fr](https://www.lacentrale.fr) ou [lacentrale.fr](https://lacentrale.fr).
- Le script s'exécute automatiquement et supprime :
  - Les annonces de véhicules contenant "PURETECH", "VTI" ou "THP".
  - Les publicités frontales (`.lcui-AdPlaceholder`) et intermédiaires (`.appNexusPlaceholder`).
- Ouvrez la console du navigateur (`F12` > Console) pour voir les logs (par exemple, combien d'annonces ou publicités ont été supprimées).

## Dépannage
- **Le script ne fonctionne pas ?**
  - Vérifiez que Tampermonkey est activé et que le script est correctement installé.
  - Assurez-vous que l'URL du site correspond aux motifs `@match` du script (`https://lacentrale.fr/*` ou `https://www.lacentrale.fr/*`).
  - Consultez la console du navigateur pour des messages d'erreur.
- **Problèmes persistants ?**
  - Contactez l'auteur via [GitHub](https://github.com/Hogwai/PureTechBlock/) ou mettez à jour le script.

## Auteur
- **Hogwai** - [GitHub](https://github.com/Hogwai)

## Licence
Ce projet est sous licence libre. Consultez le dépôt GitHub pour plus de détails.