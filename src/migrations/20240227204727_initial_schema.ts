import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
  return knex.schema.createTable('tasks', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('person').notNullable();
    table.string('task').notNullable();
    table.timestamp('completed_at').defaultTo(knex.fn.now()).notNullable();
    table.integer('amount').notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tasks');
}

