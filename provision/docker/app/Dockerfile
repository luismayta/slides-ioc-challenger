FROM python:3.8.0-slim as build

ENV PACKAGES bash \
    gcc \
    openssl

ENV PYTHONUNBUFFERED=0
ENV PATH=/root/.local/bin:$PATH

COPY Pipfile* /app/

WORKDIR /app

RUN apt-get update -y \
  && apt-get install -y ${PACKAGES} --no-install-recommends \
  && pip install --no-cache-dir --upgrade pip \
# pipenv
  && pip install --no-cache-dir --user pipenv \
  && pipenv install --dev --skip-lock --python="$(which python)"

COPY . .

# App stage
FROM python:3.8.0-slim

ARG stage

LABEL NAME slides-ioc-challenger-app-$stage

COPY --from=build /root/.local/share /root/.local/share
COPY --from=build /root/.local/bin /root/.local/bin
COPY --from=build /root/.local/lib /root/.local/lib
COPY --from=build /app/ /app/

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED=0
ENV PATH=/root/.local/bin:$PATH

WORKDIR /app
