import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { createUser1679778430602 } from "./migrations/1679778430602-createUser";
import { createColumnCreatedAt1679779505675 } from "./migrations/1679779505675-createColumnCreatedAt";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  synchronize: false,
  logging: true,
  entities: [User],
  migrations: [createUser1679778430602, createColumnCreatedAt1679779505675],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((error) => {
    console.log(error);
  });

export { AppDataSource };
