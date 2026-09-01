-- ============================================================
-- V1: Tabla de caché de medios de Instagram para la galería
-- ============================================================
-- Los datos se sincronizan semanalmente (cada lunes) desde
-- la Instagram Graph API y se sirven desde esta tabla para
-- evitar dependencia en tiempo real de Instagram.
-- ============================================================

CREATE TABLE gallery_media (
    id              VARCHAR(50)     PRIMARY KEY,
    media_type      VARCHAR(20)     NOT NULL,
    media_url       TEXT            NOT NULL,
    thumbnail_url   TEXT,
    permalink       VARCHAR(500)    NOT NULL,
    caption         TEXT,
    ig_timestamp    TIMESTAMP WITH TIME ZONE NOT NULL,
    like_count      INTEGER         DEFAULT 0,
    fetched_at      TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_gallery_media_type ON gallery_media(media_type);
CREATE INDEX idx_gallery_media_timestamp ON gallery_media(ig_timestamp DESC);
