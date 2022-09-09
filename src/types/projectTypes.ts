export interface Icollaborator {
    id: number
    name: string
    position: string
}

export interface IlinkData{
    name: string
    link: string
    id: number
}

export interface Iproject  {
    name: string
    description?: string
    collaborators: Icollaborator[]
    links?: IlinkData[]
    id: number
}




