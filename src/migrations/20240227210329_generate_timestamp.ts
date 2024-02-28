import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('tasks', (table) => {
    table.timestamp('completed_at').defaultTo(knex.fn.now()).notNullable().alter();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('tasks', (table) => {
    table.timestamp('completed_at').nullable().alter(); // Remove default, keep column
  });
}