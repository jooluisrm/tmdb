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

export type Person = {
  id: number;
  name: string;
  original_name: string;
  media_type: string;
  adult: boolean;
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string | null;
};



export type MediaItem =
  | {
    media_type: "movie";
    backdrop_path: string | null;
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string | null;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  | {
    media_type: "tv";
    backdrop_path: string | null;
    id: number;
    name: string;
    original_name: string;
    overview: string;
    poster_path: string | null;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
  }
  | {
    media_type: "person";
    id: number;
    name: string;
    original_name: string;
    adult: boolean;
    popularity: number;
    gender: number;
    known_for_department: string;
    profile_path: string | null;
  };




