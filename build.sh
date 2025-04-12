#!/bin/bash

# Run the build
npm run build

# Copy CNAME file to docs directory
cp CNAME docs/

echo "Build completed and CNAME file copied to docs directory."
