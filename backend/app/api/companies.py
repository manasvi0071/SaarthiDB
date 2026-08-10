from fastapi import APIRouter, Depends
from app.schemas.company import CompanyCreate
from app.core.supabase import supabase
from app.api.auth import get_current_user

router = APIRouter()


@router.post("/companies")
def create_company(
    company: CompanyCreate,
    user=Depends(get_current_user)
):
    data = {
        "name": company.name,
        "email": company.email,
        "phone": company.phone,
        "company_name": company.company_name,
        "industry": company.industry,
        "location": company.location,
        "website": company.website,
        "contact_person": company.contact_person,
        "status": company.status,
    }

    response = (
        supabase
        .table("companies")
        .insert(data)
        .execute()
    )

    return {
        "message": "Company added successfully",
        "created_by": user["email"],
        "data": response.data
    }


@router.get("/companies")
def get_companies(
    user=Depends(get_current_user)
):
    response = (
        supabase
        .table("companies")
        .select("*")
        .execute()
    )

    return {
        "message": "Companies fetched successfully",
        "data": response.data
    }


@router.get("/companies/{company_id}")
def get_company(
    company_id: int,
    user=Depends(get_current_user)
):
    response = (
        supabase
        .table("companies")
        .select("*")
        .eq("id", company_id)
        .execute()
    )

    return {
        "message": "Company fetched successfully",
        "data": response.data
    }


@router.put("/companies/{company_id}")
def update_company(
    company_id: int,
    company: CompanyCreate,
    user=Depends(get_current_user)
):
    data = {
        "name": company.name,
        "email": company.email,
        "phone": company.phone,
        "company_name": company.company_name,
        "industry": company.industry,
        "location": company.location,
        "website": company.website,
        "contact_person": company.contact_person,
        "status": company.status,
    }

    response = (
        supabase
        .table("companies")
        .update(data)
        .eq("id", company_id)
        .execute()
    )

    return {
        "message": "Company updated successfully",
        "data": response.data
    }


@router.delete("/companies/{company_id}")
def delete_company(
    company_id: int,
    user=Depends(get_current_user)
):
    response = (
        supabase
        .table("companies")
        .delete()
        .eq("id", company_id)
        .execute()
    )

    return {
        "message": "Company deleted successfully",
        "data": response.data
    }