FROM oven/bun:alpine
WORKDIR /app
COPY . /app
RUN bun i
RUN bun run build
EXPOSE 3001
CMD ["bun", "start"]