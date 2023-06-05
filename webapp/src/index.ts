import Fastify from 'fastify'

const port : number = Number(process.env.PORT) || 5000;
let numVisits = 0;

const fastify = Fastify({
  logger: true
});

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world', visits : numVisits++  })
});

// Run the server!
fastify.listen({ port, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  } else {
    fastify.log.info(`Web application is listening on ${address}`)
  }
});