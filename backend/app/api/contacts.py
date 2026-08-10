from fastapi import APIRouter, Depends
from app.schemas.contact import ContactCreate
from app.core.supabase import supabase
from app.api.auth import get_current_user

router = APIRouter()


# -----------------------------
# CREATE CONTACT
# -----------------------------
@router.post("/contacts")
def create_contact(
    contact: ContactCreate,
    user=Depends(get_current_user)
):

    data = {
        "company_id": contact.company_id,
        "name": contact.name,
        "email": contact.email,
        "phone": contact.phone,
        "designation": contact.designation,
        "status": contact.status,
    }

    response = (
        supabase
        .table("contacts")
        .insert(data)
        .execute()
    )

    return {
        "message": "Contact added successfully",
        "created_by": user["email"],
        "data": response.data,
    }


# -----------------------------
# GET ALL CONTACTS
# -----------------------------
@router.get("/contacts")
def get_contacts(
    user=Depends(get_current_user)
):

    response = (
        supabase
        .table("contacts")
        .select("*")
        .execute()
    )

    return {
        "message": "Contacts fetched successfully",
        "user": user,
        "data": response.data,
    }


# -----------------------------
# GET SINGLE CONTACT
# -----------------------------
@router.get("/contacts/{contact_id}")
def get_contact(
    contact_id: int,
    user=Depends(get_current_user)
):

    response = (
        supabase
        .table("contacts")
        .select("*")
        .eq("id", contact_id)
        .execute()
    )

    return {
        "message": "Contact fetched successfully",
        "data": response.data,
    }


# -----------------------------
# UPDATE CONTACT
# -----------------------------
@router.put("/contacts/{contact_id}")
def update_contact(
    contact_id: int,
    contact: ContactCreate,
    user=Depends(get_current_user)
):

    data = {
        "company_id": contact.company_id,
        "name": contact.name,
        "email": contact.email,
        "phone": contact.phone,
        "designation": contact.designation,
        "status": contact.status,
    }

    response = (
        supabase
        .table("contacts")
        .update(data)
        .eq("id", contact_id)
        .execute()
    )

    return {
        "message": "Contact updated successfully",
        "data": response.data,
    }


# -----------------------------
# DELETE CONTACT
# -----------------------------
@router.delete("/contacts/{contact_id}")
def delete_contact(
    contact_id: int,
    user=Depends(get_current_user)
):

    response = (
        supabase
        .table("contacts")
        .delete()
        .eq("id", contact_id)
        .execute()
    )

    return {
        "message": "Contact deleted successfully",
        "data": response.data,
    }