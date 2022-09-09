export interface Icollege {
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
    colleges: Icollege[]
    links?: IlinkData[]
    id: number
}




