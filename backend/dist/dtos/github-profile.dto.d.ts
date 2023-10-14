export declare class VisitorProfile {
    login: string;
    name: string;
    avatar_url: string;
    profile_url: string;
}
export declare class Visitor {
    login: string;
    name: string;
    bio: string;
    email: string;
    avatar_url: string;
    profile_url: string;
    totalVisitor: number;
    visitors: VisitorProfile[];
}
export declare class GithubProfileResponse {
    statusCode: number;
    success: boolean;
    data: Visitor;
}
export declare class ErrorMessageUnauthorized {
    message: string;
}
export declare class UnauthorizedResponse {
    statusCode: number;
    success: boolean;
    errors: ErrorMessageUnauthorized[];
}
export declare class ErrorMessageUserNotExist {
    message: string;
}
export declare class NotFoundResponse {
    statusCode: number;
    success: boolean;
    errors: ErrorMessageUserNotExist[];
}
export declare class Owner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    url: string;
}
export declare class Repository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: Owner;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
}
export declare class RepositoryResponse {
    statusCode: number;
    success: boolean;
    data: Repository[];
}
export declare class UserStats {
    _id: string;
    login: string;
    total: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
export declare class UserStatsResponse {
    statusCode: number;
    success: boolean;
    data: UserStats;
}
