#  /\/\/\                            /  \
# | \  / |                         /      \
# |  \/  |                       /          \
# |  /\  |----------------------|     /\     |
# | /  \ |                      |    /  \    |
# |/    \|                      |   /    \   |
# |\    /|                      |  | (  ) |  |
# | \  / |                      |  | (  ) |  |
# |  \/  |                 /\   |  |      |  |   /\
# |  /\  |                /  \  |  |      |  |  /  \
# | /  \ |               |----| |  |      |  | |----|
# |/    \|---------------|    | | /|   .  |\ | |    |
# |\    /|               |    | /  |   .  |  \ |    |
# | \  / |               |    /    |   .  |    \    |
# |  \/  |               |  /      |   .  |      \  |
# |  /\  |---------------|/        |   .  |        \|
# | /  \ |              /   HID    |   .  | Global   \
# |/    \|              (          |      |           )
# |/\/\/\|               |    | |--|      |--| |    |
# ------------------------/  \-----/  \/  \-----/  \--------
#                         \\//     \\//\\//     \\//
#                          \/       \/  \/       \/
# Use the official nginx image as the base image
FROM nginx:latest

# Set the maintainer label
LABEL maintainer="Mohamed Jamal - mohamed.jamal@hidglobal.com"

# Define build arguments for domain and email
ARG DOMAIN
ARG EMAIL

# Set default values for build arguments
ARG DEFAULT_DOMAIN=localhost
ARG DEFAULT_EMAIL=admin@localhost

# Set environment variables for configuration
ENV DOMAIN=${DOMAIN:-$DEFAULT_DOMAIN}
ENV EMAIL=${EMAIL:-$DEFAULT_EMAIL}
ENV ZIP_URL http://${DOMAIN}/file.zip

# Install certbot and its dependencies
RUN apt-get update && \
    apt-get install -y certbot

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Create a directory for the public files
RUN mkdir -p /usr/share/nginx/html/${DOMAIN}

# Download and extract the zip file
RUN curl -L ${ZIP_URL} -o /tmp/file.zip && \
    unzip /tmp/file.zip -d /usr/share/nginx/html/${DOMAIN} && \
    rm /tmp/file.zip

# Generate a certificate for the domain
RUN if [ -n "$DOMAIN" ] && [ -n "$EMAIL" ]; then \
        apt-get install -y certbot && \
        certbot certonly --nginx -d ${DOMAIN} --non-interactive --agree-tos -m ${EMAIL}; \
    else \
        if [ ! -f "/etc/nginx/ssl/nginx-selfsigned.crt" ] || [ ! -f "/etc/nginx/ssl/nginx-selfsigned.key" ]; then \
            openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
            -keyout /etc/nginx/ssl/nginx-selfsigned.key \
            -out /etc/nginx/ssl/nginx-selfsigned.crt \
            -subj "/C=US/ST=State/L=City/O=Organization/CN=${DOMAIN}/emailAddress=${EMAIL}"; \
        fi; \
        RUN echo 'please update your nginx config to use this certificate: /etc/nginx/ssl/nginx-selfsigned.crt \n and Key file: /etc/nginx/ssl/nginx-selfsigned.key' \
    fi    

# Expose ports 80 and 443
EXPOSE 80
EXPOSE 443

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
