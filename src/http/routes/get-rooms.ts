import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { db } from '../../db/connection.ts';
import { schema } from '../../db/schema/index.ts';

export const getRoomsRoute: FastifyPluginAsyncZod = async (app) => {
  await app.get('/rooms', async () => {
    const result = await db
      .select({
        id: schema.rooms.id,
        name: schema.rooms.name,
      })
      .from(schema.rooms)
      .orderBy(schema.rooms.createdAt);

    return result;
  });
};
