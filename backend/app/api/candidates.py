from fastapi import APIRouter, Depends
from app.schemas.candidate import CandidateCreate
from app.core.supabase import supabase
from app.api.auth import get_current_user


router = APIRouter()



# -----------------------------
# CREATE CANDIDATE
# -----------------------------
@router.post("/candidates")
def create_candidate(
    candidate: CandidateCreate,
    user = Depends(get_current_user)
):

    data = {
        "name": candidate.name,
        "email": candidate.email,
        "phone": candidate.phone,
        "skills": candidate.skills,
        "experience": candidate.experience,
        "status": candidate.status,
        "resume_url": candidate.resume_url,
    }


    response = (
        supabase
        .table("candidates")
        .insert(data)
        .execute()
    )


    return {
        "message": "Candidate added successfully",
        "created_by": user["email"],
        "data": response.data,
    }





# -----------------------------
# GET ALL CANDIDATES
# -----------------------------
@router.get("/candidates")
def get_candidates(
    user = Depends(get_current_user)
):

    response = (
        supabase
        .table("candidates")
        .select("*")
        .execute()
    )


    return {
        "message": "Candidates fetched successfully",
        "user": user,
        "data": response.data,
    }





# -----------------------------
# GET SINGLE CANDIDATE
# -----------------------------
@router.get("/candidates/{candidate_id}")
def get_candidate(
    candidate_id: int,
    user = Depends(get_current_user)
):

    response = (
        supabase
        .table("candidates")
        .select("*")
        .eq("id", candidate_id)
        .execute()
    )


    return {
        "message": "Candidate fetched successfully",
        "data": response.data,
    }





# -----------------------------
# UPDATE CANDIDATE
# -----------------------------
@router.put("/candidates/{candidate_id}")
def update_candidate(
    candidate_id: int,
    candidate: CandidateCreate,
    user = Depends(get_current_user)
):

    data = {
        "name": candidate.name,
        "email": candidate.email,
        "phone": candidate.phone,
        "skills": candidate.skills,
        "experience": candidate.experience,
        "status": candidate.status,
        "resume_url": candidate.resume_url,
    }


    response = (
        supabase
        .table("candidates")
        .update(data)
        .eq("id", candidate_id)
        .execute()
    )


    return {
        "message": "Candidate updated successfully",
        "data": response.data,
    }





# -----------------------------
# DELETE CANDIDATE
# -----------------------------
@router.delete("/candidates/{candidate_id}")
def delete_candidate(
    candidate_id: int,
    user = Depends(get_current_user)
):

    response = (
        supabase
        .table("candidates")
        .delete()
        .eq("id", candidate_id)
        .execute()
    )


    return {
        "message": "Candidate deleted successfully",
        "data": response.data,
    }