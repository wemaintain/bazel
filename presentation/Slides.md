## Définition d'un bon process de build



- **Correct** - Jamais besoin de `rm -fr` ou de se demander si les artifacts de build sont à jour
- **Rapide** - les builds s'éxécutent rapidement
  - **Parallelisme** - s'éxécute sur plusieurs CPUs, en local ou à distance
  - **Incrémental** - On ne rebuild que ce qui a changé
- **Déterministe** - les artifacts en sortie dépendent exclusivement des entrées
- **Composable** - Permet de réutiliser des règles de build et d'en créer des nouveaux en combinant les existantes



## Caractéristiques de Bazel

- **Incrémental** - Le temps de build est proportionel à la quantité de changements
- **Déterministe** - On peut cacher les résultats des builds en fonction de leurs inputs
- **Hermétique** - permet la parallélisation, le cache partagé et l'éxécution à distance
- **Universel** - Peut build pour Android, iOS, toute sorte de backend et front web...
- **Industrialisable** - Fonctionne pour des repos avec des milliers de paquets