# Tjat-App 

Detta är en chat-applikation med frontendsäkerhetstillämpningar såsom:

+ JWT autentisering
+ Dom purify - sanitering mot Cross-Site Scripting ( XSS )
+ React Router med skyddade routes - ProtectedRoute
+ Content Security Policy, CSP
+ NPM-paket package-lock, --ignore scripts
+ Kryptering, nyckel- och lösenordshantering. bcrypt klient server
+ Webbstorage (local- & session storage)

## Setup

+ Klona repot i en för syftet avsedd mapp: 
> git clone https://github.com/ewahjelm/tjat-app

+ Initiera verktyget storybook för tillgång till komponentbibliotek med testfunktioner
> npx storybook@latest init --builder vite --type react --skip-install
