import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('taskTypes', (table) => {
        table.uuid('id').primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('taskName').notNullable();
    })
}
export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('taskTypes');
}

