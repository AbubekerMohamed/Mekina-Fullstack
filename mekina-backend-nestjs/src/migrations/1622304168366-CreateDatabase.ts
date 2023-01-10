import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1622304168366 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('mekina', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('mekina', true);
  }
}
