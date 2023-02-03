import * as fastify from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const server: fastify.FastifyInstance = fastify({});

const opts: fastify.RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string',
          },
        },
      },
    },
  },
};

server.get('/ping', opts, async (request, reply) => {
  return { pong: 'it worked!' };
});

server.listen(3000, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`server listening on ${server.server.address().port}`);
});
