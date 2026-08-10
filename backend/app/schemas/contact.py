from pydantic import BaseModel


class ContactCreate(BaseModel):
    company_id: int
    name: str
    email: str
    phone: str
    designation: str
    status: str