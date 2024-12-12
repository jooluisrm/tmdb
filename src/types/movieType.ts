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


  export type MediaItemWithoutType = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title?: string;
    title?: string;
    overview: string;
    poster_path: string | null;
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};


export type MovieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: {
      id: number;
      name: string;
      poster_path: string | null;
      backdrop_path: string | null;
  } | null;
  budget: number;
  genres: {
      id: number;
      name: string;
  }[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
  }[];
  production_countries: {
      iso_3166_1: string;
      name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: {
      english_name: string;
      iso_639_1: string;
      name: string;
  }[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};



