-- Table: testero_auth.user

-- DROP TABLE IF EXISTS testero_auth."user";

CREATE TABLE IF NOT EXISTS testero_auth."user"
(
    id bigint NOT NULL,
    username character varying(100) COLLATE pg_catalog."default" NOT NULL,
    password character varying(100) COLLATE pg_catalog."default" NOT NULL,
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    roles character varying(255) COLLATE pg_catalog."default" NOT NULL,
    active boolean NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY (id),
    CONSTRAINT "User_username_unique" UNIQUE (username)
)

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS testero_auth."user"
    OWNER to testero_auth;

CREATE SEQUENCE hibernate_sequence START 1;


-- 1	"mario"	"$2a$10$04uT/OxXAkURZGr5vOqaAubNZNHUnhzsCF/UJYpjiCqfL3niRC.ue"	"mario rossi"	"TEACHER"	true
-- 2	"luigi"	"$2a$10$Tp312l59i6qpiodtZg1geOxhOVEKakUjqW/mFv8luRHFyjA95Z6Ly"	"luigi bianchi"	"STUDENT"	true