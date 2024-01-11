const validateFieldTitle = (req, res, next) => {
   const { body } = req;

   if (body.title === undefined) {
      return res.status(400).json({ message: "Título é obrigatório!" });
   }

   if (body.title === "") {
      return res.status(400).json({ message: "Título é obrigatório!" });
   }

   next();
};

const validateFieldStatus = (req, res, next) => {
   const { body } = req;

   if (body.status === undefined) {
      return res.status(400).json({ message: "Status é obrigatório!" });
   }

   if (body.status === "") {
      return res.status(400).json({ message: "Status é obrigatório!" });
   }

   next();
};

module.exports = {
   validateFieldStatus,
   validateFieldTitle,
};
