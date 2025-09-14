# Migração de react-router-dom v5 para v6

## Descrição

Este repositório demonstra exemplos práticos de como migrar aplicações React do `react-router-dom` versão 5 para a versão 6, destacando as principais diferenças, mudanças de sintaxe e melhores práticas. É útil para desenvolvedores que querem atualizar projetos legados aproveitando os recursos mais modernos do React Router.

## Por que migrar para o v6?

- **Rotas mais declarativas e previsíveis**
- **Performance otimizada**
- **Suporte nativo a nested routes**
- **Melhor gerenciamento de parâmetros e buscas**
- **API simplificada**

## Principais Diferenças

| v5                                          | v6                                        |
|----------------------------------------------|-------------------------------------------|
| `<Switch>`                                  | `<Routes>`                                |
| `<Route component={Page} />`                 | `<Route element={<Page />} />`            |
| Uso de `exact`                              | Não é mais necessário `exact`             |
| `useHistory`, `useLocation`, `useParams`    | `useNavigate`, `useLocation`, `useParams` |
| Renderização condicional via render/children | Usa `element`                             |
| Redirect via `<Redirect />`                  | `<Navigate to="/path" />`                 |

## Exemplos de Migração

### Antes (v5)
```jsx
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
<Router>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" render={() => <About />} />
    <Redirect to="/" />
  </Switch>
</Router>
```

### Depois (v6)
```jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
</BrowserRouter>
```

## Como usar este projeto

1. **Clone o repositório:**
    ```bash
git clone https://github.com/fabiocberg/react-router-dom-v5-to-v6.git
cd react-router-dom-v5-to-v6
    ```

2. **Instale as dependências:**
    ```bash
yarn install
# ou
npm install
    ```

3. **Rode o projeto:**
    ```bash
yarn start
# ou
npm start
    ```

4. **Explore os exemplos de código e compare implementações v5 x v6.**

## Outras mudanças importantes

- O hook `useNavigate()` substitui `history.push`/`history.replace`.
- O fallback de rotas agora é feito via `<Route path="*" ... />`.
- Parâmetros e buscas continuam via `useParams` e `useSearchParams`, mas com API revisada.
- Nested routes são declaradas diretamente dentro de `<Route>`.

## Recursos

- [Documentação oficial do React Router](https://reactrouter.com/en/main)
- [Guia de migração v5 para v6](https://reactrouter.com/en/main/start/overview#migrating-from-v5)

## Licença

MIT

---
> Sinta-se livre para abrir uma issue ou PR com exemplos adicionais de migração!