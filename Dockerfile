FROM registry.gitlab.com/appfollow/devops/dockerfiles/nodejs:12-master as staticbuild

COPY . .

RUN npm i yarn -g --force && \
    cd src && \
    yarn && \
    yarn prod

FROM nginx:1.16.1-alpine
COPY --from=staticbuild /app/styleguide/ /usr/share/nginx/html/
COPY --from=staticbuild /app/ /usr/share/nginx/html
COPY --from=staticbuild /app/robots.txt /usr/share/nginx/html/

ENTRYPOINT [ "nginx", "-g", "daemon off;"]