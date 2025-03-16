const BASE_URL = typeof window === 'undefined' ? 'http://localhost:3000' : '';

export const getPosts = async () => {
    const res = await fetch(`${BASE_URL}/api/blog`);
    const data = await res.json();
    return data.contents;
};
  
export const getPostById = async (id: string) => {
    const res = await fetch(`${BASE_URL}/api/blog/${id}`);
    return res.json();
};
  