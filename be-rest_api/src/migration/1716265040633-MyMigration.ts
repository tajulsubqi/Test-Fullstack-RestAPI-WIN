import { MigrationInterface, QueryRunner } from "typeorm"

export class MyMigration1716265040633 implements MigrationInterface {
  name = "MyMigration1716265040633"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Products" ("id" SERIAL NOT NULL, "name" character varying, "description" character varying, "image" character varying, "price" integer, "stock" integer, "posted_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_36a07cc432789830e7fb7b58a83" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "Users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "gender" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "Products" ADD CONSTRAINT "FK_c6793aee02b80c52534aef6d546" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Products" DROP CONSTRAINT "FK_c6793aee02b80c52534aef6d546"`,
    )
    await queryRunner.query(`DROP TABLE "Users"`)
    await queryRunner.query(`DROP TABLE "Products"`)
  }
}
