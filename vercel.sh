#!/bin/bash
 
branch="$VERCEL_GIT_COMMIT_REF"
CI="true"
 
if [ "$branch" = "main" ]; then
  echo "✅ - Build can proceed"
  echo "Branch: $branch"
  exit 1
elif [ "$branch" = "develop" ]; then
  echo "✅ - Build can proceed"
  echo "Branch: $branch"
  cp .env.development .env.production
  exit 1
else
  echo "✅ - Preview Build"
  echo "Branch: $branch"
  cp .env.development .env.production
  exit 1
fi;