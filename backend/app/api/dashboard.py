from fastapi import APIRouter, Depends
from app.core.supabase import supabase
from app.api.auth import get_current_user

router = APIRouter()


@router.get("/dashboard")
def dashboard(user=Depends(get_current_user)):

    # -----------------------------------------
    # FETCH DATA FROM SUPABASE
    # -----------------------------------------

    companies_response = (
        supabase
        .table("companies")
        .select("*")
        .execute()
    )

    contacts_response = (
        supabase
        .table("contacts")
        .select("*")
        .execute()
    )

    candidates_response = (
        supabase
        .table("candidates")
        .select("*")
        .execute()
    )

    users_response = (
        supabase
        .table("users")
        .select("*")
        .execute()
    )


    # -----------------------------------------
    # DATA
    # -----------------------------------------

    companies = companies_response.data or []
    contacts = contacts_response.data or []
    candidates = candidates_response.data or []
    users = users_response.data or []


    # -----------------------------------------
    # TOTAL COMPANIES
    # -----------------------------------------

    total_companies = len(companies)


    # -----------------------------------------
    # ACTIVE PROSPECTS
    #
    # Company status ke basis par count hoga
    # -----------------------------------------

    active_prospects = 0

    for company in companies:

        status = str(company.get("status", "")).lower().strip()

        if status in [
            "active",
            "prospect",
            "active prospect",
            "prospects",
            "active_prospects"
        ]:
            active_prospects += 1


    # -----------------------------------------
    # HIRING COMPANIES
    #
    # Company status ke basis par count hoga
    # -----------------------------------------

    hiring_companies = 0

    for company in companies:

        status = str(company.get("status", "")).lower().strip()

        if status in [
            "hiring",
            "currently hiring",
            "active hiring",
            "hiring company",
            "hiring companies"
        ]:
            hiring_companies += 1


    # -----------------------------------------
    # TOTAL HR CONTACTS
    # -----------------------------------------

    total_contacts = len(contacts)


    # -----------------------------------------
    # TOTAL CANDIDATES
    # -----------------------------------------

    total_candidates = len(candidates)


    # -----------------------------------------
    # TOTAL USERS
    # -----------------------------------------

    total_users = len(users)


    # -----------------------------------------
    # DASHBOARD RESPONSE
    # -----------------------------------------

    return {
        "message": "Dashboard fetched successfully",

        "user": user,

        "dashboard": {

            "total_companies": total_companies,

            "active_prospects": active_prospects,

            "hiring_companies": hiring_companies,

            "total_contacts": total_contacts,

            "total_candidates": total_candidates,

            "total_users": total_users
        }
    }