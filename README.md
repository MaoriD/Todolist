# PMDtodo
Projet de cours basé sur le site todomvc.com

<br>
## User stories
Définition des actions de l'utilisateur :
- [] En tant qu'utilisateur je peux ajouter une tâche
- [] En tant qu'utiilisateur je peux valider une tâche
- [] En tant qu'utilisateur je peux supprimer une tâche
- [] En tant qu'utilisateur je peux filtrer les tâches réalisées
- [] En tant qu'utilisateur je peux filtrer les tâches à réaliser
- [] En tant qu'utilisateur je peux supprimer toutes les tâches réalisées

<br>
## Mise en place du projet
Etapes à suivre pour préparer le projet :
- [] Initier un server NodeJS
- [] Configurer la BDD MongoDB
- [] Créer une route `front`pour afficher un fichier `index` dans un dossier `www`
- [] Créer une route api qui renvoie en `json` l'objet `{msg: 'Hello API'}`

<br>
## Configurer la base de données
Le but est de définir le-s model-s de données à utiliser pour l'application
- [ ] Combien d'informations faut-il enregistrer pour une tâche ?
- [ ] Comment une tâche est validée ?
- [ ] Comment une tâche est supprimée ?
- [ ] Comment les tâches sont filtrées ?

<br>
### 1. Combien d'informations faut-il enregistrer pour une tâche ?
Il faut 3 informations :
- ID: string
- Etat: boolean
- Contenu: string

<br>
### 2. Comment une tâche est validée ?
Quand la propriété `etat` est égale à `true` ou `1`.

### 3. Comment une tâche est supprimée ?
Chaque tâche présente un boutin qui, au clic, permet de supprimer l'objet
- [ ] Je dois connaître la propriété `_id`de l'objet
- [ ] Créer une route `api` pour supprimer l'objet de la base de données


### 4. Comment les tâches sont filtrées ?
Je dois sélectionner tous les objets et n'afficher que ceux dont la propriété `state`est égale à `true` (ou `false`)