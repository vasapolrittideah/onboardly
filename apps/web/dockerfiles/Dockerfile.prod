FROM oven/bun:1 AS build
WORKDIR /usr/src/app
COPY package.json bun.lockb ./
RUN bun install -g husky typescript
RUN bun install --frozen-lockfile
ENV NODE_ENV=production
COPY . .
RUN bun run build

FROM nginx:stable-alpine AS production
COPY --from=build /usr/src/app/nginx /etc/nginx/conf.d
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
