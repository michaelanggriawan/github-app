/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AppService } from './app.service';
import { ProfileDto } from 'dtos/profile.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getProfile(req: any): Promise<{
        totalVisitor: number;
        visitors: (import("mongoose").Document<unknown, {}, import("../schemas/visitor.schema").VisitorProfileDocument> & import("../schemas/visitor.schema").VisitorProfile & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        login: string;
        name: string;
        bio: string;
        email: string;
        avatar_url: string;
        profile_url: string;
    }>;
    getUser(username: string): Promise<{
        totalVisitor: number;
        visitors: (import("mongoose").Document<unknown, {}, import("../schemas/visitor.schema").VisitorProfileDocument> & import("../schemas/visitor.schema").VisitorProfile & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        login: string;
        name: string;
        bio: string;
        email: string;
        avatar_url: string;
        profile_url: string;
    }>;
    getRepos(username: string): Promise<{
        id: number;
        node_id: string;
        name: string;
        full_name: string;
        owner: {
            name?: string;
            email?: string;
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
            starred_at?: string;
        };
        private: boolean;
        html_url: string;
        description: string;
        fork: boolean;
        url: string;
        archive_url: string;
        assignees_url: string;
        blobs_url: string;
        branches_url: string;
        collaborators_url: string;
        comments_url: string;
        commits_url: string;
        compare_url: string;
        contents_url: string;
        contributors_url: string;
        deployments_url: string;
        downloads_url: string;
        events_url: string;
        forks_url: string;
        git_commits_url: string;
        git_refs_url: string;
        git_tags_url: string;
        git_url?: string;
        issue_comment_url: string;
        issue_events_url: string;
        issues_url: string;
        keys_url: string;
        labels_url: string;
        languages_url: string;
        merges_url: string;
        milestones_url: string;
        notifications_url: string;
        pulls_url: string;
        releases_url: string;
        ssh_url?: string;
        stargazers_url: string;
        statuses_url: string;
        subscribers_url: string;
        subscription_url: string;
        tags_url: string;
        teams_url: string;
        trees_url: string;
        clone_url?: string;
        mirror_url?: string;
        hooks_url: string;
        svn_url?: string;
        homepage?: string;
        language?: string;
        forks_count?: number;
        stargazers_count?: number;
        watchers_count?: number;
        size?: number;
        default_branch?: string;
        open_issues_count?: number;
        is_template?: boolean;
        topics?: string[];
        has_issues?: boolean;
        has_projects?: boolean;
        has_wiki?: boolean;
        has_pages?: boolean;
        has_downloads?: boolean;
        has_discussions?: boolean;
        archived?: boolean;
        disabled?: boolean;
        visibility?: string;
        pushed_at?: string;
        created_at?: string;
        updated_at?: string;
        permissions?: {
            admin?: boolean;
            maintain?: boolean;
            push?: boolean;
            triage?: boolean;
            pull?: boolean;
        };
        role_name?: string;
        temp_clone_token?: string;
        delete_branch_on_merge?: boolean;
        subscribers_count?: number;
        network_count?: number;
        code_of_conduct?: {
            key: string;
            name: string;
            url: string;
            body?: string;
            html_url: string;
        };
        license?: {
            key?: string;
            name?: string;
            spdx_id?: string;
            url?: string;
            node_id?: string;
        };
        forks?: number;
        open_issues?: number;
        watchers?: number;
        allow_forking?: boolean;
        web_commit_signoff_required?: boolean;
        security_and_analysis?: {
            advanced_security?: {
                status?: "enabled" | "disabled";
            };
            dependabot_security_updates?: {
                status?: "enabled" | "disabled";
            };
            secret_scanning?: {
                status?: "enabled" | "disabled";
            };
            secret_scanning_push_protection?: {
                status?: "enabled" | "disabled";
            };
        };
    }[]>;
    updateTotalVisitor(username: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/visitor.schema").VisitorDocument> & import("../schemas/visitor.schema").Visitor & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    insertVisitor(body: ProfileDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/visitor.schema").VisitorProfileDocument> & import("../schemas/visitor.schema").VisitorProfile & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
