--
-- PostgreSQL database cluster dump
--

-- Started on 2022-08-29 17:25:39 CEST

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

--CREATE ROLE postgres;
--ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:ialDfrR2qc0zUlOHeRE/Fg==$zAzS2wiSjCj8fLprGoVUQ1gm65kbfDbHyFJsGlxs7yo=:CuLSK30Brs68BqdipAWZ8V3ibRTa43kxR6ylRP0V1QY=';
CREATE ROLE testero_auth;
ALTER ROLE testero_auth WITH NOSUPERUSER NOINHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:IlK5G7UEabxeAYXxsgLhCA==$z7x94awuMQYRqdQHahFpydPoOymZD+hY/z93Igl4v4k=:mZjY4ma3G5RPdEdkqL3g1CpUlg23SAiQzctViPuwLFA=';
CREATE ROLE testero_core;
ALTER ROLE testero_core WITH NOSUPERUSER NOINHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:JicLPKYql7J3NZIValPoKQ==$5HSPEwAfnWFccvEgA00aoFDhS8iyi4Hi3SIAbOv928g=:FPmLXoDbEe2mzbd627uWWv6xS0DDGrgRWI+Qbbmpkzw=';
CREATE ROLE testero_resp;
ALTER ROLE testero_resp WITH NOSUPERUSER NOINHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:0Rm2AlMNEJ0MQavGUDgXNQ==$s7BSUALJtYAhKk4ISRQDHrVZc7rm1p6vy/L+uoxTePQ=:Kj9cGEke0cQJXGNmxb1nVYMLF2ZEWPl0y0Sjta/hZPg=';






--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)

-- Started on 2022-08-29 17:25:39 CEST

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

-- Completed on 2022-08-29 17:25:39 CEST

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)

-- Started on 2022-08-29 17:25:39 CEST

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

-- Completed on 2022-08-29 17:25:39 CEST

--
-- PostgreSQL database dump complete
--

--
-- Database "testero_auth" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)

-- Started on 2022-08-29 17:25:39 CEST

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
-- TOC entry 3322 (class 1262 OID 16394)
-- Name: testero_auth; Type: DATABASE; Schema: -; Owner: testero_auth
--

CREATE DATABASE testero_auth WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


ALTER DATABASE testero_auth OWNER TO testero_auth;

\connect testero_auth

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

INSERT INTO testero_auth."user" VALUES (1, 'mario', '$2a$10$04uT/OxXAkURZGr5vOqaAubNZNHUnhzsCF/UJYpjiCqfL3niRC.ue', 'mario rossi', 'TEACHER', true);
INSERT INTO testero_auth."user" VALUES (2, 'luigi', '$2a$10$Tp312l59i6qpiodtZg1geOxhOVEKakUjqW/mFv8luRHFyjA95Z6Ly', 'luigi bianchi', 'STUDENT', true);


--
-- TOC entry 3323 (class 0 OID 0)
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


-- Completed on 2022-08-29 17:25:39 CEST

--
-- PostgreSQL database dump complete
--

--
-- Database "testero_core" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)

-- Started on 2022-08-29 17:25:39 CEST

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
-- TOC entry 3353 (class 1262 OID 16393)
-- Name: testero_core; Type: DATABASE; Schema: -; Owner: testero_core
--

CREATE DATABASE testero_core WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


ALTER DATABASE testero_core OWNER TO testero_core;

\connect testero_core

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
-- TOC entry 3 (class 2615 OID 24601)
-- Name: testero_core; Type: SCHEMA; Schema: -; Owner: testero_core
--

CREATE SCHEMA testero_core;


ALTER SCHEMA testero_core OWNER TO testero_core;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 213 (class 1259 OID 24726)
-- Name: domanda; Type: TABLE; Schema: testero_core; Owner: testero_core
--

CREATE TABLE testero_core.domanda (
                                      id integer NOT NULL,
                                      nome character varying NOT NULL,
                                      testo character varying NOT NULL,
                                      punti numeric(5,2),
                                      ordinecasuale boolean DEFAULT false,
                                      risposteconnumero boolean DEFAULT false
);


ALTER TABLE testero_core.domanda OWNER TO testero_core;

--
-- TOC entry 212 (class 1259 OID 24680)
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: testero_core; Owner: testero_core
--

CREATE SEQUENCE testero_core.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE testero_core.hibernate_sequence OWNER TO testero_core;

