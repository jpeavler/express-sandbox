API Table

| Action    | Path     | Parameters         | Result                | Description             |
|-----------|----------|--------------------|-----------------------|-------------------------|
| Get       | /TVshows | none               |200 array of tvShows   | Read all TV Shows       |
| Post      | /TVshows |{"Title": STRING,   |200 {created TV show}  | Create a new TV Show    |
| Post      |          |"Seasons": NUMBER,  |                       | and adds an ID          |
| Post      |          |"Actor": STRING}    |                       |                         |
| Put       | /TVshows |{"ID": NUMBER,      |200 {Updated TV show}  | Update an Existing TV   |
| Put       |          |"Title": STRING,    |                       | show in full. If show   |
| Put       |          |"Seasons": NUMBER,  |                       | doesn't exist, create   |
| Put       |          |"Actor": STRING}    |                       | new TV Show             |
| Patch     | /TVshows | same as put, only  |200 {Updated TV show}  | Update an Existing TV   |
| Patch     |          | include ID and     |                       | show in portion.        |
| Patch     |          | data to update     |                       | Won't create new.       |
| Delete    | /TVshows | {"ID": NUMBER}     |200 {msg}              | Delete a TV Show.       |