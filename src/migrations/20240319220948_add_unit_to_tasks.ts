import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.table('tasks', (table) => {
        table.string('unit');
    });
}
export async function down(knex: Knex): Promise<void> {
    return knex.schema.table('tasks', (table) => {
        table.dropColumn('unit');
    });
}

