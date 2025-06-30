#!/usr/bin/env python3
import subprocess
import os

if __name__ == "__main__":
    port = os.environ.get("PORT", "8000")
    subprocess.run([
        "uvicorn", 
        "api:app", 
        "--host", "0.0.0.0", 
        "--port", port
    ])