--
-- TOC entry 209 (class 1259 OID 24635)
-- Name: in_test; Type: TABLE; Schema: testero_core; Owner: testero_core
--

CREATE TABLE testero_core.in_test (
                                      test_id bigint NOT NULL,
                                      domanda_id bigint NOT NULL
);


ALTER TABLE testero_core.in_test OWNER TO testero_core;

--
-- TOC entry 211 (class 1259 OID 24666)
-- Name: risposta; Type: TABLE; Schema: testero_core; Owner: testero_core
--

CREATE TABLE testero_core.risposta (
                                       id integer NOT NULL,
                                       testo character varying NOT NULL,
                                       punteggio numeric(5,4),
                                       domanda character varying,
                                       CONSTRAINT risposta_punteggio_check CHECK ((punteggio <= 1.0))
);


ALTER TABLE testero_core.risposta OWNER TO testero_core;

--
-- TOC entry 210 (class 1259 OID 24665)
-- Name: risposta_id_seq; Type: SEQUENCE; Schema: testero_core; Owner: testero_core
--

CREATE SEQUENCE testero_core.risposta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE testero_core.risposta_id_seq OWNER TO testero_core;

--
-- TOC entry 3354 (class 0 OID 0)
-- Dependencies: 210
-- Name: risposta_id_seq; Type: SEQUENCE OWNED BY; Schema: testero_core; Owner: testero_core
--

ALTER SEQUENCE testero_core.risposta_id_seq OWNED BY testero_core.risposta.id;


--
-- TOC entry 214 (class 1259 OID 24759)
-- Name: test; Type: TABLE; Schema: testero_core; Owner: testero_core
--

CREATE TABLE testero_core.test (
                                   id integer NOT NULL,
                                   data time without time zone NOT NULL,
                                   nome character varying NOT NULL,
                                   ordinecasuale boolean DEFAULT false,
                                   domandeconnumero boolean DEFAULT false
);


ALTER TABLE testero_core.test OWNER TO testero_core;

--
-- TOC entry 3185 (class 2604 OID 24669)
-- Name: risposta id; Type: DEFAULT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.risposta ALTER COLUMN id SET DEFAULT nextval('testero_core.risposta_id_seq'::regclass);


--
-- TOC entry 3346 (class 0 OID 24726)
-- Dependencies: 213
-- Data for Name: domanda; Type: TABLE DATA; Schema: testero_core; Owner: testero_core
--

INSERT INTO testero_core.domanda VALUES (8, 'Tempo aaa', 'Che tempo fa?', 10.00, false, false);
INSERT INTO testero_core.domanda VALUES (17, 'Tempo asdasd', 'Che tempo fa?', 10.00, false, false);
INSERT INTO testero_core.domanda VALUES (22, 'Tempo a', 'Che tempo fa?', 10.00, false, false);
INSERT INTO testero_core.domanda VALUES (20, ' sdad', 'Che tempo fa?', 10.00, false, false);


--
-- TOC entry 3342 (class 0 OID 24635)
-- Dependencies: 209
-- Data for Name: in_test; Type: TABLE DATA; Schema: testero_core; Owner: testero_core
--



--
-- TOC entry 3344 (class 0 OID 24666)
-- Dependencies: 211
-- Data for Name: risposta; Type: TABLE DATA; Schema: testero_core; Owner: testero_core
--

INSERT INTO testero_core.risposta VALUES (23, 'Sole', 1.0000, '22');
INSERT INTO testero_core.risposta VALUES (24, 'Pioggia', 0.0000, '22');
INSERT INTO testero_core.risposta VALUES (25, 'Neve', 0.0000, '22');


--
-- TOC entry 3347 (class 0 OID 24759)
-- Dependencies: 214
-- Data for Name: test; Type: TABLE DATA; Schema: testero_core; Owner: testero_core
--

INSERT INTO testero_core.test VALUES (73, '16:35:57.802316', 'nomeeee', true, false);
INSERT INTO testero_core.test VALUES (74, '17:12:07.636959', 'nomeeee', true, false);


--
-- TOC entry 3355 (class 0 OID 0)
-- Dependencies: 212
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: testero_core; Owner: testero_core
--

SELECT pg_catalog.setval('testero_core.hibernate_sequence', 74, true);


--
-- TOC entry 3356 (class 0 OID 0)
-- Dependencies: 210
-- Name: risposta_id_seq; Type: SEQUENCE SET; Schema: testero_core; Owner: testero_core
--

