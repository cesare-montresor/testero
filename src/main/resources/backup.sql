--
-- PostgreSQL database cluster dump
--

-- Started on 2022-08-28 14:54:04 CEST

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

-- CREATE ROLE postgres;
-- ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:ialDfrR2qc0zUlOHeRE/Fg==$zAzS2wiSjCj8fLprGoVUQ1gm65kbfDbHyFJsGlxs7yo=:CuLSK30Brs68BqdipAWZ8V3ibRTa43kxR6ylRP0V1QY=';
CREATE ROLE testero_auth;
ALTER ROLE testero_auth WITH NOSUPERUSER NOINHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:IlK5G7UEabxeAYXxsgLhCA==$z7x94awuMQYRqdQHahFpydPoOymZD+hY/z93Igl4v4k=:mZjY4ma3G5RPdEdkqL3g1CpUlg23SAiQzctViPuwLFA=';
CREATE ROLE testero_core;
ALTER ROLE testero_core WITH NOSUPERUSER NOINHERIT NOCREATEROLE NOCREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:JicLPKYql7J3NZIValPoKQ==$5HSPEwAfnWFccvEgA00aoFDhS8iyi4Hi3SIAbOv928g=:FPmLXoDbEe2mzbd627uWWv6xS0DDGrgRWI+Qbbmpkzw=';






--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)

-- Started on 2022-08-28 14:54:04 CEST

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

-- Completed on 2022-08-28 14:54:04 CEST

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--


--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-1.pgdg20.04+1)

-- Started on 2022-08-28 14:54:04 CEST

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

-- Completed on 2022-08-28 14:54:05 CEST

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

-- Started on 2022-08-28 14:54:05 CEST

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


-- Completed on 2022-08-28 14:54:05 CEST

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

-- Started on 2022-08-28 14:54:05 CEST

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
-- TOC entry 3373 (class 1262 OID 16393)
-- Name: testero_core; Type: DATABASE; Schema: -; Owner: testero_core
--

CREATE DATABASE testero_core WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


ALTER DATABASE testero_core OWNER TO testero_core;


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
-- TOC entry 214 (class 1259 OID 24697)
-- Name: compilazione; Type: TABLE; Schema: testero_core; Owner: testero_core
--

CREATE TABLE testero_core.compilazione (
                                           id integer NOT NULL,
                                           datatest timestamp without time zone NOT NULL,
                                           nometest character varying NOT NULL,
                                           completo boolean DEFAULT false NOT NULL,
                                           user_id bigint NOT NULL
);


ALTER TABLE testero_core.compilazione OWNER TO testero_core;

--
-- TOC entry 213 (class 1259 OID 24696)
-- Name: compilazione_id_seq; Type: SEQUENCE; Schema: testero_core; Owner: testero_core
--

CREATE SEQUENCE testero_core.compilazione_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE testero_core.compilazione_id_seq OWNER TO testero_core;

--
-- TOC entry 3374 (class 0 OID 0)
-- Dependencies: 213
-- Name: compilazione_id_seq; Type: SEQUENCE OWNED BY; Schema: testero_core; Owner: testero_core
--

ALTER SEQUENCE testero_core.compilazione_id_seq OWNED BY testero_core.compilazione.id;


--
-- TOC entry 215 (class 1259 OID 24708)
-- Name: compilazione_risposta; Type: TABLE; Schema: testero_core; Owner: testero_core
--

CREATE TABLE testero_core.compilazione_risposta (
                                                    id integer NOT NULL,
                                                    compilazione integer NOT NULL,
                                                    domanda integer NOT NULL,
                                                    risposta integer NOT NULL
);


ALTER TABLE testero_core.compilazione_risposta OWNER TO testero_core;

--
-- TOC entry 216 (class 1259 OID 24726)
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
-- TOC entry 3375 (class 0 OID 0)
-- Dependencies: 210
-- Name: risposta_id_seq; Type: SEQUENCE OWNED BY; Schema: testero_core; Owner: testero_core
--

