from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, EmailStr
from app.core.supabase import supabase
from passlib.context import CryptContext
from jose import jwt
from datetime import datetime, timedelta


# =====================================================
# ROUTER
# =====================================================

router = APIRouter(prefix="/api/auth", tags=["Authentication"])


# =====================================================
# PASSWORD HASHING
# =====================================================

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


# =====================================================
# JWT SETTINGS
# =====================================================

SECRET_KEY = "saarthi_secret_key"
ALGORITHM = "HS256"
TOKEN_EXPIRE_HOURS = 24


# =====================================================
# BEARER TOKEN SECURITY
# =====================================================

security = HTTPBearer()


# =====================================================
# REQUEST MODELS
# =====================================================

class RegisterRequest(BaseModel):
    username: str
    email: EmailStr
    password: str
    role: str = "user"


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


# =====================================================
# REGISTER USER
# =====================================================

@router.post("/register")
def register_user(data: RegisterRequest):

    # Check existing user
    existing = (
        supabase
        .table("users")
        .select("*")
        .eq("email", data.email)
        .execute()
    )

    if existing.data:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    # Hash password
    hashed_password = pwd_context.hash(data.password)

    user_data = {
        "username": data.username,
        "email": data.email,
        "password": hashed_password,
        "role": data.role
    }

    response = (
        supabase
        .table("users")
        .insert(user_data)
        .execute()
    )

    if not response.data:
        raise HTTPException(
            status_code=500,
            detail="Failed to register user"
        )

    user = response.data[0]

    return {
        "message": "User registered successfully",
        "id": user.get("id"),
        "name": user.get("username"),
        "email": user.get("email"),
        "role": user.get("role")
    }


# =====================================================
# LOGIN USER
# =====================================================

@router.post("/login")
def login_user(data: LoginRequest):

    # Find user by email
    response = (
        supabase
        .table("users")
        .select("*")
        .eq("email", data.email)
        .execute()
    )

    if not response.data:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    user = response.data[0]

    # Verify password
    stored_password = user.get("password")

    if not stored_password:
        raise HTTPException(
            status_code=500,
            detail="User password is not configured"
        )

    try:
        password_valid = pwd_context.verify(
            data.password,
            stored_password
        )
    except Exception:
        password_valid = False

    if not password_valid:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    # User information
    user_id = user.get("id")
    username = user.get("username") or user.get("name") or "User"
    email = user.get("email")
    role = user.get("role", "user")

    # JWT payload
    token_data = {
        "sub": email,
        "role": role,
        "exp": datetime.utcnow() + timedelta(hours=TOKEN_EXPIRE_HOURS)
    }

    # Create JWT token
    token = jwt.encode(
        token_data,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    # Return response matching Login.jsx
    return {
        "message": "Login successful",

        "token": token,
        "access_token": token,

        "id": user_id,
        "userId": user_id,

        "name": username,
        "email": email,

        "department": user.get("department", ""),
        "is_admin": role.lower() == "admin",
        "connectionId": "",

        "require2fa": False
    }


# =====================================================
# CONNECTION STATUS
# =====================================================

@router.get("/connection-status")
def connection_status():

    return {
        "connectionStatus": {
            "isLimitReached": False
        }
    }


# =====================================================
# VERIFY TOKEN
# =====================================================

def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security)
):

    token = credentials.credentials

    try:

        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        email = payload.get("sub")
        role = payload.get("role")

        if email is None:
            raise HTTPException(
                status_code=401,
                detail="Invalid token"
            )

        return {
            "email": email,
            "role": role
        }

    except Exception:

        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )