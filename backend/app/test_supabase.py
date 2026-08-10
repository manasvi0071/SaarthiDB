from app.core.supabase import supabase

try:
    response = supabase.table("test").select("*").execute()
    print("Supabase Connected Successfully ✅")
    print(response)

except Exception as e:
    print("Connection Failed ❌")
    print(e)