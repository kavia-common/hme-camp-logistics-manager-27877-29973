#!/bin/bash
cd /home/kavia/workspace/code-generation/hme-camp-logistics-manager-27877-29973/hme_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

