const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Servidor em execução na porta: ${PORT}`));
