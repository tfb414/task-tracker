import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('tasks', (table) => {
    table.integer('amount').nullable().alter();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('tasks', (table) => {
    table.integer('amount').notNullable().alter();
  });
}

