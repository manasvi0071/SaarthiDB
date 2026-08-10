from fastapi import APIRouter, Depends

from app.core.supabase import supabase
from app.core.security import get_current_user


router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)


@router.get("")
def get_analytics(current_user: dict = Depends(get_current_user)):

    candidates = (
        supabase
        .table("candidates")
        .select("*")
        .execute()
        .data
    )

    companies = (
        supabase
        .table("companies")
        .select("*")
        .execute()
        .data
    )

    contacts = (
        supabase
        .table("contacts")
        .select("*")
        .execute()
        .data
    )

    users = (
        supabase
        .table("users")
        .select("*")
        .execute()
        .data
    )


    shortlisted = len(
        [
            c for c in candidates
            if c.get("status") == "Shortlisted"
        ]
    )


    selected = len(
        [
            c for c in candidates
            if c.get("status") == "Selected"
        ]
    )


    return {
        "message": "Analytics fetched successfully",
        "user": current_user,
        "analytics": {
            "total_candidates": len(candidates),
            "total_companies": len(companies),
            "total_contacts": len(contacts),
            "total_users": len(users),
            "shortlisted_candidates": shortlisted,
            "selected_candidates": selected
        }
    }