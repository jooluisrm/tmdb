// Tipo para representar um filme
export type Movie = {
    backdrop_path: string | null;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string | null;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

// Tipo para a resposta completa da API
export type TrendingMoviesResponse = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type Person = {
    id: number;
    name: string;
    original_name: string;
    media_type: string;
    adult: boolean;
    popularity: number;
    gender: number;
    known_for_department: string;
    profile_path: string | null; // Pode ser `null` caso a pessoa não tenha uma imagem.
  };
  