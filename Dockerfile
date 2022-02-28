FROM public.ecr.aws/lambda/nodejs:14-arm64

COPY package*.json ./
COPY *.js ./

RUN npm install

EXPOSE 3000

# start the app
CMD [ "lambda.handler" ]
