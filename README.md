# Serverless - AWS Node.js Docker

This project has been generated using the `aws-nodejs-docker` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Setup
- Install Serverless framework and other plugins
```shell

$> npm install -g serverless
$> npm install
```
- Install AWS CLI

- Setup a new AWS Profile
```shell
$> vim  ~/.aws/credentials

[unidemo]
aws_access_key_id=access_key_id
aws_secret_access_key=your_secret_access_key
output=json

```
Save and quit `vim`


## Deployment instructions

> **Requirements**: Docker. In order to build images locally and push them to ECR, you need to have Docker installed on your local machine. Please refer to [official documentation](https://docs.docker.com/get-docker/).

In order to deploy your service, run the following command

```shell
sls deploy --aws-profile unidemo
```

## Test your service

After successful deployment, you can test your service remotely by using the following command:

```shell
sls invoke --function home
```

## CD CI: Configure a Github Action


