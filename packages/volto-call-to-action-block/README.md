# @eeacms/volto-call-to-action-block

[![Releases](https://img.shields.io/github/v/release/eea/volto-call-to-action-block)](https://github.com/eea/volto-call-to-action-block/releases)
[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-call-to-action-block%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-call-to-action-block/job/master/display/redirect)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-call-to-action-block&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-call-to-action-block)

[Volto](https://github.com/plone/volto) Call to Action Block

## Features

### Demo (Internal link)

![Call to Action](https://raw.githubusercontent.com/eea/volto-call-to-action-block/master/docs/call-to-action.gif)

### Demo (External link)

![Call to Action](https://raw.githubusercontent.com/eea/volto-call-to-action-block/master/docs/call-to-action-external.gif)

## Upgrade

### Upgrading to 7.x

> This version requires `Volto 18` or `Volto 19` and Node.js 22.

The block keeps the same API, so upgrading from 6.x on Volto 18 needs no code changes. The release adds Volto 19 support and moves the repository to the Volto 19 layout, where the published package lives in `packages/volto-call-to-action-block`.

#### Breaking changes

- **Node.js 22 or newer is required** (`engines.node >= 22`), 6.x declared no engine.
- **React 18 is required.** The package declares `react` and `react-dom` as `^18.2.0` peers, 6.x declared no peers.
- **The package no longer ships the Jest setup.** `jest-addon.config.js` and `jest.setup.js` were removed in favour of Vitest, so a Volto 18 project that still runs the Jest harness has to keep its own copy.

## Requirements

### Backend

- [Plone](https://plone.org/download)
- [plone.restapi](https://pypi.org/project/plone.restapi/)

### Frontend

- Node.js: `>=22.0.0`

## Installation

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "dependencies": {
       "@eeacms/volto-call-to-action-block": "*"
   }
   ```

   and `volto.config.js`:

   ```JavaScript
   const addons = ['@eeacms/volto-call-to-action-block'];
   ```

* If not, create one with Cookieplone, as recommended by the official Plone documentation for Volto 18+:

   ```
   uvx cookieplone project
   cd project-title
   ```

1. Install or update dependencies, then start the project:

   ```
   make install
   ```

   For a Cookieplone project, start the backend and frontend in separate terminals:

   ```
   make backend-start
   make frontend-start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## License

See [LICENSE.md](LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
