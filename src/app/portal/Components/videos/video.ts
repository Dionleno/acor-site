import { SafeResourceUrl } from "@angular/platform-browser";
export interface Video {
  titulo: string;
  id: number;
  descricao: string;
  link: string;
  thumbnail: string;
  active?: boolean;
}
export interface ResultData {
  data: Video[];
}
export interface VideoView {
  titulo: string;
  id: number;
  descricao: string;
  link: string;
  linkCurrent?: SafeResourceUrl;
  thumbnail: string;
}
