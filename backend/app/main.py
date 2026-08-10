from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.auth import router as auth_router
from app.api.candidates import router as candidate_router
from app.api.companies import router as company_router
from app.api.contacts import router as contact_router
from app.api.dashboard import router as dashboard_router
from app.api.users import router as user_router
from app.api.analytics import router as analytics_router
from app.api.reports import router as reports_router
from app.api.marketing import router as marketing_router
from app.api.database import router as database_router


app = FastAPI(
    title="SaarthiDB Backend API",
    version="1.0.0"
)


# -----------------------------------------
# CORS CONFIGURATION
# -----------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------------------------
# AUTHENTICATION
# -----------------------------------------

app.include_router(auth_router)


# -----------------------------------------
# MAIN MODULES
# -----------------------------------------

app.include_router(candidate_router)
app.include_router(company_router)
app.include_router(contact_router)
app.include_router(user_router)


# -----------------------------------------
# DASHBOARD
# -----------------------------------------

app.include_router(dashboard_router)


# -----------------------------------------
# ANALYTICS
# -----------------------------------------

app.include_router(analytics_router)


# -----------------------------------------
# REPORTS
# -----------------------------------------

app.include_router(reports_router)


# -----------------------------------------
# MARKETING
# -----------------------------------------

app.include_router(marketing_router)


# -----------------------------------------
# DATABASE
# -----------------------------------------

app.include_router(database_router)


# -----------------------------------------
# HOME
# -----------------------------------------

@app.get("/")
def home():
    return {
        "message": "Welcome to SaarthiDB Backend API 🚀"
    }