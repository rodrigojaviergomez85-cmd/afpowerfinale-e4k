DELETE FROM public.content_items;
COMMENT ON TABLE public.content_items IS 'DEPRECATED: content now lives in the app code (src/data/content.ts)';