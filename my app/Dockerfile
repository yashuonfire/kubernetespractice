# ---- build stage ----
FROM node:20-alpine AS build
WORKDIR /app
COPY app/package.json app/tsconfig.json app/jest.config.js ./
COPY app/src ./src
COPY app/test ./test
RUN npm ci && npm run build && npm test

# ---- runtime stage ----
FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /app/package.json ./
RUN npm ci --only=production
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/index.js"]
