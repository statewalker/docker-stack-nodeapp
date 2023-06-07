import Fastify from "fastify";
import FastifySwagger from "@fastify/swagger";

const port: number = Number(process.env.PORT) || 5000;
let numVisits = 0;

Promise.resolve().then(main).catch(console.error);

async function main() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(FastifySwagger, {
    swagger: {
      info: {
        title: "Test swagger",
        description: "Testing the Fastify swagger API",
        version: "0.1.0",
      },
      externalDocs: {
        url: "https://swagger.io",
        description: "Find more info here",
      },
      host: "localhost",
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
      tags: [
        { name: "user", description: "User related end-points" },
        { name: "code", description: "Code related end-points" },
      ],
      definitions: {
        User: {
          type: "object",
          required: ["id", "email"],
          properties: {
            id: { type: "string", format: "uuid" },
            firstName: { type: "string" },
            lastName: { type: "string" },
            email: { type: "string", format: "email" },
          },
        },
      },
      securityDefinitions: {
        apiKey: {
          type: "apiKey",
          name: "apiKey",
          in: "header",
        },
      },
    },
  });

  fastify.get('/', {
    schema: {
      operationId: 'root-endpoint',
      response: {
        200: {
          description: 'Expected Response',
          type: 'object',
          properties: {
            hello: {type: 'string' },
            visits: { type : 'number'}
          }
        }
      }
    },
    config: {
      swagger: {
        exposeHeadRoute: true,
      }
    }
  }, (req, reply) => {
    reply.send({ hello: 'world', visits : numVisits++  })
  })

  await fastify.ready();
  fastify.swagger();

  // Run the server!
  fastify.listen({ port, host: '0.0.0.0' }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    } else {
      fastify.log.info(`Web application is listening on ${address}`)
    }
  });
}
