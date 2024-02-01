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
# | /  \ |              /   HID    |   .  | Global  \
# |/    \|             (           |      |           )
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
ENV ZIP_URL https://github.com/hidglobal/ts-jamaltool/raw/main/build.zip

# Install certbot and its dependencies
RUN apt-get update && \
    apt-get install -y unzip curl openssl


# Remove default index html file
RUN rm -rf /usr/share/nginx/html/index.html
# Download and extract the zip file
RUN curl -L ${ZIP_URL} -o /tmp/file.zip && \
    unzip /tmp/file.zip -d /usr/share/nginx/html/ && \
    rm /tmp/file.zip


# Start nginx
CMD ["nginx", "-g", "daemon off;"]
