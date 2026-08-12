import { apiFetch } from "./api";

export async function loginUser(
  email: string,
  password: string
) {
  const response = await apiFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const token =
    typeof response === "string"
      ? response
      : response.access_token || response.token;

  if (!token) {
    throw new Error("Login response did not contain a token");
  }

  localStorage.setItem("access_token", token);

  return response;
}


export function getReports() {
  return apiFetch("/reports");
}

export function getAnalytics() {
  return apiFetch("/analytics");
}

export function getMarketing() {
  return apiFetch("/marketing");
}

export function getUsers() {
  return apiFetch("/users");
}

export function createUser(user: {
  username: string;
  email: string;
  password: string;
  role: string;
}) {
  return apiFetch("/users", {
    method: "POST",
    body: JSON.stringify(user),
  });
}

export function updateUser(
  userId: number,
  user: {
    username: string;
    email: string;
    password: string;
    role: string;
  }
) {
  return apiFetch(`/users/${userId}`, {
    method: "PUT",
    body: JSON.stringify(user),
  });
}

export function deleteUser(userId: number) {
  return apiFetch(`/users/${userId}`, {
    method: "DELETE",
  });
}