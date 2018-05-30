#!/usr/bin/env bash

cd backend/
docker build . -t angular-pwa-backend:latest
cd ..
docker build . -t angular-pwa:latest