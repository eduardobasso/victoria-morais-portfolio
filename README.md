# Victoria Morais' portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/64ed6e59-0c8f-463c-860a-8e861a5645ae/deploy-status)](https://app.netlify.com/sites/victoriamorais-portfolio/deploys)

## Setup

### Prerequisites

#### Use NVM to install the correct Node version

```
nvm install 22
nvm use 22
```

#### Install yarn

```
npm install -g yarn
```

### Install dependencies packages

```
yarn
```

#### Add a new package

```
yarn add [-D] <package-name>
```

#### Remove an existing package

```
yarn remove <package-name>
```

### Run development environment

```
yarn dev
```

#### Environment variables

Add `NEXT_PUBLIC_DEFAULT_PASSWORD` to an `.env.local` file.
