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
  * `build.sh` - builds all Docker compose files
  * `kill.sh` - removes all running docker containers 
  * `run.sh` - utility script used by the `build.sh`, `start.sh` and `stop.sh`
     to perform a command on a set of Docker compose configurations
  * `start.sh` - starts all applications 
  * `stop.sh` - stops all applications
  * `shell.sh` - connects to the dev container and opens a bash shell 
* `src/` - source code for this project
* `.env.template` - template with default environment variables; this template is copied to the `.env` file
  (if it was not explicity defined)
* `index.js` - the application entry point
* `package.json` - node configuration file

## Environment Variables

When applications started with the `./scripts/start.sh` script then it checks that there is a `.env`file.
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
