--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)

-- Started on 2022-08-28 14:50:25 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 24583)
-- Name: testero_auth; Type: SCHEMA; Schema: -; Owner: testero_auth
--

CREATE SCHEMA testero_auth;


ALTER SCHEMA testero_auth OWNER TO testero_auth;

--
-- TOC entry 210 (class 1259 OID 24600)
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: testero_auth; Owner: testero_auth
--

CREATE SEQUENCE testero_auth.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE testero_auth.hibernate_sequence OWNER TO testero_auth;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 24591)
-- Name: user; Type: TABLE; Schema: testero_auth; Owner: testero_auth
--

CREATE TABLE testero_auth."user" (
    id bigint NOT NULL,
    username character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    name character varying(100) NOT NULL,
    roles character varying(255) NOT NULL,
    active boolean NOT NULL
);


ALTER TABLE testero_auth."user" OWNER TO testero_auth;

--
-- TOC entry 3315 (class 0 OID 24591)
-- Dependencies: 209
-- Data for Name: user; Type: TABLE DATA; Schema: testero_auth; Owner: testero_auth
--

COPY testero_auth."user" (id, username, password, name, roles, active) FROM stdin;
1	mario	$2a$10$04uT/OxXAkURZGr5vOqaAubNZNHUnhzsCF/UJYpjiCqfL3niRC.ue	mario rossi	TEACHER	t
2	luigi	$2a$10$Tp312l59i6qpiodtZg1geOxhOVEKakUjqW/mFv8luRHFyjA95Z6Ly	luigi bianchi	STUDENT	t
\.


--
-- TOC entry 3322 (class 0 OID 0)
-- Dependencies: 210
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: testero_auth; Owner: testero_auth
--

SELECT pg_catalog.setval('testero_auth.hibernate_sequence', 2, true);


--
-- TOC entry 3173 (class 2606 OID 24597)
-- Name: user User_pkey; Type: CONSTRAINT; Schema: testero_auth; Owner: testero_auth
--

ALTER TABLE ONLY testero_auth."user"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- TOC entry 3175 (class 2606 OID 24599)
-- Name: user User_username_unique; Type: CONSTRAINT; Schema: testero_auth; Owner: testero_auth
--

ALTER TABLE ONLY testero_auth."user"
    ADD CONSTRAINT "User_username_unique" UNIQUE (username);


-- Completed on 2022-08-28 14:50:25 CEST

--
-- PostgreSQL database dump complete
--

