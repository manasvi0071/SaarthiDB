from fastapi import APIRouter, Depends
from app.core.supabase import supabase
from app.core.security import get_current_user

router = APIRouter(
    prefix="/marketing",
    tags=["Marketing"]
)


@router.get("")
def get_marketing(current_user: dict = Depends(get_current_user)):

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

    return {
        "message": "Marketing data fetched successfully",
        "user": current_user,
        "marketing": {
            "total_campaigns": len(companies),
            "target_companies": len(companies),
            "target_contacts": len(contacts),
            "target_candidates": len(candidates),
            "campaign_status": "Active"
        }
    }