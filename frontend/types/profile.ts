export interface RootProfile {
    statusCode: number
    success: boolean
    data: Profile
  }
  
  export interface Profile {
    login: string
    name: string
    bio: string
    email: any
    avatar_url: string
    profile_url: string
    totalVisitor: number
    visitors: Visitor[]
  }
  
  export interface Visitor {
    _id: string
    login: string
    username: string
    avatar_url: string
    profile_url: string
    createdAt: string
    updatedAt: string
    __v: number
  }