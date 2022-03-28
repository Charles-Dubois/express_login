## Instructions

Creer une application `express_login` avec un backend et un frontend en react.

Le frontend doit contenir 3 pages:

- Signup
- Login
- Admin

Le backend doit etre capable de d'enregistrer un utilisateur, de le connecter, et de donner la liste des personnes inscrites uniquement si on est connecté.

Côté front, utilisez la librairie axios pour faire vos requêtes. Pour rajouter automatiquement le cookie avec chaque requête, vous devez spécifier une option à axios.

### Signup

Cette page doit avoir:

- un champs `email`
- un champs `password`
- un champs `confirm password`
- un champs `firstName`
- un champs `surname`
- et un champs `date of birth`

Règle pour le mot de passe :

- Il doit avoir 8 caractères
- être le même que celui dans `confirm password`

### Admin

Cette page doit avoir la liste des utilisateurs enregistrés avec :

- Prénom
- Nom
- Age

### Login

Cette page doit permettre à un utilisateur de pouvoir se login à partir de l’email et du mot de passe.
