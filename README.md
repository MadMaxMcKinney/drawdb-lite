# drawdb-lite

<h3 align="center"><img width="700" style="border-radius:5px;" alt="demo" src="drawdb.png"></h3>

This is a fork of [DrawDB](https://github.com/drawdb-io/drawdb), a web-based database entity relationship (DBER) editor. This fork trims down unnecessary features for a lighter experience meant for self-hosting.

## Whats Changed

- Editor is now the root route (`/`)
- Removed sharing functionality, as self-hosting implies no need for it (normal exporting/saving/importing still works)
- Removed other routes such as landing page, and templates (templates still can be used in the editor)

## Intention

This project is intended for users who want to self-host a lightweight/focused version of DrawDB without the extra features that are not necessary for personal use or self-hosting (like the marketing landing page). It allows users to create and manage database entity relationship diagrams locally or on their own servers.

The majority of the changes/removals still keep the source code intact for easy merging of future updates from the main DrawDB repository. 

Additional features may be added in the future to enhance the self-hosting experience, or just general editor improvements, and where possible these features will be contributed back to the main DrawDB project.

## Usage

You can use this project by cloning the repository and running it locally or deploying it to a web server. To simplify production deployment, a Dockerfile is included and has been published to [Docker Hub](https://hub.docker.com/r/madmaxmckinney/drawdb-lite) as `madmaxmckinney/drawdb-lite` for easy use. Simply run the docker image and map the ports as needed.

## Development

### Local Development

```bash
npm install
npm run dev
```

### Build

```bash
npm install
npm run build
```

### Docker Build

```bash
docker build -t drawdb .
docker run -p 3000:80 drawdb
```
