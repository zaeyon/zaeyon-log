
interface reference {
  title: string,
  url: string
}

export interface postList {
    id: number,
    category: string,
    title: string,
    date: string, 
    preview: string, 
    thumbnail: string,
}

export interface post {
    id: number,
    title: string,
    date: string,
    preview: string,
    thumbnail: string,
    reference: reference[],
    content: string
}

export interface reply {
    id: string,
    name: string,
    password: string,
    comment: string,
    postId: number,
    date: string,
    commentId: number,
  }
  
export interface comment {
    id: string,
    name: string,
    password: string,
    comment: string,
    postId: number,
    date: string,
    replys: reply[]
  };
  