import { MigrationInterface, QueryRunner } from "typeorm";

export class createColumnCreatedAt1679779505675 implements MigrationInterface {
    name = 'createColumnCreatedAt1679779505675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
    }

}