ALTER SEQUENCE testero_core.risposta_id_seq OWNED BY testero_core.risposta.id;


--
-- TOC entry 217 (class 1259 OID 24748)
-- Name: test; Type: TABLE; Schema: testero_core; Owner: testero_core
--

CREATE TABLE testero_core.test (
                                   id integer NOT NULL,
                                   data bigint NOT NULL,
                                   nome character varying NOT NULL,
                                   ordinecasuale boolean DEFAULT false,
                                   domandeconnumero boolean DEFAULT false
);


ALTER TABLE testero_core.test OWNER TO testero_core;

--
-- TOC entry 3196 (class 2604 OID 24700)
-- Name: compilazione id; Type: DEFAULT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.compilazione ALTER COLUMN id SET DEFAULT nextval('testero_core.compilazione_id_seq'::regclass);


--
-- TOC entry 3194 (class 2604 OID 24669)
-- Name: risposta id; Type: DEFAULT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.risposta ALTER COLUMN id SET DEFAULT nextval('testero_core.risposta_id_seq'::regclass);


--
-- TOC entry 3364 (class 0 OID 24697)
-- Dependencies: 214
-- Data for Name: compilazione; Type: TABLE DATA; Schema: testero_core; Owner: testero_core
--

COPY testero_core.compilazione (id, datatest, nometest, completo, user_id) FROM stdin;
\.


--
-- TOC entry 3365 (class 0 OID 24708)
-- Dependencies: 215
-- Data for Name: compilazione_risposta; Type: TABLE DATA; Schema: testero_core; Owner: testero_core
--

COPY testero_core.compilazione_risposta (id, compilazione, domanda, risposta) FROM stdin;
\.


--
-- TOC entry 3366 (class 0 OID 24726)
-- Dependencies: 216
-- Data for Name: domanda; Type: TABLE DATA; Schema: testero_core; Owner: testero_core
--

COPY testero_core.domanda (id, nome, testo, punti, ordinecasuale, risposteconnumero) FROM stdin;
8	Tempo aaa	Che tempo fa?	10.00	f	f
17	Tempo asdasd	Che tempo fa?	10.00	f	f
22	Tempo a	Che tempo fa?	10.00	f	f
20	 sdad	Che tempo fa?	10.00	f	f
\.


--
-- TOC entry 3359 (class 0 OID 24635)
-- Dependencies: 209
-- Data for Name: in_test; Type: TABLE DATA; Schema: testero_core; Owner: testero_core
--

COPY testero_core.in_test (test_id, domanda_id) FROM stdin;
\.


--
-- TOC entry 3361 (class 0 OID 24666)
-- Dependencies: 211
-- Data for Name: risposta; Type: TABLE DATA; Schema: testero_core; Owner: testero_core
--

COPY testero_core.risposta (id, testo, punteggio, domanda) FROM stdin;
23	Sole	1.0000	22
24	Pioggia	0.0000	22
25	Neve	0.0000	22
\.


--
-- TOC entry 3367 (class 0 OID 24748)
-- Dependencies: 217
-- Data for Name: test; Type: TABLE DATA; Schema: testero_core; Owner: testero_core
--

