import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeUpdate,
  BeforeInsert,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { Contact } from "./contact.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telefone: string;

  @Column({})
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}

export { User };
