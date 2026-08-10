from pydantic import BaseModel


class CompanyCreate(BaseModel):

    name: str
    email: str
    phone: str
    company_name: str
    industry: str
    location: str
    website: str
    contact_person: str
    status: str