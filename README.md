# Project

This is a simple blockchain project created using Node JS, Express JS and Crypto JS.

# Setting up the project

  - Run **npm install** to install all the dependancies.

# Running the project
  
- Run **npm start** to run the project in node terminal.
- Server will startup on *localhost* port *4112*

# Endpoints

|URL    |Endpoint   |Type   |Description    |
|-------|-----------|-------|---------------|
|http:localhost:4112    |/  |GET    | Root endpoint which gives you the current Blockchain. |
|http:localhost:4112    |/addblock |POST    | Adds a new block in the chain. Example JSON payload: {"amount":"400","sender":"0x44139"}
|http:localhost:4112    |/check |GET    | Check integrity of your blockchain

# Execution Process
- GenesisBlock is created itself on startup.
- Blocks are first mined based on the difficulty you set and then added to the bockchain.

