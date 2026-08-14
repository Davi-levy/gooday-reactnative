# Gooday App

Projeto Expo/React Native com as 4 telas: Splash, Welcome (Ótimo dia!), Login e Cadastro.

## Como rodar

1. Extraia este zip em um caminho **sem espaços ou parênteses** no nome
   (ex: `C:\Users\Davi\Projetos\gooday-app`, não `Downloads\files (2)`).

2. Abra o terminal dentro da pasta do projeto e rode:
   ```
   npm install
   ```

3. Depois rode:
   ```
   npx expo install --fix
   ```
   Isso ajusta automaticamente as versões das dependências para as
   compatíveis com o Expo SDK instalado.

4. Inicie o projeto:
   ```
   npx expo start
   ```
   Escaneie o QR code com o app **Expo Go** no celular, ou pressione
   `a` (Android) / `i` (iOS) para abrir num emulador.

## Estrutura

```
gooday-app/
├── App.js                  # ponto de entrada
├── app.json                 # configuração do Expo
├── package.json
├── assets/                  # ícone e splash do app (placeholders verdes)
└── src/
    └── screens/
        ├── AppNavigator.js   # liga as 4 telas
        ├── SplashScreen.js
        ├── WelcomeScreen.js
        ├── LoginScreen.js
        ├── SignUpScreen.js
        ├── theme.js          # cores, espaçamentos, fontes
        └── assets/           # ilustração do cachorro + ícones Google/Facebook
```

## Observação

Os arquivos `assets/icon.png`, `assets/splash.png`, `assets/adaptive-icon.png`
e `assets/favicon.png` são placeholders verdes simples — troque por artes
finais quando for publicar o app.
