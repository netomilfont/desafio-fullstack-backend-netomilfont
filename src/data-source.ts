import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { createUser1679778430602 } from "./migrations/1679778430602-createUser";
import { createColumnCreatedAt1679779505675 } from "./migrations/1679779505675-createColumnCreatedAt";
import { createColumnCreatedAt1679789035842 } from "./migrations/1679789035842-createColumnCreatedAt";
import { Contact } from "./entities/contact.entity";
import { createContact1679867205368 } from "./migrations/1679867205368-createContact";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  synchronize: false,
  logging: true,
  entities: [User, Contact],
  migrations: [
    createUser1679778430602,
    createColumnCreatedAt1679779505675,
    createColumnCreatedAt1679789035842,
    createContact1679867205368,
  ],
});

export default AppDataSource;
