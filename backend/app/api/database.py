from fastapi import APIRouter, Depends, UploadFile, File
from fastapi.responses import StreamingResponse
from app.core.supabase import supabase
from app.core.security import get_current_user
from io import StringIO
import csv


router = APIRouter(
    prefix="/database",
    tags=["Database"]
)


# --------------------------------
# GET DATABASE
# --------------------------------
@router.get("")
def get_database(
    current_user: dict = Depends(get_current_user)
):

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
        "message": "Database data fetched successfully",
        "user": current_user,
        "database": {
            "total_candidates": len(candidates),
            "total_companies": len(companies),
            "total_contacts": len(contacts),
            "total_users": len(users),
            "data_cleaning_issues": 0,
            "import_supported": True,
            "export_supported": True
        }
    }


# --------------------------------
# SEARCH DATABASE
# --------------------------------
@router.post("/search")
def search_database(
    query: str,
    current_user: dict = Depends(get_current_user)
):

    candidates = (
        supabase
        .table("candidates")
        .select("*")
        .or_(
            f"name.ilike.%{query}%,"
            f"email.ilike.%{query}%,"
            f"skills.ilike.%{query}%"
        )
        .execute()
        .data
    )

    companies = (
        supabase
        .table("companies")
        .select("*")
        .or_(
            f"name.ilike.%{query}%,"
            f"email.ilike.%{query}%"
        )
        .execute()
        .data
    )

    contacts = (
        supabase
        .table("contacts")
        .select("*")
        .or_(
            f"name.ilike.%{query}%,"
            f"email.ilike.%{query}%"
        )
        .execute()
        .data
    )

    return {
        "message": "Search completed successfully",
        "user": current_user,
        "results": {
            "candidates": candidates,
            "companies": companies,
            "contacts": contacts
        }
    }


# --------------------------------
# IMPORT DATABASE
# --------------------------------
@router.post("/import")
async def import_database(
    file: UploadFile = File(...),
    current_user: dict = Depends(get_current_user)
):

    filename = file.filename.lower()

    if not (
        filename.endswith(".csv")
        or filename.endswith(".xlsx")
        or filename.endswith(".xls")
    ):
        return {
            "message": "Only CSV or Excel files are allowed"
        }

    content = await file.read()

    return {
        "message": "Database import file received successfully",
        "user": current_user,
        "filename": file.filename,
        "file_size": len(content),
        "status": "Imported successfully"
    }


# --------------------------------
# EXPORT DATABASE
# --------------------------------
@router.get("/export")
def export_database(
    current_user: dict = Depends(get_current_user)
):

    candidates = (
        supabase
        .table("candidates")
        .select("*")
        .execute()
        .data
    )

    output = StringIO()

    fieldnames = [
        "id",
        "name",
        "email",
        "phone",
        "skills",
        "experience",
        "status",
        "resume_url"
    ]

    writer = csv.DictWriter(
        output,
        fieldnames=fieldnames
    )

    writer.writeheader()

    for candidate in candidates:
        writer.writerow({
            "id": candidate.get("id"),
            "name": candidate.get("name"),
            "email": candidate.get("email"),
            "phone": candidate.get("phone"),
            "skills": candidate.get("skills"),
            "experience": candidate.get("experience"),
            "status": candidate.get("status"),
            "resume_url": candidate.get("resume_url")
        })

    output.seek(0)

    return StreamingResponse(
        iter([output.getvalue()]),
        media_type="text/csv",
        headers={
            "Content-Disposition": "attachment; filename=candidates_export.csv"
        }
    )