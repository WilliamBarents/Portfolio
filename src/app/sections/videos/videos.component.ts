import { Component } from '@angular/core';
import videoJson from './../../../assets/json/videos.json';
import { VideoItem } from 'src/app/core/modals/videos.modal';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
  videos: VideoItem[] = videoJson;
  activeVideoId: string | null = null;

  private embedUrlCache = new Map<string, SafeResourceUrl>();

  constructor(private sanitizer: DomSanitizer) {}

  playVideo(id: string) {
    this.activeVideoId = id;
  }

  stopVideo() {
    this.activeVideoId = null;
  }

  getEmbedUrl(youtubeId: string): SafeResourceUrl {
    if (!this.embedUrlCache.has(youtubeId)) {
      const url = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&loop=0`;
      this.embedUrlCache.set(
        youtubeId,
        this.sanitizer.bypassSecurityTrustResourceUrl(url)
      );
    }
    return this.embedUrlCache.get(youtubeId)!;
  }

  getThumbnail(youtubeId: string): string {
    return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  }
}
