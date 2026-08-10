from fastapi import APIRouter, Depends, HTTPException
from app.schemas.user import UserCreate
from app.core.supabase import supabase
from app.api.auth import get_current_user
from passlib.context import CryptContext

router = APIRouter(tags=["Users"])

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


@router.get("/users")
def get_users(user=Depends(get_current_user)):
    response = supabase.table("users").select("*").execute()

    return {
        "message": "Users fetched successfully",
        "user": user,
        "data": response.data
    }


@router.post("/users")
def create_user(data: UserCreate, user=Depends(get_current_user)):

    existing = (
        supabase.table("users")
        .select("*")
        .eq("email", data.email)
        .execute()
    )

    if existing.data:
        raise HTTPException(status_code=400, detail="Email already exists")

    hashed_password = pwd_context.hash(data.password)

    response = (
        supabase.table("users")
        .insert({
            "username": data.username,
            "email": data.email,
            "password": hashed_password,
            "role": data.role
        })
        .execute()
    )

    return {
        "message": "User created successfully",
        "created_by": user["email"],
        "data": response.data
    }


@router.get("/users/{user_id}")
def get_user(user_id: int, user=Depends(get_current_user)):

    response = (
        supabase.table("users")
        .select("*")
        .eq("id", user_id)
        .execute()
    )

    if not response.data:
        raise HTTPException(status_code=404, detail="User not found")

    return {
        "message": "User fetched successfully",
        "data": response.data
    }


@router.put("/users/{user_id}")
def update_user(user_id: int, data: UserCreate, user=Depends(get_current_user)):

    hashed_password = pwd_context.hash(data.password)

    response = (
        supabase.table("users")
        .update({
            "username": data.username,
            "email": data.email,
            "password": hashed_password,
            "role": data.role
        })
        .eq("id", user_id)
        .execute()
    )

    return {
        "message": "User updated successfully",
        "data": response.data
    }


@router.delete("/users/{user_id}")
def delete_user(user_id: int, user=Depends(get_current_user)):

    response = (
        supabase.table("users")
        .delete()
        .eq("id", user_id)
        .execute()
    )

    return {
        "message": "User deleted successfully",
        "data": response.data
    }