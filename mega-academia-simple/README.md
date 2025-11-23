# Mega Academia - Landing Page

Uma landing page moderna e responsiva para a **Mega Academia**, desenvolvida com React, TypeScript, Tailwind CSS e Vite.

## Visão Geral

A Mega Academia é uma academia completa localizada em Taguatinga, Brasília, que oferece diversas modalidades de treinamento e atividades fitness. Esta landing page apresenta os serviços, comodidades, horários e informações de contato da academia.

## Características

A landing page inclui as seguintes seções:

**Navegação**: Menu responsivo com links para as principais seções, adaptado para dispositivos móveis com menu hambúrguer.

**Hero Section**: Apresentação principal com o nome da academia, descrição e chamadas para ação destacadas em laranja.

**Atividades**: Grade de atividades oferecidas pela academia, incluindo musculação, jump, jiu-jitsu, capoeira, muay thai, zumba, bike indoor e outras.

**Comodidades**: Listagem das facilidades disponíveis, como ar condicionado, área infantil, armários, acessibilidade, estacionamento, vestiário, Wi-Fi e equipe qualificada.

**Horários**: Tabela com os horários de funcionamento da academia de segunda a domingo.

**Contato**: Informações de contato (telefone, endereço, redes sociais) e formulário de contato integrado com WhatsApp para facilitar o atendimento.

**Footer**: Rodapé com informações de copyright e mensagem da academia.

## Paleta de Cores

A landing page utiliza uma paleta de cores estratégica que reflete a identidade da Mega Academia:

- **Preto** (#000000): Cor de fundo principal, transmitindo força e profissionalismo
- **Branco** (#FFFFFF): Texto principal e elementos de contraste
- **Laranja** (#FF6B35 / oklch(0.65 0.28 29)): Cor de destaque para elementos interativos e chamadas para ação

## Estrutura do Projeto

```
mega-academia-lp/
├── client/
│   ├── public/
│   │   └── images/
│   │       └── logo.jpg          # Logo da Mega Academia
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          # Página principal da landing page
│   │   ├── App.tsx               # Componente raiz da aplicação
│   │   ├── index.css             # Estilos globais e temas
│   │   └── main.tsx              # Ponto de entrada
│   └── index.html                # Arquivo HTML principal
├── docs/                          # Documentação adicional
├── images/                        # Imagens do projeto
├── todo.md                        # Lista de tarefas do projeto
├── README.md                      # Este arquivo
├── package.json                   # Dependências do projeto
└── vite.config.ts                # Configuração do Vite
```

## Tecnologias Utilizadas

- **React 19**: Framework JavaScript para construção de interfaces
- **TypeScript**: Linguagem tipada para maior segurança e manutenibilidade
- **Tailwind CSS 4**: Framework de CSS utilitário para estilização rápida
- **Vite**: Build tool moderno e rápido
- **Lucide React**: Biblioteca de ícones
- **shadcn/ui**: Componentes de UI reutilizáveis

## Responsividade

A landing page é totalmente responsiva e otimizada para:

- **Mobile**: Dispositivos com tela pequena (até 640px)
- **Tablet**: Dispositivos com tela média (641px a 1024px)
- **Desktop**: Dispositivos com tela grande (acima de 1024px)

O menu de navegação se adapta automaticamente, exibindo um menu hambúrguer em dispositivos móveis.

## Funcionalidades Interativas

**Menu Responsivo**: Menu hambúrguer que aparece em dispositivos móveis para facilitar a navegação.

**Scroll Suave**: Navegação com scroll suave entre as seções da página.

**Formulário de Contato**: Formulário validado que integra com WhatsApp para enviar mensagens diretamente à academia.

**Validação de Formulário**: Validação de campos obrigatórios e formato de email.

## Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm como gerenciador de pacotes

### Instalação

1. Clone ou extraia o projeto:
```bash
cd mega-academia-lp
```

2. Instale as dependências:
```bash
pnpm install
# ou
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
# ou
npm run dev
```

4. Abra o navegador e acesse:
```
http://localhost:3000
```

### Build para Produção

Para gerar a versão otimizada para produção:

```bash
pnpm build
# ou
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

## Informações da Mega Academia

**Localização**: CNB 4 Lote 14 Loja 6, Taguatinga, Brasília - DF

**Telefone**: (61) 3352-5290

**Instagram**: @megafitnessbrasil

**Horários**:
- Segunda a Sexta: 05:00 - 23:00
- Sábado: 08:00 - 14:00
- Domingo: 09:00 - 13:00

## Customização

Para customizar a landing page:

1. **Logo**: Substitua o arquivo `client/public/images/logo.jpg` com seu próprio logo
2. **Cores**: Edite as variáveis CSS em `client/src/index.css`
3. **Conteúdo**: Modifique o texto em `client/src/pages/Home.tsx`
4. **Atividades**: Atualize a lista de atividades no array de atividades
5. **Comodidades**: Atualize a lista de comodidades no array de comodidades
6. **WhatsApp**: Altere o número de telefone na função `handleFormSubmit`

## Performance

A landing page foi otimizada para máxima performance:

- Carregamento rápido com Vite
- CSS otimizado com Tailwind
- Imagens otimizadas
- Lazy loading de componentes
- Sem dependências desnecessárias

## Acessibilidade

A landing page segue as melhores práticas de acessibilidade:

- Contraste adequado entre texto e fundo
- Navegação por teclado funcional
- Semântica HTML apropriada
- Labels em formulários

## Suporte

Para suporte ou dúvidas sobre a landing page, entre em contato com a Mega Academia:

- Telefone: (61) 3352-5290
- Instagram: @megafitnessbrasil

## Licença

Este projeto foi desenvolvido especificamente para a Mega Academia.

---

**Desenvolvido com ❤️ para a Mega Academia**
