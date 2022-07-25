<div align="center">

<img src="https://user-images.githubusercontent.com/66751642/180676988-fc7bb904-da84-4921-8809-cc02fd0af4e1.gif" height="500" />
<img src="https://user-images.githubusercontent.com/66751642/180675172-0f51e31d-a2e5-4a2c-847c-213650449138.gif" height="500" />

</div>

## Get started Back-end

Use o docker compose para subir o container do postgress:
```
docker-compose up --build -d
```
Crie um arquivo .env e configure as variáveis de ambiente, exemplo abaixo:
```
JWT_SECRET=minha-chave-secreta
JWT_EXPIRATION=2d
```
Agora execute os comandos abaixos:

```
# Rodar todas as migrations
$ npm run migrate

# Instale todas as dependências:
$ npm install

# Para desenvolvimento:
$ npm run start:dev
```
