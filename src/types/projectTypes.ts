export interface Icollege {
    name: string
    position: string
}

export interface Iproject  {
    name: string
    description?: string
    colleges: Icollege[]
    links?: string []
}




