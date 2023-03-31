import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 45 })
  name: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, {
    onDelete: "CASCADE",
  })
  user: User;
}

export { Contact };
