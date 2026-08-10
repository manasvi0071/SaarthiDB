class Candidate:
    def __init__(
        self,
        name: str,
        email: str,
        phone: str,
        skills: str,
        experience: str,
        status: str,
        resume_url: str,
    ):
        self.name = name
        self.email = email
        self.phone = phone
        self.skills = skills
        self.experience = experience
        self.status = status
        self.resume_url = resume_url