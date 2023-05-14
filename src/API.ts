  import { Book } from "./types/book";

  export const API_URL = 'https://www.googleapis.com/books/v1';
  export const API_KEY = ''
  
  export const searchBooks = async (query: string, perPage: number, page: number): Promise<Book[]> => {
    const startIndex = (page - 1) * perPage;
    const response = await fetch(`${API_URL}/volumes?q=${query}&key=${API_KEY}&startIndex=${startIndex}&maxResults=${perPage}`);
    const data = await response.json();
  
    if (!data.items) {
      return [];
    }
  
    return data.items.map((item: any) => {
      const authors = item.volumeInfo.authors || [];
      return {
        id: item.id,
        title: item.volumeInfo.title,
        authors,
        description: item.volumeInfo.description || '',
        thumbnail: item.volumeInfo.imageLinks?.thumbnail || '',
        isWishList: false,
      };
    });
  };
  