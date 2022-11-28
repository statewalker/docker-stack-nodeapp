https://www.docker.com/blog/how-to-setup-your-local-node-js-development-environment-using-docker/

## Project Structure

* `docker/` - Docker configurations
  * `dev/` - development configuration
    * `Dockerfile` - Docker file for the development environment
    * `docker-compose.yml` - Docker compose configuration; to launch from the root folder
  * `prod/` - production configuration
    * `Dockerfile` - production Docker file
    * `docker-compose.yml` - Docker compose configuration; to launch from the root folder
  * `traefic/` - Traefic reverse proxy configuration (manages domain names, ceritifcates etc)
    * `docker-compose.yml` - Traefic Docker compose configuration
* `scripts/` - shell/bash scripts 
  * `build.sh` - builds prod Docker image
  * `dev.sh` - starts the dev configuration
  * `kill.sh` - removes all running docker containers 
  * `run.sh` - utility script used by the `build.sh`, `start.sh` and `stop.sh`
     to perform a command on a set of Docker compose configurations
  * `start.sh` - starts prod applications 
  * `stop.sh` - stops prod applications
  * `shell.sh` - connects to the dev container and opens a bash shell 
* `app/` - application folder
  * `src/` - source code for this project
  * `.env.template` - template with default environment variables; this template is copied to the `.env` file
    (if it was not explicity defined)
  * `index.js` - the application entry point
  * `package.json` - node configuration file

## Getting Started

### Development Mode

TLDR:
* `./scripts/dev.sh` - starts dev containers
* `./scripts/shell.sh` - opens a bash shell in the running dev container
* `./scripts/kill.sh` - kills all running containers

To launch the development configuration for the project you should run:
```sh
./scripts/dev.sh
```

This scripts launches the docker containers and the application in dev mode.
Internally it uses the `yarn dev` command in the `package.json` file.
To stop containers you should just exit from this shell. The script will automatically stop the docker containers.

All source files and installed packages are shared with the host.
Internally the docker uses the current user and group IDs so the host machine should have normal read/write access to 
generated/installed files (ex: `node_modules/`, `yarn.lock` etc).


To get access to the running development container you can use the `./scripts/shell.sh` script: 
```sh
./scripts/shell.sh
```

### Production Mode

TLDR:
* `./scripts/build.sh` - builds a prod Docker container
* `./scripts/start.sh` - starts the production container
* `./scripts/stop.sh` - stops the production container
* `./scripts/kill.sh` - kills all running containers


## Environment Variables

When applications started with the `./scripts/dev.sh` (dev mode) or the `./scripts/start.sh` script (in production mode)
then it uses variables defined in the `.env`file.
If there is no such file found in the root directory then it is automatically created from the `.env.template`. 
There are following parameters in this file used by Docker configurations to start applications:

* `CONTEXT_NAME` - default name of the context; this name is used to prefix all services launched by Docker
* `CONTEXT_DIR` - root directory where all data are stored
* `CONTEXT_EMAIL` - default mail used to contact with the administrator of the site
* `MAIN_URL` - the  main URL of the system
* `HTTP_PORT` (default: 80) - the port of the reverse proxy (traefic)
* `HTTPS_PORT` (default: 443) - default port of the secured http connection with the proxy 
* `TRAEFIK_DASHBOARD_HOST` (default: `traefik.localhost`) - URL of the traefic web portal
* `TRAEFIK_DEBUG`(default: false) - flag defining if traefic shows or not debug messages
* `DEV_HOST`- host of the dev service 
* `PROD_HOST`- host name for the production service
