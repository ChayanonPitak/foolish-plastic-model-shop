# FOOLISH-PLASTIC-MODEL-SHOP

Plastic model shop template with mysql intregration.

# Projects in this monorepo

| Folder | Version | Description | 
| ------ | ------- | ----------- |
| [api-server](./api-server) | 1.0.0 | Server that handle api using [Laravel](https://laravel.com/) |
| ~~[api-docs](./api-docs)~~ | ~~1.0.0~~ | ~~API documentation from [api-server](./api-server) usine [OpenAPI Specification](https://swagger.io/specification/) and [swagger-ui](https://github.com/swagger-api/swagger-ui)~~ |
| [frontend](./frontend) | 1.0.0 | Example shop template using [Next.js](https://nextjs.org/) |

# Development

## Prerequistes

Before developing please make sure that you have all of the following installed.

- Latest LTS version of [Node.js](https://nodejs.org/en/) installed.
- Javascript package manager of your choice installed - recommended [pnpm](https://pnpm.io/).
- Latest release version of [PHP](https://www.php.net/) installed.
- Latest version of [Composer](https://getcomposer.org/) installed.

## Setup the repository

1. Clone this project then locate inside the directory
2. Install dependencies

```bash
pnpm install
cd ./api-server
composer install --ignore-platform-reqs
cd ..
```

## Scripts

Run the development application
```bash
pnpm dev
```

# Contribute

Please
