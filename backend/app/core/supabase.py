from supabase import create_client, Client
from dotenv import load_dotenv
from pathlib import Path
import os


# =========================================================
# PROJECT ROOT
# =========================================================

BASE_DIR = Path(__file__).resolve().parents[2]

# Project root ki .env file
ENV_FILE = BASE_DIR / ".env"


# =========================================================
# LOAD .ENV
# =========================================================

load_dotenv(
    dotenv_path=ENV_FILE,
    override=True
)


# =========================================================
# SUPABASE CREDENTIALS
# =========================================================

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")


# =========================================================
# VALIDATION
# =========================================================

if not SUPABASE_URL:
    raise RuntimeError(
        f"SUPABASE_URL nahi mila. Check karo: {ENV_FILE}"
    )

if not SUPABASE_KEY:
    raise RuntimeError(
        f"SUPABASE_KEY nahi mila. Check karo: {ENV_FILE}"
    )


# URL ko clean karo
SUPABASE_URL = SUPABASE_URL.strip().rstrip("/")


# =========================================================
# DEBUG INFORMATION
# =========================================================

print("=" * 50)
print("SUPABASE CONFIGURATION")
print("=" * 50)
print("ENV FILE:", ENV_FILE)
print("ENV EXISTS:", ENV_FILE.exists())
print("SUPABASE URL:", SUPABASE_URL)
print("SUPABASE KEY FOUND:", "Yes")
print("=" * 50)


# =========================================================
# CREATE SUPABASE CLIENT
# =========================================================

supabase: Client = create_client(
    SUPABASE_URL,
    SUPABASE_KEY
)