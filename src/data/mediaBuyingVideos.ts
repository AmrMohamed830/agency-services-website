export interface MediaBuyingVideo {
  id: string;
  videoUrl: string;
  thumbnailUrl?: string;
  label?: string; // Optional internal label
}

/**
 * Helper to get the preview thumbnail for any video.
 * If video is hosted on Cloudinary, it automatically generates a snapshot image from the first frame (.jpg with so_0)
 * If custom thumbnail is provided, it uses it. Otherwise uses a default fallback.
 */
export function getVideoThumbnail(videoUrl: string, customThumbnail?: string): string {
  if (customThumbnail) return customThumbnail;

  // Cloudinary auto-thumbnail generation from video URL
  if (videoUrl.includes("cloudinary.com")) {
    if (videoUrl.includes("/video/upload/")) {
      return videoUrl.replace("/video/upload/", "/video/upload/so_0/").replace(/\.(mp4|mov|webm|mkv)$/i, ".jpg");
    }
    return videoUrl.replace(/\.(mp4|mov|webm|mkv)$/i, ".jpg");
  }

  // Fallback to local campaign visual
  return "/images/media/WhatsApp Image 2026-10-12 at 5.29.46 PM.jpeg";
}

/**
 * Real Media Buying Campaign Videos for Smart Media clients (11 Videos).
 */
export const mediaBuyingVideos: MediaBuyingVideo[] = [
  {
    id: "campaign-video-1",
    label: "Campaign Video 01",
    videoUrl: "https://res.cloudinary.com/dfeisclog/video/upload/v1792509826/WhatsApp_Video_2026-10-12_at_2.18.25_PM_kdke8o.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dfeisclog/video/upload/so_0/v1792509826/WhatsApp_Video_2026-10-12_at_2.18.25_PM_kdke8o.jpg",
  },
  {
    id: "campaign-video-2",
    label: "Campaign Video 02",
    videoUrl: "https://res.cloudinary.com/dfeisclog/video/upload/v1792511839/WhatsApp_Video_2026-10-12_at_2.25.44_PM_dgfds5.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dfeisclog/video/upload/so_0/v1792511839/WhatsApp_Video_2026-10-12_at_2.25.44_PM_dgfds5.jpg",
  },
  {
    id: "campaign-video-3",
    label: "Campaign Video 03",
    videoUrl: "https://res.cloudinary.com/dfeisclog/video/upload/v1792511912/WhatsApp_Video_2026-10-12_at_2.20.40_PM_i7rwil.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dfeisclog/video/upload/so_0/v1792511912/WhatsApp_Video_2026-10-12_at_2.20.40_PM_i7rwil.jpg",
  },
  {
    id: "campaign-video-4",
    label: "Campaign Video 04",
    videoUrl: "https://res.cloudinary.com/dfeisclog/video/upload/v1792511938/WhatsApp_Video_2026-10-12_at_2.25.45_PM_icsicb.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dfeisclog/video/upload/so_0/v1792511938/WhatsApp_Video_2026-10-12_at_2.25.45_PM_icsicb.jpg",
  },
  {
    id: "campaign-video-5",
    label: "Campaign Video 05",
    videoUrl: "https://res.cloudinary.com/dfeisclog/video/upload/v1792511969/WhatsApp_Video_2026-10-12_at_2.25.43_PM_3_gbqfhg.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dfeisclog/video/upload/so_0/v1792511969/WhatsApp_Video_2026-10-12_at_2.25.43_PM_3_gbqfhg.jpg",
  },
  {
    id: "campaign-video-6",
    label: "Campaign Video 06",
    videoUrl: "https://res.cloudinary.com/dfeisclog/video/upload/v1792511959/WhatsApp_Video_2026-10-12_at_2.25.43_PM_2_yuhdbx.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dfeisclog/video/upload/so_0/v1792511959/WhatsApp_Video_2026-10-12_at_2.25.43_PM_2_yuhdbx.jpg",
  },
  {
    id: "campaign-video-7",
    label: "Campaign Video 07",
    videoUrl: "https://res.cloudinary.com/dfeisclog/video/upload/v1792511995/WhatsApp_Video_2026-10-12_at_2.25.43_PM_fuoyib.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dfeisclog/video/upload/so_0/v1792511995/WhatsApp_Video_2026-10-12_at_2.25.43_PM_fuoyib.jpg",
  },
  {
    id: "campaign-video-8",
    label: "Campaign Video 08",
    videoUrl: "https://res.cloudinary.com/dfeisclog/video/upload/v1792512018/WhatsApp_Video_2026-10-12_at_2.25.44_PM_1_akryjo.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dfeisclog/video/upload/so_0/v1792512018/WhatsApp_Video_2026-10-12_at_2.25.44_PM_1_akryjo.jpg",
  },
  {
    id: "campaign-video-9",
    label: "Campaign Video 09",
    videoUrl: "https://res.cloudinary.com/dfeisclog/video/upload/v1792511976/WhatsApp_Video_2026-10-12_at_2.25.43_PM_1_yaonuh.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dfeisclog/video/upload/so_0/v1792511976/WhatsApp_Video_2026-10-12_at_2.25.43_PM_1_yaonuh.jpg",
  },
  {
    id: "campaign-video-10",
    label: "Campaign Video 10",
    videoUrl: "https://res.cloudinary.com/dfeisclog/video/upload/v1792511986/WhatsApp_Video_2026-10-12_at_2.25.44_PM_2_zpz5gw.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dfeisclog/video/upload/so_0/v1792511986/WhatsApp_Video_2026-10-12_at_2.25.44_PM_2_zpz5gw.jpg",
  },
  {
    id: "campaign-video-11",
    label: "Campaign Video 11",
    videoUrl: "https://res.cloudinary.com/dfeisclog/video/upload/v1792511950/WhatsApp_Video_2026-10-12_at_2.21.47_PM_1_hqoziu.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dfeisclog/video/upload/so_0/v1792511950/WhatsApp_Video_2026-10-12_at_2.21.47_PM_1_hqoziu.jpg",
  },
];
