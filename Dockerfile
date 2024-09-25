FROM node:22.9.0-bookworm-slim@sha256:903eaf1ae555002624d07066b7ce506dc2fb67b6da3121255b40ff4dc8e7e1b8
RUN unlink /usr/local/bin/npm \
    && apt-get update && apt-get --no-install-recommends install -y \
        ca-certificates \
        curl \
        git \
        gnupg2 \
        openssh-client \
        procps \
        sudo \
    && deluser --remove-home node
ARG USERNAME=developer
ARG USER_UID=1000
ARG USER_GID=$USER_UID
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID --create-home $USERNAME --shell /bin/bash \
    && echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME \
    && mkdir -p /home/$USERNAME/.docker /home/$USERNAME/.cache/JetBrains $YARN_CACHE_FOLDER $PULUMI_HOME \
    && chown -R $USERNAME:$USERNAME /home/$USERNAME
USER $USERNAME
RUN git config --global commit.gpgsign true
