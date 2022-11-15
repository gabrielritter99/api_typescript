# api_typescript
API para buscar dados em um intervalo de tempo

Funcionalidades de monitoramento:
- Adicionar dados na tabela;
- Visualizar todos os dados da tabela;
- Visualizar dados em um determinado intervalo de tempo fornecido por um json;

Entidades desenvolvidas na pasta "entities".

Migrations dentro de "database".

Tratar erros (tentativa de middleware) em "errors". 

Lógica implementada: criar serviço (services) => criar controlador (controllers) do serviço => adicionar rota (routes.ts).
