import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTA5M2IzYmU2ZjQ2NzQxYjE4ODcwYWI5NjY5YjI2MCIsIm5iZiI6MTczMjg4OTM1MS4yNzQsInN1YiI6IjY3NDljYjA3ZjQ1OGZlYTE2MTI4ZDlhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CzJebHL9DPoW1FJGg7QbtsfNdPEyRsGGU23jExD8F-8",
        "Content-Type": "application/json"
    }
});

export const movieTrending = async () => {
    try {
        const response = await api.get(`/trending/movie/day?language=pt-BR`);

        return response.data.results;
    } catch (error) {
        console.error("Erro ao buscar filmes:", error);
    }
}

export const seriesTrending = async () => {
    try {
        const response = await api.get("/trending/tv/day?language=pt-BR");

        return response.data.results;
    } catch (error) {
        console.log("Error ao buscar serie:", error)
    }
}

export const allTrending = async () => {
    try {
        const response = await api.get("/trending/all/day?language=pt-BR");

        return response.data.results;
    } catch (error) {
        console.log("Error ao buscar all:", error)
    }
}

export const peopleTrending = async () => {
    try {
        const response = await api.get("/trending/person/day?language=pt-BR");

        return response.data.results;
    } catch (error) {
        console.log("Error ao buscar person:", error)
    }
}

// Page Filmes

export type Categoria =
    | {
        type: "movie";
        category: "now_playing" | "popular" | "top_rated" | "upcoming";
    }
    | {
        type: "tv";
        category: "airing_today" | "on_the_air" | "popular" | "top_rated";
    };

export const movieOrTv = async (pageId: number, params: Categoria) => {
    const { type, category } = params;
    try {
        const response = await api.get(`/${type}/${category}?language=pt-BR&page=${pageId}`);
        console.log(response.data.results, type);
        return {
            results: response.data.results,
            type
        }
        
    } catch (error) {
        console.log(`Erro ao buscar ${type} ${category}`, error);
    }
}

// search

export const searchMult = async (pageId: number, query: string) => {
    try {
        const response = await api.get(`/search/multi?query=${query}&include_adult=false&language=pt-BR&page=${pageId}`);
        return response.data.results;
    } catch (error) {
        console.log(`Erro ao buscar ${query}: `, error);
    }
}

// carregar banner do filme

export const bannerFilme = async (id: number) => {
    try {
        const response = await api.get(`https://api.themoviedb.org/3/movie/${id}/images`);
        console.log(response.data.posters[0].file_path);
        return response.data.backdrops[0].file_path;

    } catch (error) {
        console.log("Error ao buscar banner:", error)
    }
}

export default api;

