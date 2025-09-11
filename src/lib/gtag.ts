export const GA_TRACKING_ID = "G-2PTMZ89MZL"; // <- your GA4 ID

export const pageview = (url: string) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_TRACKING_ID, { page_path: url });
};

export const event = (name: string, params?: Record<string, unknown>) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params ?? {});
};