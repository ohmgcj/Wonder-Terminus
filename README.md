# Wonder Terminus

App mobile que resolve o puzzle dos símbolos do mapa **Terminus**, no modo Zombies de *Call of Duty: Black Ops 6*. Você toca nos três símbolos que encontrou no mapa e o app devolve o código na hora, sem fazer conta de cabeça enquanto os zumbis chegam.

<p align="center">
  <img src="docs/demo.gif" alt="Demonstração do Wonder Terminus" width="280" />
</p>

## Como funciona

1. Toque em **X**, **Y** e **Z** e escolha o símbolo que viu no jogo.
2. Com os três escolhidos, o app mostra os três números do código.

As fórmulas ficam isoladas em funções puras, em [`functions/equations.ts`](functions/equations.ts), separadas da interface:

| Resultado | Fórmula |
|---|---|
| 1º número | `2X + 11` |
| 2º número | `(2Z + Y) − 5` |
| 3º número | `(Y + Z) − X` |

## Stack

- React Native + Expo (SDK 51)
- Expo Router (navegação por arquivos)
- TypeScript

## Rodando localmente

```bash
npm install
npx expo start
```

Abra no celular com o app **Expo Go** (lendo o QR code) ou num emulador Android/iOS.

## Próximos passos

- [ ] Testes das fórmulas com Jest
- [ ] Gerar APK para download

---

Feito por [Caio Alves Godoy](https://caiogodoy.dev) · [LinkedIn](https://www.linkedin.com/in/caio-alves-636157194/)
