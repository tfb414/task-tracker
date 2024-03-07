import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('taskTypes', (table) => {
        table.uuid('id').primary().notNullable();
        table.string('taskName').notNullable();
    })
}
export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('taskTypes');
}

