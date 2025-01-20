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
        //console.log(response.data.results, type);
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
        return response.data.backdrops[0].file_path;

    } catch (error) {
        console.log("Error ao buscar banner:", error);
    }
}

// Tem q implementar

// Details filme

export const detailsFilmes = async (id: number) => {
    try {
        const response = await api.get(`movie/${id}?language=pt-BR`);
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error ao buscar details:", error);
    }
}

// elenco filme 

export const creditsFilmes = async (id: number) => {
    try {
        const response = await api.get(`movie/${id}/credits?language=pt-BR`);
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error ao buscar credits:", error);
    }
}

// Recomendado filme

export const recommendationsFilmes = async (id: number, pageId: number) => {
    try {
        const response = await api.get(`movie/${id}/recommendations?language=pt-BR&page=${pageId > 2 ? pageId = 1 : pageId}`);
        //console.log(response.data.results);
        return response.data.results;
    } catch (error) {
        console.log("Error ao buscar recommendations:", error);
    }
}

// Similar filme

export const similarFilmes = async (id: number, pageId: number) => {
    try {
        const response = await api.get(`movie/${id}/similar?language=pt-BR&page=${pageId}`);
        //console.log(response.data);
        return response.data.results;
    } catch (error) {
        console.log("Error ao buscar similar:", error);
    }
}

// video filme 

export const videoFilme = async (id: number) => {
    try {
        const response = await api.get(`movie/${id}/videos?language=pt-BR`);
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error ao buscar video:", error);
    }
}

// Series

// carregar banner da serie

export const bannerSeries = async (id: number) => {
    try {
        const response = await api.get(`https://api.themoviedb.org/3/tv/${id}/images`);
        return response.data.backdrops;

    } catch (error) {
        console.log("Error ao buscar banner:", error);
    }
}

// carregar details series

export const detailsSeries = async (id: number) => {
    try {
        const response = await api.get(`tv/${id}?language=pt-BR`);
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error ao buscar detalhes series");
    }
}

// video serie 

export const videoSerie = async (id: number) => {
    try {
        const response = await api.get(`tv/${id}/videos?language=pt-BR`);
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error ao buscar video:", error);
    }
}

// Recomendado serie

export const recommendationsSerie = async (id: number, pageId: number) => {
    try {
        const response = await api.get(`tv/${id}/recommendations?language=pt-BR&page=${pageId > 2 ? pageId = 1 : pageId}`);
        //console.log(response.data.results);
        return response.data.results;
    } catch (error) {
        console.log("Error ao buscar recommendations:", error);
    }
}

// Similar serie

export const similarSerie = async (id: number, pageId: number) => {
    try {
        const response = await api.get(`tv/${id}/similar?language=pt-BR&page=${pageId}`);
        //console.log(response.data);
        return response.data.results;
    } catch (error) {
        console.log("Error ao buscar similar:", error);
    }
}

// elenco Serie 

export const creditsSerie = async (id: number) => {
    try {
        const response = await api.get(`tv/${id}/credits?language=pt-BR`);
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error ao buscar credits:", error);
    }
}

// Carregar Temporada Serie

export const seasonDetails = async (id: number, numTemp: number) => {
    try {
        const response = await api.get(`tv/${id}/season/${numTemp}?language=pt-BR`);
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error ao buscar details temporada:", error);
    }
}

// Carregar IMG season
export const seasonImagen = async (id: number, numTemp: number) => {
    try {
        const response = await api.get(`tv/${id}/season/${numTemp}/images`);
        //console.log(response.data.posters);
        return response.data.posters;
    } catch (error) {
        console.log("Error ao buscar img temporada:", error);
    }
}

// Carregar Trailer Season

export const videoSeason = async (id: number, numTemp: number) => {
    try {
        const response = await api.get(`tv/${id}/season/${numTemp}/videos?language=en-US`);
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error ao buscar video:", error);
    }
}
export default api;

