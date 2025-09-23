#!/bin/bash
set -e

echo "🎥 Ensuring video file is available..."

# Check if video exists
if [ ! -f "public/videolhc.mp4" ]; then
    echo "📥 Video not found, pulling from Git LFS..."
    git lfs pull
    echo "✅ Video pulled successfully"
else
    echo "✅ Video already exists"
fi

# Verify video file
if [ -f "public/videolhc.mp4" ]; then
    echo "✅ Video file confirmed: $(ls -lh public/videolhc.mp4 | awk '{print $5}')"
else
    echo "❌ Video file still not found after Git LFS pull"
    exit 1
fi
