import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1716205299325 implements MigrationInterface {
    name = 'MyMigration1716205299325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "gender" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying, "description" character varying, "image" character varying, "price" integer, "stock" integer, "posted_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_36a07cc432789830e7fb7b58a83" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Products"`);
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
