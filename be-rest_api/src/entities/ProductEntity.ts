import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { UserEntity } from "./UserEntity"

@Entity({ name: "Products" })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name: string

  @Column({ nullable: true })
  description: string

  @Column({ nullable: true })
  image: string

  @Column({ nullable: true })
  price: number

  @Column({ nullable: true })
  stock: number

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  posted_at: Date

  @ManyToOne(() => UserEntity, (user) => user.product)
  user: UserEntity
}
