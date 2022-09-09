export interface Icollege {
    id: number
    name: string
    position: string
}

export interface Iproject  {
    name: string
    description?: string
    colleges: Icollege[]
    links?: string []
    id: number
}




