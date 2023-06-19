import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "test",
});

// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//     return;
//   }
//   console.log("Connected to the database!");
// });

app.get("/", (req, res) => {
  res.json("hello this is the backend");
  console.log("im from /");
});

app.get("/books", (req, res) => {
  console.log("im from /books");
  const q = "SELECT * FROM books;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  console.log("im from post /books");
  const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been created.");
  });
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});
