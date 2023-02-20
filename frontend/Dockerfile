FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM node:18-alpine AS prod

ARG BASEURL
ENV BASEURL $BASEURL

RUN apk add nginx

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY nginx.conf /etc/nginx/http.d/default.conf

COPY . .


RUN sed -i "s|http://localhost:5000|$BASEURL|" src/api/constant.js

EXPOSE 8080

#CMD ["npm", "run", "dev"]

ENTRYPOINT ["./entrypoint.sh"]
