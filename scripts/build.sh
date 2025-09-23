#!/bin/bash
set -e

echo "🔧 Installing Git LFS..."
git lfs install

echo "📥 Pulling Git LFS files..."
git lfs pull

echo "📦 Installing dependencies..."
pnpm install --no-frozen-lockfile

echo "🏗️ Building project..."
pnpm run build

echo "✅ Build completed successfully!"
