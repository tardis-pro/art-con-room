# copy the built app to our served directory
FROM nginx:alpine

# Copy the respective nginx configuration files
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf

# build-base will add gcc
RUN apk add --update --no-cache git bash curl make build-base pcre-dev zlib-dev \
    && mkdir ~/brotli && command="nginx -v" && nginxv=$( ${command} 2>&1 ) && nginxlocal=$(echo $nginxv | grep -o '[0-9.]*$') \
    && cd ~/brotli && curl -L "https://nginx.org/download/nginx-$(echo $nginxlocal).tar.gz" -o nginx.tar.gz && tar zxvf nginx.tar.gz && rm nginx.tar.gz \
    && git clone https://github.com/google/ngx_brotli.git && cd ngx_brotli && git submodule update --init \
    && cd ~/brotli/nginx-$(echo $nginxlocal) && ./configure --with-compat --add-dynamic-module=../ngx_brotli && make modules \
    && cp -r ./objs/*.so /usr/lib/nginx/modules/ \
    && rm -rf ~/brotli/ \
    && sed -i '1iload_module modules/ngx_http_brotli_filter_module.so; load_module modules/ngx_http_brotli_static_module.so;' /etc/nginx/nginx.conf

# Expose ports.
EXPOSE 80

# start nginx and keep the process from background and the container from quitting
CMD ["nginx"]