COPY testero_core.test (id, data, nome, ordinecasuale, domandeconnumero) FROM stdin;
27	1660930617	Test K	f	t
28	1660930664	Test K	f	t
29	1660930674	Test K	f	t
30	1661195860	Test 0	f	f
32	1661270141	mario	t	f
33	1661270394	nomeeee	t	f
34	1661270398	nomeeee	t	f
35	1661270417	nomeeee	t	f
36	1661270458	nomeeee	t	f
37	1661270496	nomeeee	t	f
38	1661270726	marrrio	t	f
39	1661270729	marrrio	t	f
40	1661270730	marrrio	t	f
41	1661270803	nomeeee	t	f
42	1661271080	nomeeee	t	f
43	1661271145	nomeeee	t	f
44	1661271261	nomeeee	t	f
45	1661271283	nomeeee	t	f
46	1661271302	nomeeee	t	f
47	1661271335	nomeeee	t	f
48	1661271341	nomeeee	t	f
49	1661271355	nomeeee	t	f
50	1661271370	nomeeee	t	f
51	1661271412	nomeeee	t	f
52	1661272400	nomeeee	t	f
53	1661272416	nomeeee	t	f
54	1661273308	nomeeee	t	f
55	1661273366	nomeeee	t	f
56	1661275808	nomeeee	t	f
57	1661275818	nomeeee	t	f
58	1661275905	nomeeee	t	f
59	1661335442	nomeeee	t	f
60	1661335577	nomeeee	t	f
61	1661335623	nomeeee	t	f
62	1661335649	nomeeee	t	f
63	1661335662	nomeeee	t	f
64	1661335799	nomeeee	t	f
65	1661335871	nomeeee	t	f
66	1661342642	nomeeee	t	f
67	1661506468	nomeeee	t	f
68	1661506678	nomeeee	t	f
69	1661688577	nomeeee	t	f
70	1661696241	nomeeee	t	f
\.


--
-- TOC entry 3376 (class 0 OID 0)
-- Dependencies: 213
-- Name: compilazione_id_seq; Type: SEQUENCE SET; Schema: testero_core; Owner: testero_core
--

SELECT pg_catalog.setval('testero_core.compilazione_id_seq', 1, false);


--
-- TOC entry 3377 (class 0 OID 0)
-- Dependencies: 212
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: testero_core; Owner: testero_core
--

SELECT pg_catalog.setval('testero_core.hibernate_sequence', 70, true);


--
-- TOC entry 3378 (class 0 OID 0)
-- Dependencies: 210
-- Name: risposta_id_seq; Type: SEQUENCE SET; Schema: testero_core; Owner: testero_core
--

SELECT pg_catalog.setval('testero_core.risposta_id_seq', 1, false);


--
-- TOC entry 3207 (class 2606 OID 24707)
-- Name: compilazione compilazione_datatest_nometest_key; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.compilazione
    ADD CONSTRAINT compilazione_datatest_nometest_key UNIQUE (datatest, nometest);


--
-- TOC entry 3209 (class 2606 OID 24705)
-- Name: compilazione compilazione_pkey; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.compilazione
    ADD CONSTRAINT compilazione_pkey PRIMARY KEY (id);


--
-- TOC entry 3211 (class 2606 OID 24712)
-- Name: compilazione_risposta compilazione_risposta_pkey; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.compilazione_risposta
    ADD CONSTRAINT compilazione_risposta_pkey PRIMARY KEY (id);


--
-- TOC entry 3213 (class 2606 OID 24736)
-- Name: domanda domanda_nome_key; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.domanda
    ADD CONSTRAINT domanda_nome_key UNIQUE (nome);


--
-- TOC entry 3215 (class 2606 OID 24734)
-- Name: domanda domanda_pkey; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.domanda
    ADD CONSTRAINT domanda_pkey PRIMARY KEY (id);


--
-- TOC entry 3203 (class 2606 OID 24714)
-- Name: in_test in_test_pkey; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.in_test
    ADD CONSTRAINT in_test_pkey PRIMARY KEY (test_id, domanda_id);


--
-- TOC entry 3205 (class 2606 OID 24674)
-- Name: risposta risposta_pkey; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.risposta
    ADD CONSTRAINT risposta_pkey PRIMARY KEY (id);


--
-- TOC entry 3217 (class 2606 OID 24758)
-- Name: test test_data_nome_key; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.test
    ADD CONSTRAINT test_data_nome_key UNIQUE (data, nome);


--
-- TOC entry 3219 (class 2606 OID 24756)
-- Name: test test_pkey; Type: CONSTRAINT; Schema: testero_core; Owner: testero_core
--

ALTER TABLE ONLY testero_core.test
    ADD CONSTRAINT test_pkey PRIMARY KEY (id);


-- Completed on 2022-08-28 14:54:05 CEST

--
-- PostgreSQL database dump complete
--

-- Completed on 2022-08-28 14:54:05 CEST

--
-- PostgreSQL database cluster dump complete
--
