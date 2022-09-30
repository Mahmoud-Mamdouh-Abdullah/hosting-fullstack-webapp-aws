# ContactsApp

- [contacts app](#ContactsApp)
  - [Description](#description)
    - [Dependencies](#dependencies)
    - [AWS Cloud Setup](#aws-cloud-setup)
  - [Environment Variables](#environment-variables)
  - [Pipeline](#pipeline)
  - [CircleCi](#circleci)
  - [Built With](#built-with)

---

## Description
this is a detailed doc

### Dependencies

```
- Node.js - latest

- npm - latest
- AWS CLI - latest

- AWS EB CLI - latest

- AWS RDS database running Postgres Database.

- AWS S3 bucket for Frontend.

- AWS Elastic Beanstalk for Backend.

```

### AWS Cloud Setup

- RDS - Database Host: database-1.crapprtfui5m.us-east-1.rds.amazonaws.com"
- RDS - Database Port: 5432
- RDS - Database Name: postgres

- S3 Endpoint - Frontend: http://udagram1011.s3-website-us-east-1.amazonaws.com/

- Elastic Beanstalk URL - Backend: http://demoapp-env.eba-nbxmmkxc.us-east-1.elasticbeanstalk.com/

## Environment Variables

Setup the following variables in the cloud environments:
```
- AWS_SECRET_ACCESS_KEY = <IAM Secret Key>
- AWS_ACCESS_KEY_ID     = <IAM Access Key ID>
- AWS_DEFAULT_REGION    = <us-east-1>
- AWS_BUCKET            = <Bucket_Name>
- PORT                  = 8080
- POSTGRES_HOST         = <Database_IP_Address>
- POSTGRES_USERNAME     = <Database_Username>
- POSTGRES_PASSWORD     = <Database_Password>
- POSTGRES_DB           = <Database_Name>
- POSTGRES_PORT         = <Database_Port>
- JWT_SECRET            = <Any_PassPhrase>
```

## Pipeline

From the root of the project:
- `npm run frontend:install`    - To install frontend dependencies.
- `npm run frontend:build`      - To build the React/Frontend.
- `npm run frontend:deploy`     - To deploy the project to S3 using `./client/bin/deploy.sh` deploy script.
- `npm run backend:install`     - To install backend dependencies.
- `npm run backend:build`       - To build the backend
- `npm run backend:deploy`      - To deploy the project to EB using `./server/bin/deploy.sh` deploy script.
## CircleCi

The order of the run jobs:
- Setting Env Variables.
- Install NodeJS.
- Checkout Code & Cloning the Repo.
- Install AWS CLI.
- Install EB CLI
- Configure AWS AccessKeyID.
- Configure AWS Region.
- Frontend:
  - Install dependencies.
  - Build the react app.
  - Deploy the site to AWS S3.
- Backend:
  - Install dependencies.
  - Build the project
  - Deploy the app to AWS Elastic Beanstalk.

## Built With

- [React](https://reactjs.org/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework