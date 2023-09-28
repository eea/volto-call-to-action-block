# volto-call-to-action-block

[![Releases](https://img.shields.io/github/v/release/eea/volto-call-to-action-block)](https://github.com/eea/volto-call-to-action-block/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-call-to-action-block%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-call-to-action-block/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-call-to-action-block-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-call-to-action-block-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-call-to-action-block-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-call-to-action-block-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-call-to-action-block-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-call-to-action-block-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-call-to-action-block-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-call-to-action-block-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-call-to-action-block%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-call-to-action-block/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-call-to-action-block-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-call-to-action-block-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-call-to-action-block-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-call-to-action-block-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-call-to-action-block-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-call-to-action-block-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-call-to-action-block-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-call-to-action-block-develop)


[Volto](https://github.com/plone/volto) Call to Action Block

## Features

### Demo (Internal link)

![Call to Action](https://github.com/eea/volto-call-to-action-block/raw/master/docs/call-to-action.gif)

### Demo (External link)

![Call to Action](https://github.com/eea/volto-call-to-action-block/raw/master/docs/call-to-action-external.gif)

## Getting started

### Try volto-statistic-block with Docker

      git clone https://github.com/eea/volto-call-to-action-block.git
      cd volto-statistic-block
      make
      make start

Go to http://localhost:3000

### Add volto-call-to-action-block to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-call-to-action-block"
   ],

   "dependencies": {
       "@eeacms/volto-call-to-action-block": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --addon @eeacms/volto-call-to-action-block
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-call-to-action-block/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-call-to-action-block/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-call-to-action-block/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
