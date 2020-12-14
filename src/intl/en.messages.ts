export default {
  // Application title
  'application-name': 'SG React App',
  // NavBar menu items
  menu: {
    title: 'Menu',
    home: 'Home',
    'getting-started': 'Getting started',
  },
  // Internal/unknown error
  internalError: "Something's wrong.",
  internalErrorMessage: "We're unable to complete your request at the moment.",
  internalErrorContact: 'Contact us',
  internalErrorTryAgain: 'Try Again',
  // Common Messages
  loadingMessage: 'Loading...Please wait',
  // Page not found
  notFound: 'Page not found.',
  notFoundMessage: "Sorry, we couldn't find this page",
  notFoundContact: 'Contact us',
  notFoundGoBack: 'Go back',
  // Home page
  home: {
    'edit-source-code': ' Edit {codeContent} and save to reload.',
    'learn-react': 'Learn React',
  },
  // Getting started page
  'get-started': {
    title: 'Getting started with the React Whiteapp',
    description:
      "If you see this screen, it means you have successfully retrieved <a href='https://apps.bsc.aws.societegenerale.com/gitlab/dex/frontend/react-whiteapp/'> React Whiteapp </a>. So,what is included in this application ?",
    note:
      'Note that the Whiteapp is periodically upgraded to the latest dependencies. Try to keep your application green (try to run <code>yarn upgrade --latest</code> often enough).',
    'issue-title': 'You encounter an issue with this Whiteapp? You have some comments about it?',
    'issue-button': 'Create a support ticket',
    contribute:
      "In case you want to enhance or fix this Whiteapp, you can create a Merge Request on the <a href='https://apps.bsc.aws.societegenerale.com/gitlab/dex/frontend/react-whiteapp'>DEX Gitlab</a>.",
    getStartedIncluded: {
      'get-started-choice-1':
        "<a href='https://sgithub.fr.world.socgen/pages/sgbootstrap/sg-bootstrap-v4/master/demo/'>SG Bootstrap v4</a>: Official Design System (for ITEC &amp; BSC) based on <a href='https://getbootstrap.com/docs/4.3/getting-started/introduction/'>Bootstrap v4</a>",
      'get-started-choice-2': "<a href='https://material.io/tools/icons/?style=baseline'>Material icons</a>",
      'get-started-choice-3':
        "<a href='https://reactstrap.github.io/'>Reactstrap</a>: React implementation of bootstrap basic components",
      'get-started-choice-4':
        "Structural <a href='https://sgithub.fr.world.socgen/DT-Widgets/sgwt-widgets'>SGWidgets</a> : <code>sgwt-account-center</code> &amp; <code>sgwt-mini-footer</code>",
      'get-started-choice-5':
        "<a href='https://developer.sgmarkets.com/resources/sgconnect/toc.html'>SG Connect</a> authentication thanks to <code>@sgwt/connect-core</code> &amp; <code>sgwt-connect</code> widget",
      'get-started-choice-6':
        "<a href='https://developer.sgmarkets.com/resources/sgmonitoring/web-analytics/web-analytics-main.html'>Matomo/Piwik</a> connector: a web analytics solution",
      'get-started-choice-7': "<a href='https://reacttraining.com/react-router/'>React router</a> React",
      'get-started-choice-8':
        "<a href='https://github.com/formatjs/react-intl'>React intl</a>: This library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations.",
      'get-started-choice-9':
        "<a href='https://easy-peasy.now.sh/'>Easy-peasy</a>: It's an react application state management based on Redux but without the boilerplate",
      'get-started-choice-10':
        "<a href=''>Openshift</a> support: Environment variables are externalized inside an <code>env.js</code> for manage differents values between HOMOL &amp; PROD environments despite <code>promote</code> mode",
      'get-started-choice-11':
        "<a href='https://docs.gitlab.com/ee/ci/'>Gitlab-ci.yml</a> template if you choose to host your projet on <a href='https://apps.bsc.aws.societegenerale.com/gitlab/'>Gitlab</a> platform",
    },
  },
  // Unauthorized page
  unauthorized: {
    title: 'OPPSSS!!!! Sorry...',
    description:
      'Sorry, your access is refused due to security reasons of our server and also our sensitive data. Please go back to the previous page to continue browsing.',
    note: 'Status Code: 403',
  },
};
