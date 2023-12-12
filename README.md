#Objetivo:
Definir una API para gestionar nuestro equipo Pokémon

#Acciones:
- Identificarnos
- Añadir Pokémon a nuestro equipo
- Eliminar Pokémon de nuestro equipo
- Consultar información de nuestro equipo
- Intercambiar el orden de nuestros Pokémon

#REST Design:
- Añadir Pokémon: POST /team/pokemons
- Consultar Equipo: GET /team
- Eliminar Pokémon: DELETE /ream/pokemons/:id
- Intercambiar el orden de nuestros Pokémon: PUT /team
- Sistema de credenciales