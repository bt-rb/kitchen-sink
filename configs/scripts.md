# Scripts

## Ex 1

```json
{
  "name": "bridgetown-snowpack-vscode",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev:frontend": "snowpack build --watch --clean",
    "build:frontend": "snowpack build",
    "prettier:format": "prettier-standard --format",
    "prettier:check": "prettier-standard --check",
    "prettier:lint": "prettier-standard --lint '**/*.{js,css}'",
    "build:src": "bundle exec bridgetown build",
    "dev:src": "bundle exec bridgetown build --watch",
    "clean:src": "bundle exec bridgetown clean",
    "deploy": "yarn clean:src && build:src && build:frontend",
    "start": "concurrently \"yarn dev:src\" \"yarn dev:frontend\""
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.3.1",
    "autoprefixer": "^10.0.2",
    "concurrently": "^5.2.0",
    "postcss": "^8.1.10",
    "postcss-cli": "^8.3.0",
    "prettier-standard": "^16.4.1",
    "snowpack": "^2.17.1",
    "tailwindcss": "^2.0.1"
  }
}
```