SELECT pg_catalog.setval('testero_core.risposta_id_seq', 1, false);


--
-- TOC entry 3196 (class 2606 OID 24736)
-- Name: domanda domanda_nome_key; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.domanda
    ADD CONSTRAINT domanda_nome_key UNIQUE (nome);


--
-- TOC entry 3198 (class 2606 OID 24734)
-- Name: domanda domanda_pkey; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.domanda
    ADD CONSTRAINT domanda_pkey PRIMARY KEY (id);


--
-- TOC entry 3192 (class 2606 OID 24714)
-- Name: in_test in_test_pkey; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.in_test
    ADD CONSTRAINT in_test_pkey PRIMARY KEY (test_id, domanda_id);


--
-- TOC entry 3194 (class 2606 OID 24674)
-- Name: risposta risposta_pkey; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.risposta
    ADD CONSTRAINT risposta_pkey PRIMARY KEY (id);


--
-- TOC entry 3200 (class 2606 OID 24769)
-- Name: test test_data_nome_key; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.test
    ADD CONSTRAINT test_data_nome_key UNIQUE (data, nome);


--
-- TOC entry 3202 (class 2606 OID 24767)
-- Name: test test_pkey; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.test
    ADD CONSTRAINT test_pkey PRIMARY KEY (id);


-- Completed on 2022-08-29 17:25:40 CEST

--
-- PostgreSQL database dump complete
--

--
-- Database "testero_resp" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)

-- Started on 2022-08-29 17:25:40 CEST

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
-- TOC entry 3326 (class 1262 OID 24773)
-- Name: testero_resp; Type: DATABASE; Schema: -; Owner: testero_resp
--

CREATE DATABASE testero_resp WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


ALTER DATABASE testero_resp OWNER TO testero_resp;

\connect testero_resp

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
-- TOC entry 4 (class 2615 OID 24775)
-- Name: testero_resp; Type: SCHEMA; Schema: -; Owner: testero_resp
--

CREATE SCHEMA testero_resp;


ALTER SCHEMA testero_resp OWNER TO testero_resp;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 209 (class 1259 OID 24776)
-- Name: compilazione; Type: TABLE; Schema: testero_resp; Owner: testero_resp
--

CREATE TABLE testero_resp.compilazione (
                                           id integer NOT NULL,
                                           test integer NOT NULL,
                                           completo boolean DEFAULT false NOT NULL,
                                           "user" bigint NOT NULL
);


ALTER TABLE testero_resp.compilazione OWNER TO testero_resp;

--
-- TOC entry 210 (class 1259 OID 24782)
-- Name: compilazione_risposta; Type: TABLE; Schema: testero_resp; Owner: testero_resp
--

CREATE TABLE testero_resp.compilazione_risposta (
                                                    id integer NOT NULL,
                                                    compilazione integer NOT NULL,
                                                    domanda integer NOT NULL,
                                                    risposta integer NOT NULL
);


ALTER TABLE testero_resp.compilazione_risposta OWNER TO testero_resp;

--
-- TOC entry 3319 (class 0 OID 24776)
-- Dependencies: 209
-- Data for Name: compilazione; Type: TABLE DATA; Schema: testero_resp; Owner: testero_resp
--



--
-- TOC entry 3320 (class 0 OID 24782)
-- Dependencies: 210
-- Data for Name: compilazione_risposta; Type: TABLE DATA; Schema: testero_resp; Owner: testero_resp
--



--
-- TOC entry 3177 (class 2606 OID 24781)
-- Name: compilazione compilazione_pkey; Type: CONSTRAINT; Schema: testero_resp; Owner: testero_resp
--

ALTER TABLE ONLY testero_resp.compilazione
    ADD CONSTRAINT compilazione_pkey PRIMARY KEY (id);


--
-- TOC entry 3179 (class 2606 OID 24786)
-- Name: compilazione_risposta compilazione_risposta_pkey; Type: CONSTRAINT; Schema: testero_resp; Owner: testero_resp
--

ALTER TABLE ONLY testero_resp.compilazione_risposta
    ADD CONSTRAINT compilazione_risposta_pkey PRIMARY KEY (id);


-- Completed on 2022-08-29 17:25:40 CEST

--
-- PostgreSQL database dump complete
--

-- Completed on 2022-08-29 17:25:40 CEST

--
-- PostgreSQL database cluster dump complete
--
