import "./config/envConfig";
import express from "express";
import bodyParser from "body-parser";
import {
  Organizations,
  TypesOfOrganizations,
  Agreements,
  TypesOfAgreements,
  TypesOfDeliveries,
  Nomenclatures,
  GroupsNomenclatures,
  Positions,
  Contacts,
  Phones
} from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const port = process.env.EXPRESS_LISTEN_PORT || 3001;

app.use("/api/organizations", Organizations);
app.use("/api/type-of-organizations", TypesOfOrganizations);
app.use("/api/agreements", Agreements);
app.use("/api/type-of-agreements", TypesOfAgreements);
app.use("/api/type-of-deliveries", TypesOfDeliveries);
app.use("/api/nomenclatures", Nomenclatures);
app.use("/api/group-nomenclatures", GroupsNomenclatures);
app.use("/api/positions", Positions);
app.use("/api/contacts", Contacts);
app.use("/api/phones", Phones);

app.use("*", (req, res) =>
  res.status(200).send({
    message: "Добро пожаловать в API Вкусная жизнь."
  })
);

app.listen(port, () => {
  console.info(`Сервер запущен на порту: ${port}`);
});

export default app;
