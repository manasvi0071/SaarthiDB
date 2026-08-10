from pydantic import BaseModel


class CandidateCreate(BaseModel):
    name: str
    email: str
    phone: str
    skills: str
    experience: str
    status: str
    resume_url: str


class CandidateResponse(CandidateCreate):
    id: int