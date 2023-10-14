export declare class VisitorProfile {
    login: string;
    name: string;
    bio: string;
    email: string;
    avatar_url: string;
    profile_url: string;
}
export declare class Visitor {
    totalVisitor: number;
    visitors: VisitorProfile[];
}
export declare class ProfileResponse {
    statusCode: number;
    success: boolean;
    data: Visitor;
}
