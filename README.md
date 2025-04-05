# Clean Todo App

Um aplicativo simples de lista de tarefas (To-Do List) construído com **React Native** utilizando os princípios da **Clean Architecture**. Este projeto implementa um CRUD básico (Create, Read, Update, Delete) para gerenciar tarefas, com uma estrutura modular e escalável.

## Funcionalidades
- Adicionar uma nova tarefa.
- Listar todas as tarefas.
- Marcar uma tarefa como concluída ou desmarcar.
- Excluir uma tarefa.

## Tecnologias Utilizadas
- **React Native**: Framework para desenvolvimento mobile.
- **React Navigation**: Gerenciamento de navegação.
- **Clean Architecture**: Estrutura de camadas para separação de responsabilidades.
- **JavaScript**: Linguagem principal do projeto.

## Estrutura do Projeto
O projeto segue os princípios da Clean Architecture, dividindo o código em três camadas principais:


src/
├── data/              # Camada de dados (repositórios, modelos, API)
│   ├── api/
│   ├── models/
│   └── repositories/
├── domain/            # Camada de domínio (entidades, casos de uso)
│   ├── entities/
│   └── usecases/
├── presentation/      # Camada de apresentação (UI, componentes, hooks)
│   ├── components/
│   ├── hooks/
│   └── screens/
├── navigation/        # Configuração de navegação
└── App.js             # Ponto de entrada do aplicativo



### Camadas
1. **Data**: Contém a lógica de acesso a dados (simulada com um array em memória).
2. **Domain**: Define as entidades e os casos de uso (lógica de negócios).
3. **Presentation**: Interface do usuário e integração com os casos de uso.

## Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Emulador Android/iOS ou dispositivo físico

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/clean-todo-app.git
   cd clean-todo-app