#!/bin/bash
# Double-click this file in Finder to preview the site locally.
# It serves the folder over HTTP (so the Projects and Recycle Bin windows work)
# and opens it in your browser. Close the Terminal window to stop it.

cd "$(dirname "$0")" || exit 1

PORT=4173
while lsof -i ":$PORT" >/dev/null 2>&1; do
    PORT=$((PORT + 1))
done

echo "Serving $(pwd)"
echo "  http://localhost:$PORT"
echo "Press Ctrl+C to stop."

(sleep 1 && open "http://localhost:$PORT") &

exec python3 -m http.server "$PORT"
