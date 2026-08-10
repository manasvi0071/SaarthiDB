from fastapi import APIRouter, Depends
from app.core.supabase import supabase
from app.core.security import get_current_user

router = APIRouter(
    prefix="/reports",
    tags=["Reports"]
)


@router.get("")
def get_reports(current_user: dict = Depends(get_current_user)):

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

    return {
        "message": "Reports fetched successfully",
        "user": current_user,
        "reports": {
            "total_candidates": len(candidates),
            "total_companies": len(companies),
            "total_contacts": len(contacts),
            "total_users": len(users),
            "candidate_report": candidates,
            "company_report": companies,
            "contact_report": contacts
        }
    }