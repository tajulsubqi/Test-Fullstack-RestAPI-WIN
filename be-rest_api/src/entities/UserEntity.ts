import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import { ProductEntity } from "./ProductEntity"

@Entity({ name: "Users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  gender: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @OneToMany(() => ProductEntity, (product) => product.user)
  product: ProductEntity[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
