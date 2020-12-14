export default {
  // Application title
  'application-name': 'SG React App',
  // NavBar menu items
  menu: {
    title: 'Menu',
    home: 'Accueil',
    'getting-started': 'Démarrer',
  },
  // Internal/unknown error
  internalError: 'Une erreur est survenue',
  internalErrorMessage: 'Nous ne pouvons pas compléter votre demande pour le moment.',
  internalErrorContact: 'Contactez nous',
  internalErrorTryAgain: 'Réessayer',
  // Common Messages
  loadingMessage: 'Chargement en cours...Veuillez patienter',
  // Page not found
  notFound: 'Page non trouvée.',
  notFoundMessage: "Désolé, nous n'avons pas trouvé cette page",
  notFoundContact: 'Contactez nous',
  notFoundGoBack: 'Retour',
  // Home page
  home: {
    'edit-source-code': 'Modifier {codeContent} et enregistrer pour raffraichir la page.',
    'learn-react': 'Apprendre React',
  },
  // Getting started page
  'get-started': {
    title: "Commencez avec l'application React Whiteapp",
    description:
      "Si vous voyez cet écran, cela signifie que vous avez récupéré avec succès <a href='https://apps.bsc.aws.societegenerale.com/gitlab/dex/frontend/react-whiteapp/'> React Whiteapp </a>. Alors, qu'est-ce qui est inclus dans cette application ?",
    note:
      'Notez que la Whiteapp est périodiquement mise à niveau avec les dernières dépendances. Essayez de garder votre application à jour avec <code>yarn upgrade --latest</code>.',
    'issue-title': 'Vous rencontrez un problème avec la Whiteapp? Vous avez des commentaires à ce sujet ?',
    'issue-button': 'Créer un ticket de support',
    contribute:
      "Si vous souhaitez améliorer ou résoudre un problème  vous pouvez créer une Merge Request sur le <a href='https://apps.bsc.aws.societegenerale.com/gitlab/dex/frontend/react-whiteapp'> Gitlab DEX</a>.",
    getStartedIncluded: {
      'get-started-choice-1':
        "<a href='https://sgithub.fr.world.socgen/pages/sgbootstrap/sg-bootstrap-v4/master/demo/'>SG Bootstrap v4</a>: Système de conception officiel (pour ITEC & BSC) basé sur <a href='https://getbootstrap.com/docs/4.3/getting-started/introduction/'>Bootstrap v4</a>",
      'get-started-choice-2': "<a href='https://material.io/tools/icons/?style=baseline'>Material icons</a>",
      'get-started-choice-3':
        "<a href='https://reactstrap.github.io/'>Reactstrap</a>: Implémentation de composants React avec une base bootstrap",
      'get-started-choice-4':
        "Avec <a href='https://sgithub.fr.world.socgen/DT-Widgets/sgwt-widgets'>SGWidgets</a> : <code>sgwt-account-center</code> &amp; <code>sgwt-mini-footer</code>",
      'get-started-choice-5':
        "<a href='https://developer.sgmarkets.com/resources/sgconnect/toc.html'>SG Connect</a> authentication merci à <code>@sgwt/connect-core</code> &amp; <code>sgwt-connect</code> widget",
      'get-started-choice-6':
        "<a href='https://developer.sgmarkets.com/resources/sgmonitoring/web-analytics/web-analytics-main.html'>Matomo/Piwik</a> connecteur: une solution d'analyse Web",
      'get-started-choice-7': "<a href='https://reacttraining.com/react-router/'>React router</a> React",
      'get-started-choice-8':
        "<a href='https://github.com/formatjs/react-intl'>React intl</a>: Cette bibliothèque fournit des composants React et une API pour formater les dates, les nombres et les chaînes, y compris la pluralisation et la gestion des traductions.",
      'get-started-choice-9':
        "<a href='https://easy-peasy.now.sh/'>Easy-peasy</a>: C'est une gestion d'état d'application réactive basée sur Redux mais sans le boilerplate",
      'get-started-choice-10':
        "<a href=''>Openshift</a> support: Les variables d'environnement sont externalisées à l'intérieur du fichier <code>env.js</code> pour gérer différentes valeurs entre les environnements HOMOL et PROD malgré le mode <code>promote</code>",
      'get-started-choice-11':
        "<a href='https://docs.gitlab.com/ee/ci/'>Gitlab-ci.yml</a> Template: Si vous choisissez d’héberger votre projet sur <a href='https://apps.bsc.aws.societegenerale.com/gitlab/'>Gitlab</a>",
    },
  },
  // Unauthorized page
  unauthorized: {
    title: 'OPPSSS!!!! Désolé...',
    description:
      'Désolé votre accès est refusé par sécurité. Veuillez revenir en arrière pour continuer votre navigation.',
    note: 'Code statut : 403',
  },
};
