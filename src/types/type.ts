export interface AuthState {
    user: User | null;
    token: string | null;
}

export interface LoginResponse {
    status: string;
    message: string;
    data: User;
    token: string;
}

export interface User {
    name: string;
    email: string;
    email_Verified_at: string | null;
    created_at: string;
    updated_at: string;
    id: number;
    role_id: number;
    user_id: number | null;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface CreateAppRequest {
    name: string;
    url: string;
}
