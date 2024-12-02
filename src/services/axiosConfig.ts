import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTA5M2IzYmU2ZjQ2NzQxYjE4ODcwYWI5NjY5YjI2MCIsIm5iZiI6MTczMjg4OTM1MS4yNzQsInN1YiI6IjY3NDljYjA3ZjQ1OGZlYTE2MTI4ZDlhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CzJebHL9DPoW1FJGg7QbtsfNdPEyRsGGU23jExD8F-8",
        "Content-Type": "application/json"
    }
});

export const movieTrending = async () => {
    try {
        const response = await api.get("/trending/movie/day?language=pt-BR");
        console.log("Filmes:", response.data.results);
        return response.data.results;
    } catch (error) {
        console.error("Erro ao buscar filmes:", error);
    }
}

export default api;

